import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  contentProblems, extractLinks, internalPath, linkProblem, runCheck, sliceProblem, stripCode,
} from '../scripts/apidocs/llms-check.mjs';

const SITE = 'https://example.test/docs';

test('stripCode removes fenced blocks and inline code', () => {
  assert.equal(stripCode('a `<Badge>` b\n```js\nexport const x = 1;\n```\nc'), 'a  b\n\nc');
});

test('contentProblems flags JSX, exports, zero-width characters and Docusaurus anchors outside code', () => {
  assert.deepEqual(contentProblems('Plain text with <https://example.com/x> and `<Name>Input!`.\n```tsx\n<Tabs>\nexport const a = 1;\n```\n'), []);
  const problems = contentProblems([
    'Intro <Badge text="x" /> here',
    'export const meta = {};',
    'zero​width',
    '<a class="hash-link" href="#x">',
    'Direct link to Fields',
    '<Tabs>',
  ].join('\n'));
  assert.deepEqual(problems, [
    'JSX element <Badge',
    'JSX element <Tabs',
    '`export const`',
    'zero-width character',
    '`hash-link`',
    '"Direct link to"',
  ]);
});

test('extractLinks finds markdown links, images and autolinks outside code', () => {
  const text = [
    '[a](https://example.test/docs/a.md) and ![img](https://example.test/docs/img/x.png "title")',
    '<https://example.com/auto> and [rel](../b.mdx#c) [angle](<https://example.test/docs/c.md>)',
    '`[code](https://nope)`',
    '```\n[fenced](https://nope)\n```',
  ].join('\n');
  assert.deepEqual(extractLinks(text), [
    'https://example.test/docs/a.md', 'https://example.test/docs/img/x.png', '../b.mdx#c', 'https://example.test/docs/c.md',
    'https://example.com/auto',
  ]);
});

test('internalPath maps internal absolute URLs to build paths', () => {
  assert.equal(internalPath(`${SITE}/reference/design/llms.txt`, SITE), 'reference/design/llms.txt');
  assert.equal(internalPath(`${SITE}/index.md#lifecycle`, SITE), 'index.md');
  assert.equal(internalPath(`${SITE}/`, SITE), '');
  assert.equal(internalPath(SITE, SITE), '');
  assert.equal(internalPath('https://example.test/docsother/x', SITE), null);
  assert.equal(internalPath('https://altiumdeveloper.github.io/cdm/', SITE), null);
});

test('linkProblem: relative and .mdx links fail; internal links must resolve', () => {
  const exists = (path) => ['reference/a.md', 'guides/x/index.html', 'index.html'].includes(path);
  const check = (url) => linkProblem(url, { siteUrl: SITE, exists });
  assert.equal(check(`${SITE}/reference/a.md#top`), null);
  assert.equal(check(`${SITE}/guides/x`), null);
  assert.equal(check(`${SITE}/`), null);
  assert.equal(check('https://example.com/elsewhere'), null);
  assert.equal(check('mailto:a@example.com'), null);
  assert.equal(check(`${SITE}/reference/missing.md`), `broken internal link ${SITE}/reference/missing.md`);
  assert.equal(check('../b.md'), 'relative link ../b.md');
  assert.equal(check('#fields'), 'relative link #fields');
  assert.equal(check('https://example.com/page.mdx#x'), '.mdx link https://example.com/page.mdx#x');
});

test('sliceProblem reports slices that do not parse', () => {
  assert.equal(sliceProblem('# header\ntype A { a: Int }\n'), null);
  assert.match(sliceProblem('type A {'), /does not parse/);
});

test('runCheck scans .md, llms*.txt, types.txt and slices under build/', () => {
  const buildDir = mkdtempSync(join(tmpdir(), 'apidocs-llms-check-'));
  const put = (path, text) => {
    mkdirSync(join(buildDir, path, '..'), { recursive: true });
    writeFileSync(join(buildDir, path), text);
  };
  put('index.html', '<html></html>');
  put('index.md', `# Home\n\n[Design](${SITE}/reference/design/llms.txt)\n`);
  put('llms.txt', `# Site\n- [Home](${SITE}/index.md)\n- [Gone](${SITE}/gone.md)\n`);
  put('reference/design/llms.txt', `# Design\n- [Types](${SITE}/reference/design/types.txt)\n- [Home](${SITE}/index.md)\n`);
  put('reference/design/types.txt', '# Design — types\n- [rel](x.md)\n');
  put('reference/design/schema.graphql', 'type A {');
  put('reference/common/schema.graphql', 'type B { b: Int }');
  put('assets/app.js', 'export const x = 1;');
  const result = runCheck({ buildDir, siteUrl: SITE });
  assert.equal(result.files, 6);
  assert.equal(result.links, 5);
  assert.deepEqual(result.problems.map((problem) => `${problem.file}: ${problem.message}`).sort(), [
    `llms.txt: broken internal link ${SITE}/gone.md`,
    'reference/design/schema.graphql: does not parse: Syntax Error: Expected Name, found <EOF>.',
    'reference/design/types.txt: relative link x.md',
  ]);
});
