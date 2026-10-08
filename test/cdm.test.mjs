import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import {
  buildCdmIndex, buildCdmSubsets, cdmClassIri, cdmClassPageName, CDM_SITE, DEFAULT_CDM_REF,
  cdmCommitUrl, cdmResolveUrl, cdmListUrl, cdmRawUrl, buildCdmMeta,
} from '../scripts/apidocs/lib/cdm.mjs';

test('follows CDM main by default and builds SHA-pinned URLs', () => {
  assert.equal(DEFAULT_CDM_REF, 'main');
  assert.equal(cdmResolveUrl('main'), 'https://api.github.com/repos/AltiumDeveloper/cdm/commits/main');
  assert.equal(cdmResolveUrl('feature/x'), 'https://api.github.com/repos/AltiumDeveloper/cdm/commits/feature%2Fx');
  assert.equal(cdmListUrl('abc123'),
    'https://api.github.com/repos/AltiumDeveloper/cdm/contents/src/common_data_model/schema?ref=abc123');
  assert.equal(cdmRawUrl('abc123', 'design.yaml'),
    'https://raw.githubusercontent.com/AltiumDeveloper/cdm/abc123/src/common_data_model/schema/design.yaml');
  assert.equal(cdmCommitUrl('abc123'), 'https://github.com/AltiumDeveloper/cdm/commit/abc123');
});

test('buildCdmMeta records ref, sha, fetchedAt and source', () => {
  assert.deepEqual(
    buildCdmMeta({ ref: 'main', sha: 'abc', fetchedAt: 't', source: 'github:x' }),
    { ref: 'main', sha: 'abc', fetchedAt: 't', source: 'github:x' },
  );
  assert.deepEqual(buildCdmMeta({ ref: null, source: 's' }), { ref: null, sha: null, fetchedAt: null, source: 's' });
});

const read = (name) => readFileSync(new URL(`./fixtures/cdm/${name}`, import.meta.url), 'utf8');

test('indexes CDM classes by Platform API type name', () => {
  const index = buildCdmIndex([read('design.yaml'), read('platform.yaml')]);
  assert.deepEqual(Object.keys(index).sort(), ['DesGone', 'DesProject', 'DesWorkspace']);
  assert.deepEqual(index.DesProject, [
    {
      cdmClass: 'des_HarnessProject',
      title: 'Harness Project',
      subset: 'design',
      iri: 'https://w3id.org/altium/cdm/design/HarnessProject',
      url: `${CDM_SITE}/classes/des_HarnessProject/`,
      grid: null,
      description: 'A cable and wiring harness design.',
    },
    {
      cdmClass: 'des_Project',
      title: 'Hardware Project',
      subset: 'design',
      iri: 'https://w3id.org/altium/cdm/design/Project',
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

test('collapses whitespace in block-scalar descriptions', () => {
  const yaml = [
    'classes:',
    '  Thing:',
    '    annotations:',
    '      platformAPI: DesThing',
    '    description: |',
    '      A thing that',
    '        spans   several',
    '',
    '      lines.',
    '',
  ].join('\n');
  assert.equal(buildCdmIndex([yaml]).DesThing[0].description, 'A thing that spans several lines.');
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

test('cdmClassIri expands the class_uri CURIE with the declared prefix, else the module id', () => {
  const doc = { id: 'https://w3id.org/altium/cdm/platform/', prefixes: { plt: 'https://w3id.org/altium/cdm/platform/', core: 'https://w3id.org/altium/cdm/core/' } };
  assert.equal(cdmClassIri(doc, { class_uri: 'plt:LifecycleDefinition' }), 'https://w3id.org/altium/cdm/platform/LifecycleDefinition');
  assert.equal(cdmClassIri(doc, { class_uri: 'core:Artifact' }), 'https://w3id.org/altium/cdm/core/Artifact');
  assert.equal(cdmClassIri({ id: 'https://w3id.org/altium/cdm/design/' }, { class_uri: 'des:Project' }), 'https://w3id.org/altium/cdm/design/Project');
  assert.equal(cdmClassIri({ id: 'urn:x' }, { class_uri: 'des:Project' }), null);
  assert.equal(cdmClassIri(doc, { class_uri: 'not a curie' }), null);
  assert.equal(cdmClassIri(doc, {}), null);
});

test('buildCdmSubsets keeps the subset description, title, module id and CDM page URL', () => {
  const yaml = [
    'id: https://w3id.org/altium/cdm/system/',
    'subsets:',
    '  system:',
    '    title: ESD',
    '    description: >-',
    '      Models the ESD',
    '      document.',
    '  system-sdm:',
    '    description: The SDM.',
  ].join('\n');
  assert.deepEqual(buildCdmSubsets([yaml, '']), {
    system: { title: 'ESD', description: 'Models the ESD document.', iri: 'https://w3id.org/altium/cdm/system/', url: `${CDM_SITE}/subsets/system/` },
    'system-sdm': { title: null, description: 'The SDM.', iri: 'https://w3id.org/altium/cdm/system/', url: `${CDM_SITE}/subsets/system-sdm/` },
  });
});
