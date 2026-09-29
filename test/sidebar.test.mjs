import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { regroupReference } = require('../scripts/apidocs/sidebar.cjs');

const doc = (id) => ({ type: 'doc', id });
const category = (label, items) => ({ type: 'category', label, items });

const contexts = [
  { id: 'platform', title: 'Platform', slug: 'platform', collapsed: true },
  { id: 'design', title: 'Design', slug: 'design', collapsed: true },
  { id: 'common', title: 'Common', slug: 'common', collapsed: true },
];

const generated = [
  category('common', [
    category('Operations', [category('Directives', [doc('reference/common/operations/directives/skip')])]),
    category('Types', [category('Directives', [doc('reference/common/types/directives/deprecated')])]),
    doc('reference/common/overview'),
  ]),
  category('design', [
    category('Operations', [category('Queries', [doc('reference/design/operations/queries/des-project-by-id')])]),
    category('Types', [category('Objects', [doc('reference/design/types/objects/des-project')])]),
    doc('reference/design/overview'),
  ]),
  category('platform', [
    category('Operations', [category('Queries', [doc('reference/platform/operations/queries/node')])]),
  ]),
];

test('orders BCs as in the manifest, relabels them and links overviews', () => {
  const out = regroupReference(generated, { contexts, experimentalDocIds: new Set() });
  assert.deepEqual(out.map((c) => c.label), ['Platform', 'Design', 'Common']);
  assert.deepEqual(out[1].link, { type: 'doc', id: 'reference/design/overview' });
  assert.equal(out[0].link, undefined);
  assert.equal(out[1].collapsed, true);
});

test('flattens Operations/Types unless labels would collide', () => {
  const out = regroupReference(generated, { contexts, experimentalDocIds: new Set() });
  assert.deepEqual(out[1].items.map((i) => i.label), ['Queries', 'Objects']);
  assert.deepEqual(out[2].items.map((i) => i.label), ['Operations', 'Types']);
});

test('marks experimental docs', () => {
  const out = regroupReference(generated, {
    contexts,
    experimentalDocIds: new Set(['reference/design/operations/queries/des-project-by-id']),
  });
  assert.equal(out[1].items[0].items[0].className, 'sidebar-exp');
  assert.equal(out[1].items[1].items[0].className, undefined);
});
