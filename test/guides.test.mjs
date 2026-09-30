// Validates every GraphQL operation in docs/guides against the public SDL (static/schema.graphql, or the file named by
// APIDOCS_GUIDES_SCHEMA — CI uses the built site's build/schema.graphql).
// Not part of `npm test` (a fresh checkout has no SDL yet): run `npm run apidocs` first, then `npm run test:guides`.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { buildSchema, parse, validate } from 'graphql';
import { readFrontMatter } from '../scripts/apidocs/lib/pages.mjs';

const GUIDES_DIR = 'docs/guides';
const SDL = process.env.APIDOCS_GUIDES_SCHEMA || 'static/schema.graphql';
const SDL_KEYWORD = /^\s*(?:"""[\s\S]*?"""\s*|"[^"\n]*"\s*)?(type|input|enum|interface|union|scalar|schema|directive|extend)\b/;

// ```graphql fences with their info string (e.g. title="SDL") and 1-based line number.
function graphqlBlocks(text) {
  const blocks = [];
  const fence = /^```graphql([^\n]*)\n([\s\S]*?)^```[ \t]*$/gm;
  let match;
  while ((match = fence.exec(text))) {
    blocks.push({ meta: match[1].trim(), source: match[2], line: text.slice(0, match.index).split('\n').length });
  }
  return blocks;
}

const isSdlBlock = ({ meta, source }) => /title=["']SDL["']/.test(meta) || SDL_KEYWORD.test(source);

// MDX treats `{…}` as JavaScript and `<…>` as JSX: outside code they must not appear in hand-written guides.
function mdxHazards(text) {
  const prose = text
    .replace(/^---\n[\s\S]*?\n---\n/, (frontMatter) => '\n'.repeat(frontMatter.split('\n').length - 1))
    .replace(/^```[\s\S]*?^```/gm, (code) => '\n'.repeat(code.split('\n').length - 1))
    .replace(/`[^`\n]*`/g, '');
  return prose.split('\n').map((line, index) => ({ line: index + 1, text: line })).filter(({ text: line }) => /[{}<>]/.test(line));
}

const guides = existsSync(GUIDES_DIR)
  ? readdirSync(GUIDES_DIR).filter((file) => /\.mdx?$/.test(file)).sort()
  : [];

test('graphqlBlocks, isSdlBlock and mdxHazards', () => {
  const blocks = graphqlBlocks('a\n```graphql\nquery A { a }\n```\n\n```graphql title="SDL"\ntype A { a: Int }\n```\n```json\n{}\n```\n');
  assert.deepEqual(blocks.map((b) => [b.line, isSdlBlock(b)]), [[2, false], [6, true]]);
  assert.ok(isSdlBlock({ meta: '', source: '"Doc."\ntype A { a: Int }' }));
  assert.deepEqual(mdxHazards('---\nt: 1\n---\nok `{a}`\n```\n{b}\n```\nbad {c}\n'), [{ line: 8, text: 'bad {c}' }]);
});

test('the public SDL is available', () => {
  assert.ok(existsSync(SDL), `${SDL} not found: run \`npm run apidocs\` (or apidocs:fetch + apidocs:annotate) first`);
});

test('there are guides to check', () => {
  assert.ok(guides.length > 0, `no guides in ${GUIDES_DIR}`);
});

const schema = existsSync(SDL) ? buildSchema(readFileSync(SDL, 'utf8'), { assumeValidSDL: true }) : null;

for (const file of guides) {
  test(`guide ${file}: front matter and GraphQL examples`, () => {
    assert.ok(schema, `${SDL} not found`);
    const text = readFileSync(join(GUIDES_DIR, file), 'utf8');
    const frontMatter = readFrontMatter(text);
    assert.ok(frontMatter.title, `${file}: front matter needs a title`);
    assert.ok(frontMatter.description, `${file}: front matter needs a description (used in llms.txt)`);
    assert.deepEqual(mdxHazards(text), [], `${file}: braces or angle brackets outside code`);
    const blocks = graphqlBlocks(text);
    const operations = blocks.filter((block) => !isSdlBlock(block));
    assert.ok(operations.length > 0, `${file}: expected at least one GraphQL operation example`);
    for (const block of blocks) {
      const where = `${file}:${block.line}`;
      let document;
      try {
        document = parse(block.source);
      } catch (error) {
        assert.fail(`${where}: does not parse: ${error.message}`);
      }
      if (isSdlBlock(block)) continue;
      const errors = validate(schema, document).map((error) => error.message);
      assert.deepEqual(errors, [], `${where}: invalid against ${SDL}`);
    }
  });
}
