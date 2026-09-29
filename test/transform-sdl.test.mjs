import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { buildSchema, parse } from 'graphql';
import { stripExperimentalPrefix, stripDirectives, annotateSdl, rootTypeNamesOf, STRIP } from '../scripts/apidocs/lib/transform-sdl.mjs';
import { parseContextMap, contextById } from '../scripts/apidocs/lib/context-map.mjs';
import { buildCdmIndex } from '../scripts/apidocs/lib/cdm.mjs';
import { classifySchema } from '../scripts/apidocs/lib/classify.mjs';

const sdl = readFileSync(new URL('./fixtures/schema.graphql', import.meta.url), 'utf8');

test('removes @authorize, @cost, their definitions and ApplyPolicy', () => {
  const out = stripDirectives(sdl, STRIP);
  assert.doesNotMatch(out, /@authorize|@cost|directive @authorize|directive @cost|ApplyPolicy/);
  assert.match(out, /@experimental/);
  assert.match(out, /@deprecated\(reason: "Use `name`\."\)/);
  assert.match(out, /"Gets a project by its identifier\."/);
  const schema = buildSchema(out);
  assert.ok(schema.getType('DesProject'));
  assert.equal(schema.getType('ApplyPolicy'), undefined);
});

test('stripExperimentalPrefix drops the leading **Experimental** marker from every kind of description', () => {
  const input = `
"**Experimental** The tag types."
type A @experimental {
  "**Experimental**"
  bare: ID!
  """
  **Experimental**
  Block string description.
  """
  block(
    "**Experimental** Arg description."
    arg: String
  ): String
  "Mentions **Experimental** only mid-text."
  keep: String
}

enum E {
  "**Experimental**   Spaced value."
  ONE
}

input I {
  "**Experimental** Input field."
  f: String
}

"**Experimental** Directive."
directive @d on FIELD_DEFINITION
`;
  const out = stripExperimentalPrefix(input);
  assert.match(out, /"The tag types\."\ntype A/);
  assert.match(out, /"""Block string description\."""/);
  assert.match(out, /"Arg description\."/);
  assert.match(out, /"Spaced value\."/);
  assert.match(out, /"Input field\."/);
  assert.match(out, /"Directive\."/);
  assert.match(out, /"Mentions \*\*Experimental\*\* only mid-text\."/);
  assert.doesNotMatch(out, /"\*\*Experimental\*\*/);
  assert.doesNotMatch(out, /^\s*\*\*Experimental\*\*/m);
  assert.doesNotMatch(out, /(^|[^"])""([^"]|$)/);
  assert.match(out, /\n  bare: ID!/);
  assert.ok(parse(out));
});

const readFixture = (p) => readFileSync(new URL(`./fixtures/${p}`, import.meta.url), 'utf8');

function annotateFixture() {
  const map = parseContextMap(readFixture('context-map.yaml'));
  const cdm = buildCdmIndex([readFixture('cdm/design.yaml'), readFixture('cdm/platform.yaml')]);
  const publicSdl = stripDirectives(sdl, STRIP);
  const classification = classifySchema(buildSchema(publicSdl), map, cdm);
  return buildSchema(annotateSdl(publicSdl, { classification, titleOf: (id) => contextById(map, id).title }));
}

const directiveArg = (astNode, name) => {
  const directive = astNode.directives.find((d) => d.name.value === name);
  return directive ? directive.arguments[0]?.value.value ?? true : undefined;
};

test('adds @doc categories to types, root fields and namespace fields', () => {
  const schema = annotateFixture();
  assert.equal(directiveArg(schema.getType('DesProject').astNode, 'doc'), 'Design');
  assert.equal(directiveArg(schema.getType('DmDeviceModel').astNode, 'doc'), 'Renesas (preview)');
  assert.equal(directiveArg(schema.getType('PageInfo').astNode, 'doc'), 'Common');
  const query = schema.getQueryType().getFields();
  assert.equal(directiveArg(query.desProjectById.astNode, 'doc'), 'Design');
  assert.equal(directiveArg(query.design.astNode, 'doc'), 'Design');
  assert.equal(directiveArg(query.zzzUnknown.astNode, 'doc'), undefined);
  assert.equal(directiveArg(schema.getType('DesignQueries').astNode, 'doc'), 'Design');
  const byId = schema.getType('DesignProjectQueries').getFields().byId;
  assert.equal(directiveArg(byId.astNode, 'doc'), 'Design');
  assert.equal(directiveArg(byId.astNode, 'experimental'), true);
  const mutation = schema.getMutationType().getFields();
  assert.equal(directiveArg(mutation.desCreateCommentThread.astNode, 'doc'), 'Collaboration');
  assert.ok(schema.getDirective('doc'));
});

test('does not duplicate an existing @experimental', () => {
  const schema = annotateFixture();
  const design = schema.getQueryType().getFields().design;
  assert.equal(design.astNode.directives.filter((d) => d.name.value === 'experimental').length, 1);
});

test('annotates custom-named root types', () => {
  const custom = 'schema { query: RootQuery }\ntype RootQuery { desProjectById: String }\n';
  const customSchema = buildSchema(custom);
  assert.deepEqual(rootTypeNamesOf(customSchema), { RootQuery: 'query' });
  const map = parseContextMap(readFixture('context-map.yaml'));
  const classification = classifySchema(customSchema, map, {});
  const annotated = buildSchema(annotateSdl(custom, {
    classification,
    titleOf: (id) => contextById(map, id).title,
    rootTypeNames: rootTypeNamesOf(customSchema),
  }));
  assert.equal(directiveArg(annotated.getQueryType().getFields().desProjectById.astNode, 'doc'), 'Design');
});
