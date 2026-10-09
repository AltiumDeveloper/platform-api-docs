import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { checkIndex, htmlIds, pageTarget, runSearchCheck } from '../scripts/apidocs/lib/search-check.mjs';
import searchIndexPlugin from '../plugins/search-index.cjs';

const { hashedName } = searchIndexPlugin;

const payload = (records, contexts = [{ id: 'design', title: 'Design', slug: 'design' }]) => ({ version: 1, contexts, prefixes: [], records });
const PAGES = {
  'index.html': '<html><h1 id="__docusaurus">Home</h1></html>',
  'reference/design/types/objects/des-project/index.html':
    '<h3 class="anchor" id="created-at">createdAt</h3><h3 id="a&amp;b">x</h3><div data-id="ghost"></div>',
  'guides/pagination/index.html': '<h2 id="connections">Connections</h2>',
};

function makeBuild(files) {
  const dir = mkdtempSync(join(tmpdir(), 'search-check-'));
  for (const [path, text] of Object.entries(files)) {
    mkdirSync(dirname(join(dir, path)), { recursive: true });
    writeFileSync(join(dir, path), text);
  }
  return dir;
}

const good = payload([
  { i: 0, n: 'Altium 365 API', k: 'guide', u: '/' },
  { i: 1, n: 'DesProject', k: 'object', c: 0, u: '/reference/design/types/objects/des-project' },
  { i: 2, n: 'createdAt', k: 'field', p: 'DesProject', c: 0, u: '/reference/design/types/objects/des-project#created-at' },
  { i: 3, n: 'Connections', k: 'guide', u: '/guides/pagination#connections' },
]);

test('pageTarget maps record URLs to built HTML files and decoded anchors', () => {
  assert.deepEqual(pageTarget('/'), { file: 'index.html', anchor: null });
  assert.deepEqual(pageTarget('/guides/pagination#connections'), { file: 'guides/pagination/index.html', anchor: 'connections' });
  assert.deepEqual(pageTarget('/a/b/#x%20y'), { file: 'a/b/index.html', anchor: 'x y' });
});

test('htmlIds reads id attributes only, with entities decoded', () => {
  assert.deepEqual([...htmlIds(PAGES['reference/design/types/objects/des-project/index.html'])], ['created-at', 'a&b']);
});

test('checkIndex passes a consistent index and reads every page once', () => {
  const reads = [];
  const result = checkIndex(good, { readPage: (file) => (reads.push(file), PAGES[file] ?? null) });
  assert.deepEqual(result.problems, []);
  assert.equal(result.records, 4);
  assert.equal(result.pages, 3);
  assert.equal(result.anchors, 2);
  assert.equal(reads.length, 3);
});

test('checkIndex reports missing pages and anchors, bad ids, contexts and kinds', () => {
  const bad = payload([
    { i: 0, n: 'Gone', k: 'object', c: 0, u: '/reference/design/types/objects/gone' },
    { i: 2, n: 'ghost', k: 'field', p: 'DesProject', c: 0, u: '/reference/design/types/objects/des-project#ghost' },
    { i: 2, n: 'X', k: 'widget', c: 5, u: '/' },
    { i: 3, n: 'Y', k: 'guide', u: 'guides/relative' },
  ]);
  const { problems } = checkIndex(bad, { readPage: (file) => PAGES[file] ?? null });
  assert.deepEqual(problems.map(({ record, message }) => [record.n, message]), [
    ['Gone', 'no page build/reference/design/types/objects/gone/index.html'],
    ['ghost', 'id 2 at position 1'],
    ['ghost', 'no id="ghost" in build/reference/design/types/objects/des-project/index.html'],
    ['X', 'unknown kind widget'],
    ['X', 'context index 5 out of range (1 contexts)'],
    ['Y', 'bad url guides/relative'],
  ]);
  assert.deepEqual(checkIndex(payload([]), { readPage: () => null }).problems, [{ record: null, message: 'index has no records' }]);
});

test('runSearchCheck checks the hashed index, its plain copy and the records', () => {
  const json = JSON.stringify(good);
  const dir = makeBuild({ ...PAGES, [hashedName(json)]: json, 'search-index.json': json });
  const result = runSearchCheck({ buildDir: dir });
  assert.deepEqual(result.problems, []);
  assert.equal(result.file, hashedName(json));
  assert.equal(result.records, 4);
});

test('runSearchCheck fails on a missing, duplicated, stale or mismatched hashed index', () => {
  const json = JSON.stringify(good);
  const messages = (files) => runSearchCheck({ buildDir: makeBuild({ ...PAGES, ...files }) }).problems.map(({ message }) => message);
  assert.match(messages({ 'search-index.json': json })[0], /no .*search-index\.<hash>\.json/);
  assert.match(messages({ 'search-index.0000000000.json': json, [hashedName(json)]: json })[0], /more than one hashed index/);
  assert.deepEqual(messages({ 'search-index.0000000000.json': json, 'search-index.json': json }),
    [`search-index.0000000000.json does not match its content hash (${hashedName(json)})`]);
  assert.match(messages({ [hashedName(json)]: json, 'search-index.json': `${json} ` })[0], /differs from/);
  assert.match(messages({ [hashedName(json)]: json })[0], /search-index\.json missing/);
});

test('search-index plugin hashes the static index into global data and writes it on postBuild', async () => {
  const json = JSON.stringify(good);
  const site = makeBuild({ 'static/search-index.json': json });
  const plugin = searchIndexPlugin({ siteDir: site });
  assert.equal(plugin.name, 'search-index');
  const content = await plugin.loadContent();
  let data;
  await plugin.contentLoaded({ content, actions: { setGlobalData: (value) => { data = value; } } });
  assert.deepEqual(data, { file: hashedName(json) });
  assert.match(data.file, /^search-index\.[0-9a-f]{10}\.json$/);
  const outDir = makeBuild({});
  await plugin.postBuild({ content, outDir });
  assert.deepEqual(runSearchCheck({ buildDir: outDir }).problems.slice(0, 1), [{ record: null, message: `${join(outDir, 'search-index.json')} missing` }]);

  const empty = searchIndexPlugin({ siteDir: makeBuild({}) });
  const none = await empty.loadContent();
  await empty.contentLoaded({ content: none, actions: { setGlobalData: (value) => { data = value; } } });
  assert.deepEqual(data, { file: null });
  await empty.postBuild({ content: none, outDir: makeBuild({}) });
});
