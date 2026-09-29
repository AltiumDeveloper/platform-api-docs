import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { buildCdmIndex, cdmClassPageName, CDM_SITE } from '../scripts/apidocs/lib/cdm.mjs';

const read = (name) => readFileSync(new URL(`./fixtures/cdm/${name}`, import.meta.url), 'utf8');

test('indexes CDM classes by Platform API type name', () => {
  const index = buildCdmIndex([read('design.yaml'), read('platform.yaml')]);
  assert.deepEqual(Object.keys(index).sort(), ['DesGone', 'DesProject', 'DesWorkspace']);
  assert.deepEqual(index.DesProject, [
    {
      cdmClass: 'des_HarnessProject',
      title: 'Harness Project',
      subset: 'design',
      url: `${CDM_SITE}/classes/des_HarnessProject/`,
      grid: null,
      description: 'A cable and wiring harness design.',
    },
    {
      cdmClass: 'des_Project',
      title: 'Hardware Project',
      subset: 'design',
      url: `${CDM_SITE}/classes/des_Project/`,
      grid: 'grid:workspace:{workspace-id}:design:project/{id}',
      description: '',
    },
  ]);
});

test('reads { tag, value } annotation objects', () => {
  const [workspace] = buildCdmIndex([read('platform.yaml')]).DesWorkspace;
  assert.equal(workspace.grid, 'grid:workspace:{workspace-id}');
  assert.equal(workspace.subset, 'platform');
  assert.equal(workspace.cdmClass, 'plt_Workspace');
});

test('tolerates empty documents', () => {
  assert.deepEqual(buildCdmIndex(['', 'classes: {}']), {});
});

test('cdmClassPageName only rewrites well-formed prefix:local class URIs', () => {
  assert.equal(cdmClassPageName('Key', { class_uri: 'des:Project' }), 'des_Project');
  assert.equal(cdmClassPageName('Key', { class_uri: 'https://example.org/Thing' }), 'Key');
  assert.equal(cdmClassPageName('Key', { class_uri: 'a:b:c' }), 'Key');
  assert.equal(cdmClassPageName('Key', { class_uri: 'des:' }), 'Key');
  assert.equal(cdmClassPageName('Key', {}), 'Key');
});
