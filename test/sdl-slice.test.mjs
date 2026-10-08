import { test } from 'node:test';
import assert from 'node:assert/strict';
import { copyFileSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'graphql';
import { buildCdmIndex } from '../scripts/apidocs/lib/cdm.mjs';
import { runAnnotate } from '../scripts/apidocs/annotate.mjs';
import { buildSlice, estimateTokens, ownerOf, parseSdl, rootTypeNames } from '../scripts/apidocs/lib/sdl-slice.mjs';

const SITE = 'https://example.test/docs';
const fixture = (p) => fileURLToPath(new URL(`./fixtures/${p}`, import.meta.url));

// Public SDL + manifest produced by the real annotate step from the fixture schema.
function annotatedFixture() {
  const dir = mkdtempSync(join(tmpdir(), 'apidocs-slice-'));
  copyFileSync(fixture('schema.graphql'), join(dir, 'raw.graphql'));
  const cdm = buildCdmIndex([readFileSync(fixture('cdm/design.yaml'), 'utf8'), readFileSync(fixture('cdm/platform.yaml'), 'utf8')]);
  writeFileSync(join(dir, 'cdm-index.json'), JSON.stringify(cdm));
  const publicSchemaPath = join(dir, 'schema.graphql');
  runAnnotate({
    schemaDir: dir,
    contextMapPath: fixture('context-map.yaml'),
    allowlistPath: fixture('unassigned-allowlist.txt'),
    publicSchemaPath,
  });
  return {
    document: parseSdl(readFileSync(publicSchemaPath, 'utf8')),
    manifest: JSON.parse(readFileSync(join(dir, 'manifest.json'), 'utf8')),
  };
}

const { document, manifest } = annotatedFixture();
const slice = (contextId) => buildSlice({ document, manifest, contextId, siteUrl: SITE });

test('estimateTokens is ceil(chars / 4)', () => {
  assert.equal(estimateTokens(''), 0);
  assert.equal(estimateTokens('abcde'), 2);
});

test('rootTypeNames defaults to Query/Mutation/Subscription and honours a schema definition', () => {
  assert.deepEqual(rootTypeNames(parse('type Query { a: Int }')), { query: 'Query', mutation: 'Mutation', subscription: 'Subscription' });
  assert.equal(rootTypeNames(parse('schema { query: Root } type Root { a: Int }')).query, 'Root');
});

test('ownerOf resolves entity and namespace types', () => {
  assert.equal(ownerOf('DesProject', manifest), 'design');
  assert.equal(ownerOf('DesignQueries', manifest), 'design');
  assert.equal(ownerOf('DesignProjectQueries', manifest), 'design');
  assert.equal(ownerOf('Nope', manifest), null);
});

test('design slice holds its types, namespace wrappers and root fields, and parses', () => {
  const { text } = slice('design');
  parse(text);
  assert.match(text, /^type DesProject implements Node \{/m);
  assert.match(text, /^type DesignQueries \{/m);
  assert.match(text, /^type DesignProjectQueries \{/m);
  assert.match(text, /^type Query \{/m);
  assert.match(text, /^ {2}design: DesignQueries @experimental$/m);
  assert.match(text, /^ {2}desProjectById\(id: ID!\): DesProject$/m);
  assert.match(text, /^ {2}zzzOverridden: String$/m);
  assert.match(text, /^type Mutation \{\n {2}designRuleCheckExecute\(input: String!\): Boolean @experimental\n\}/m);
  assert.match(text, /"Gets a project by its identifier\."/);
  assert.match(text, /oldName: String @deprecated\(reason: "Use `name`\."\)/);
});

test('design slice excludes other contexts', () => {
  const { text } = slice('design');
  assert.doesNotMatch(text, /desCreateCommentThread|bomBoms|desWorkspaceInsSettings|gloCus|dmDeviceFamilies/);
  assert.doesNotMatch(text, /^type (DesWorkspace|BomWip|PageInfo) /m);
  assert.doesNotMatch(text, /^interface Node/m);
  assert.doesNotMatch(text, /^directive /m);
  assert.doesNotMatch(text, /^schema \{/m);
});

test('the header names the slice, its size, the full schema and external references', () => {
  const { text, tokens, externals } = slice('design');
  const lines = text.split('\n');
  assert.equal(lines[0], `# Altium 365 API — Design schema slice (~${tokens} tokens)`);
  assert.ok(tokens > 0);
  assert.equal(lines[1], '# Not a complete schema: types from other contexts are referenced, not defined.');
  assert.equal(lines[2], `# Full schema for code generation: ${SITE}/schema.graphql`);
  assert.equal(lines[3], '# Referenced from other contexts:');
  assert.ok(lines.includes(`#   Node → Common: ${SITE}/reference/common/schema.graphql`));
  assert.deepEqual(externals.map((external) => external.name), ['Node']);
  // Built-in scalars are never listed.
  assert.doesNotMatch(text, /#\s+(ID|String|Boolean|Int) →/);
});

test('common slice carries shared types and directive definitions but no root fields', () => {
  const { text } = slice('common');
  parse(text);
  assert.match(text, /^interface Node \{/m);
  assert.match(text, /^type PageInfo \{/m);
  assert.match(text, /^scalar Long$/m);
  assert.match(text, /^directive @experimental on /m);
  assert.doesNotMatch(text, /^type Query/m);
  assert.doesNotMatch(text, /Referenced from other contexts/);
});

test('insights slice has its root query and type', () => {
  const { text } = slice('insights');
  assert.match(text, /^ {2}desWorkspaceInsSettings\(workspaceUrl: String!\): DesWorkspaceInsSettings$/m);
  assert.match(text, /^type DesWorkspaceInsSettings \{/m);
  assert.doesNotMatch(text, /^type Mutation/m);
});

test('warns about referenced types that belong to no context', (t) => {
  const warn = t.mock.method(console, 'warn', () => {});
  assert.deepEqual(slice('design').unowned, []);
  assert.equal(warn.mock.callCount(), 0, 'the fixture has no unowned references');
  const { Node: _node, ...types } = manifest.types;
  const result = buildSlice({ document, manifest: { ...manifest, types }, contextId: 'design', siteUrl: SITE });
  assert.deepEqual(result.unowned, ['Node']);
  assert.doesNotMatch(result.text, /#\s+Node →/);
  assert.equal(warn.mock.callCount(), 1);
  assert.equal(warn.mock.calls[0].arguments[0], 'sdl-slice: the Design slice references types that belong to no context: Node');
});

test('an unknown context is an error', () => {
  assert.throws(() => slice('nope'), /unknown context "nope"/);
});
