import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { buildDecorators, renderCdmEntries, EXPERIMENTAL_NOTE } = require('../scripts/apidocs/decorators.cjs');

const cdmIndex = {
  DesProject: [{
    cdmClass: 'des_Project', title: 'Hardware Project', subset: 'design',
    url: 'https://altiumdeveloper.github.io/cdm/classes/des_Project/',
    grid: 'grid:workspace:{workspace-id}:design:project/{id}', description: '',
  }],
};

test('declares experimental badge, experimental note and CDM section', () => {
  const decorators = buildDecorators({ cdmIndex });
  assert.deepEqual(Object.keys(decorators), ['experimentalBadge', 'experimentalNote', 'cdmEntity']);
  assert.deepEqual(decorators.experimentalBadge.position, { into: 'tags' });
  assert.equal(decorators.experimentalNote.title, 'Experimental');
  assert.deepEqual(decorators.experimentalNote.position, { before: 'description' });
  assert.equal(decorators.cdmEntity.title, 'Common Data Model');
});

test('CDM predicate and resolve use the type name', () => {
  const { cdmEntity } = buildDecorators({ cdmIndex });
  assert.equal(cdmEntity.predicate({ name: 'DesProject' }), true);
  assert.equal(cdmEntity.predicate({ name: 'BomWip' }), false);
  assert.equal(cdmEntity.predicate(undefined), false);
  assert.equal(cdmEntity.resolve({ name: 'DesProject' }), cdmIndex.DesProject);
});

test('renders CDM entries as a markdown list', () => {
  assert.equal(
    renderCdmEntries(cdmIndex.DesProject),
    '- **[Hardware Project](https://altiumdeveloper.github.io/cdm/classes/des_Project/)** (bounded context `design`; GRID `grid:workspace:{workspace-id}:design:project/{id}`)',
  );
});

test('renders the description right after the title and omits empty parts', () => {
  const url = 'https://example.com/x';
  assert.equal(
    renderCdmEntries([{ title: 'Thing', url, subset: 'design', grid: 'g:1', description: 'A thing.' }]),
    '- **[Thing](https://example.com/x)** — A thing. (bounded context `design`; GRID `g:1`)',
  );
  assert.equal(
    renderCdmEntries([{ title: 'Thing', url, subset: 'design', description: 'A thing.' }]),
    '- **[Thing](https://example.com/x)** — A thing. (bounded context `design`)',
  );
  assert.equal(
    renderCdmEntries([{ title: 'Thing', url, description: 'A thing.' }]),
    '- **[Thing](https://example.com/x)** — A thing.',
  );
  assert.equal(renderCdmEntries([{ title: 'Thing', url }]), '- **[Thing](https://example.com/x)**');
});

test('experimental note is a caution admonition linking to the lifecycle section', () => {
  const { experimentalNote } = buildDecorators({ cdmIndex });
  assert.equal(experimentalNote.render(), EXPERIMENTAL_NOTE);
  assert.match(EXPERIMENTAL_NOTE, /^:::caution\n/);
  assert.match(EXPERIMENTAL_NOTE, /\(\/#lifecycle\)/);
});

test('badge uses the formatter provided by graphql-markdown', () => {
  const { experimentalBadge } = buildDecorators({ cdmIndex });
  const seen = [];
  const out = experimentalBadge.render({}, { formatMDXBadge: (badge) => { seen.push(badge); return 'BADGE'; } });
  assert.equal(out, 'BADGE');
  assert.deepEqual(seen, [{ text: 'EXPERIMENTAL', classname: 'warning' }]);
});
