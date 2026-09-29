import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parseContextMap, contextById, COMMON_ID } from '../scripts/apidocs/lib/context-map.mjs';

const fixture = readFileSync(new URL('./fixtures/context-map.yaml', import.meta.url), 'utf8');

test('parses contexts, common and overrides', () => {
  const map = parseContextMap(fixture);
  assert.deepEqual(map.contexts.map((c) => c.id),
    ['platform', 'design', 'insights', 'collaboration', 'procurement', 'customization', 'renesas-preview']);
  const design = contextById(map, 'design');
  assert.equal(design.title, 'Design');
  assert.equal(design.collapsed, true);
  assert.deepEqual(design.cdm, ['design']);
  assert.ok(design.query[0] instanceof RegExp);
  assert.equal(map.common.id, COMMON_ID);
  assert.ok(map.common.names.has('PageInfo'));
  assert.ok(map.common.type[0].test('StringOperationFilterInput'));
  assert.equal(map.overrides.get('zzzOverridden'), 'design');
  assert.equal(contextById(map, COMMON_ID).title, 'Common');
});

test('rejects duplicate ids', () => {
  assert.throws(() => parseContextMap('contexts:\n  - {id: a, title: A}\n  - {id: a, title: B}\n'), /duplicate context id "a"/);
});

test('rejects overrides to unknown contexts', () => {
  assert.throws(() => parseContextMap('contexts:\n  - {id: a, title: A}\noverrides:\n  foo: nope\n'), /unknown context "nope"/);
});

test('rejects empty map', () => {
  assert.throws(() => parseContextMap('contexts: []\n'), /non-empty list/);
});

test('rejects top-level regex alternation but allows grouped alternation', () => {
  assert.throws(
    () => parseContextMap("contexts:\n  - {id: a, title: A, query: ['^foo|^bar']}\n"),
    /context map: regex "\^foo\|\^bar" uses top-level alternation; split it into separate entries/,
  );
  assert.doesNotThrow(() => parseContextMap("contexts:\n  - {id: a, title: A, type: ['^supPartFamil(y|ies)', '^a[|]b', '^a\\|b']}\n"));
  assert.throws(() => parseContextMap("contexts:\n  - {id: a, title: A}\ncommon:\n  type: ['x|y']\n"), /top-level alternation/);
});
