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

test('renders CDM entries as a markdown list with GRID as a nested bullet', () => {
  assert.equal(
    renderCdmEntries(cdmIndex.DesProject),
    '- [Hardware Project](https://altiumdeveloper.github.io/cdm/classes/des_Project/)\n'
      + '  - GRID: `grid:workspace:{workspace-id}:design:project/{id}`',
  );
});

test('renders the description after the title, omits empty parts and never shows the bounded context', () => {
  const url = 'https://example.com/x';
  assert.equal(
    renderCdmEntries([{ title: 'Thing', url, subset: 'design', grid: 'g:1', description: 'A thing.' }]),
    '- [Thing](https://example.com/x) — A thing.\n  - GRID: `g:1`',
  );
  assert.equal(
    renderCdmEntries([{ title: 'Thing', url, subset: 'design', description: 'A thing.' }]),
    '- [Thing](https://example.com/x) — A thing.',
  );
  assert.equal(renderCdmEntries([{ title: 'Thing', url }]), '- [Thing](https://example.com/x)');
  assert.equal(
    renderCdmEntries([{ title: 'A', url, description: 'First.' }, { title: 'B', url, grid: 'g:2' }]),
    '- [A](https://example.com/x) — First.\n- [B](https://example.com/x)\n  - GRID: `g:2`',
  );
});

test('escapes MDX in CDM titles and descriptions', () => {
  assert.equal(
    renderCdmEntries([{ title: 'Odd {t}', url: 'https://example.com/x', description: 'Uses <tags>.' }]),
    '- [Odd &#x007B;t&#x007D;](https://example.com/x) — Uses &#x003C;tags&#x003E;.',
  );
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
