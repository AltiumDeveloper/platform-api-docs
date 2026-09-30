import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { buildSchema } from 'graphql';
import { parseContextMap } from '../scripts/apidocs/lib/context-map.mjs';
import { buildCdmIndex } from '../scripts/apidocs/lib/cdm.mjs';
import { stripDirectives, STRIP } from '../scripts/apidocs/lib/transform-sdl.mjs';
import {
  classifySchema, matchContext, literalPrefixLength, isNamespaceTypeName,
} from '../scripts/apidocs/lib/classify.mjs';

const read = (p) => readFileSync(new URL(`./fixtures/${p}`, import.meta.url), 'utf8');
const map = parseContextMap(read('context-map.yaml'));
const cdmIndex = buildCdmIndex([read('cdm/design.yaml'), read('cdm/platform.yaml')]);
const schema = buildSchema(stripDirectives(read('schema.graphql'), STRIP));

test('literalPrefixLength', () => {
  assert.equal(literalPrefixLength('^desWorkspaceIns'), 15);
  assert.equal(literalPrefixLength('^des.*Comment'), 3);
  assert.equal(literalPrefixLength('^desAnnotations?'), 13);
  assert.equal(literalPrefixLength('^node$'), 4);
  assert.equal(literalPrefixLength('OperationFilterInput$'), 0);
});

test('isNamespaceTypeName accepts singular and plural suffixes', () => {
  assert.ok(isNamespaceTypeName('DesignQueries', 'query'));
  assert.ok(isNamespaceTypeName('AnalyticsQuery', 'query'));
  assert.ok(isNamespaceTypeName('DesignMutations', 'mutation'));
  assert.ok(!isNamespaceTypeName('DesProject', 'query'));
});

test('matchContext prefers the most specific prefix, then the longest match', () => {
  assert.deepEqual(matchContext('desWorkspaceInsSettings', 'query', map), { id: 'insights', ambiguous: null });
  assert.deepEqual(matchContext('desWorkspaceById', 'query', map), { id: 'platform', ambiguous: null });
  assert.deepEqual(matchContext('desCreateCommentThread', 'mutation', map), { id: 'collaboration', ambiguous: null });
  assert.deepEqual(matchContext('gloCusCreateExtensionPoint', 'mutation', map), { id: 'customization', ambiguous: null });
  assert.equal(matchContext('zzzUnknown', 'query', map), null);
});

test('matchContext reports exact ties as ambiguous and keeps the first context', () => {
  const tied = parseContextMap(`contexts:
  - {id: a, title: A, query: ['^foo']}
  - {id: b, title: B, query: ['^foo']}
`);
  assert.deepEqual(matchContext('fooBar', 'query', tied), { id: 'a', ambiguous: ['a', 'b'] });
});

test('classifies root operations, including namespaced ones', () => {
  const c = classifySchema(schema, map, cdmIndex);
  assert.deepEqual(Object.fromEntries(c.operations.query), {
    node: 'platform',
    'design.project.byId': 'design',
    desProjectById: 'design',
    desWorkspaceInsSettings: 'insights',
    desWorkspaceById: 'platform',
    bomBoms: 'procurement',
    dmDeviceFamilies: 'renesas-preview',
    zzzOverridden: 'design',
  });
  assert.deepEqual(Object.fromEntries(c.operations.mutation), {
    desCreateCommentThread: 'collaboration',
    designRuleCheckExecute: 'design',
    gloCusCreateExtensionPoint: 'customization',
  });
  assert.deepEqual(Object.fromEntries(c.namespaceTypes), {
    DesignQueries: 'design',
    DesignProjectQueries: 'design',
  });
});

test('classifies types with CDM precedence and Common fallbacks', () => {
  const c = classifySchema(schema, map, cdmIndex);
  assert.equal(c.types.get('DesProject'), 'design');
  assert.equal(c.types.get('DesWorkspace'), 'platform');
  assert.equal(c.types.get('DesWorkspaceInsSettings'), 'insights');
  assert.equal(c.types.get('BomWip'), 'procurement');
  assert.equal(c.types.get('DesOrphanEntity'), 'design');
  assert.equal(c.types.get('DmDeviceModel'), 'renesas-preview');
  assert.equal(c.types.get('PageInfo'), 'common');
  assert.equal(c.types.get('Long'), 'common');
  assert.equal(c.types.get('Node'), 'common');
  assert.equal(c.types.get('StringOperationFilterInput'), 'common');
  assert.equal(c.types.get('String'), 'common');
  assert.equal(c.types.has('Query'), false);
  assert.equal(c.types.has('DesignQueries'), false);
});

test('CDM mapping wins over regex', () => {
  const cdm = { DesOrphanEntity: [{ subset: 'platform' }] };
  assert.equal(classifySchema(schema, map, cdm).types.get('DesOrphanEntity'), 'platform');
});

test('collects unassigned names and experimental items', () => {
  const c = classifySchema(schema, map, cdmIndex);
  assert.deepEqual(c.unassigned, [
    { kind: 'query', name: 'zzzUnknown' },
    { kind: 'type', name: 'ZzzOrphanType' },
  ]);
  assert.deepEqual([...c.experimental.operations].sort(),
    ['design.project.byId', 'designRuleCheckExecute', 'dmDeviceFamilies']);
  assert.deepEqual([...c.experimental.types], ['DmDeviceModel']);
  assert.deepEqual([...c.experimentalNamespaces].sort(), ['DesignProjectQueries', 'DesignQueries']);
  assert.deepEqual(c.ambiguous, []);
});

test('records a conflict when CDM and regex/common disagree', () => {
  const cdm = { DesOrphanEntity: [{ subset: 'platform' }] };
  assert.deepEqual(classifySchema(schema, map, cdm).cdmConflicts,
    [{ name: 'DesOrphanEntity', cdm: 'platform', regex: 'design' }]);
});

test('records a conflict with regex null when only CDM knows the type', () => {
  const cdm = { ZzzOrphanType: [{ subset: 'design' }] };
  assert.deepEqual(classifySchema(schema, map, cdm).cdmConflicts,
    [{ name: 'ZzzOrphanType', cdm: 'design', regex: null }]);
});

test('no conflicts when CDM agrees with regex (fixture)', () => {
  assert.deepEqual(classifySchema(schema, map, cdmIndex).cdmConflicts, []);
  assert.deepEqual(classifySchema(schema, map, cdmIndex).overrideConflicts, []);
});

test('records an override that contradicts the CDM bounded context; the override still wins', () => {
  const overridden = parseContextMap(`${read('context-map.yaml')}  DesProject: platform\n  DesOrphanEntity: design\n`);
  const c = classifySchema(schema, overridden, { ...cdmIndex, DesOrphanEntity: [{ subset: 'design' }] });
  assert.deepEqual(c.overrideConflicts, [{ name: 'DesProject', override: 'platform', cdm: 'design' }]);
  assert.equal(c.types.get('DesProject'), 'platform');
  assert.deepEqual(c.cdmConflicts, []);
});

test('reports ambiguity when CDM entries of one type span different contexts', () => {
  const cdm = { DesProject: [{ subset: 'design' }, { subset: 'platform' }] };
  const c = classifySchema(schema, map, cdm);
  assert.deepEqual(c.ambiguous, [
    { kind: 'type', name: 'DesProject', candidates: ['design', 'platform'], source: 'cdm' },
  ]);
  assert.equal(c.types.get('DesProject'), 'design');
});
