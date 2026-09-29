import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { buildSchema } from 'graphql';
import { parseContextMap } from '../scripts/apidocs/lib/context-map.mjs';
import { buildCdmIndex } from '../scripts/apidocs/lib/cdm.mjs';
import { stripDirectives, STRIP } from '../scripts/apidocs/lib/transform-sdl.mjs';
import { classifySchema } from '../scripts/apidocs/lib/classify.mjs';
import { buildReport, formatReport, parseAllowlist } from '../scripts/apidocs/lib/report.mjs';

const read = (p) => readFileSync(new URL(`./fixtures/${p}`, import.meta.url), 'utf8');
const schema = buildSchema(stripDirectives(read('schema.graphql'), STRIP));
const cdmIndex = buildCdmIndex([read('cdm/design.yaml'), read('cdm/platform.yaml')]);
const contextMap = parseContextMap(read('context-map.yaml'));
const classification = classifySchema(schema, contextMap, cdmIndex);

test('parseAllowlist ignores comments and blanks', () => {
  assert.deepEqual([...parseAllowlist('# c\n\n zzzUnknown \nZzzOrphanType\n')], ['zzzUnknown', 'ZzzOrphanType']);
});

test('report counts, blocking names and CDM findings', () => {
  const report = buildReport({ classification, cdmIndex, schema, contextMap, allowlist: new Set(['zzzUnknown']) });
  assert.deepEqual(report.counts.design, { query: 3, mutation: 1, subscription: 0, type: 2 });
  assert.deepEqual(report.blocking, [{ kind: 'type', name: 'ZzzOrphanType' }]);
  assert.deepEqual(report.staleCdm, ['DesGone']);
  assert.deepEqual(report.unmappedEntities, ['BomWip', 'DesOrphanEntity']);
  assert.equal(report.experimental.operations, 3);
  assert.equal(report.experimental.types, 1);
});

test('fixture allowlist clears all blocking names', () => {
  const report = buildReport({ classification, cdmIndex, schema, contextMap, allowlist: parseAllowlist(read('unassigned-allowlist.txt')) });
  assert.deepEqual(report.blocking, []);
});

test('formatReport suggests a context-map entry for blocking names', () => {
  const text = formatReport(buildReport({ classification, cdmIndex, schema, contextMap, allowlist: new Set() }));
  assert.match(text, /zzzUnknown/);
  assert.match(text, /query: '\^zzz'/);
  assert.match(text, /config\/unassigned-allowlist\.txt/);
});

test('report exposes CDM conflicts and formatReport warns about them', () => {
  const conflicted = classifySchema(schema, parseContextMap(read('context-map.yaml')), { DesOrphanEntity: [{ subset: 'platform' }] });
  const report = buildReport({ classification: conflicted, cdmIndex, schema, contextMap, allowlist: new Set() });
  assert.deepEqual(report.cdmConflicts, [{ name: 'DesOrphanEntity', cdm: 'platform', regex: 'design' }]);
  assert.match(formatReport(report), /Warning: 1 CDM\/regex classification conflicts[\s\S]*DesOrphanEntity: cdm=platform, regex=design/);
  assert.deepEqual(buildReport({ classification, cdmIndex, schema, contextMap, allowlist: new Set() }).cdmConflicts, []);
});

test('reports stale overrides and stale allowlist entries', () => {
  const stale = parseContextMap(`${read('context-map.yaml')}  removedType: design\n  gone.nested: design\n`);
  const report = buildReport({
    classification, cdmIndex, schema, contextMap: stale,
    allowlist: new Set(['zzzUnknown', 'noLongerUnassigned']),
  });
  assert.deepEqual(report.staleOverrides, ['gone.nested', 'removedType']);
  assert.deepEqual(report.staleAllowlist, ['noLongerUnassigned']);
  const text = formatReport(report);
  assert.match(text, /Warning: overrides naming no type or root field: gone\.nested, removedType/);
  assert.match(text, /Warning: allowlist entries that are no longer unassigned: noLongerUnassigned/);
  const clean = buildReport({ classification, cdmIndex, schema, contextMap, allowlist: parseAllowlist(read('unassigned-allowlist.txt')) });
  assert.deepEqual(clean.staleOverrides, []);
  assert.deepEqual(clean.staleAllowlist, []);
});

test('formatReport prints unmapped Node entities as a count only', () => {
  const report = buildReport({ classification, cdmIndex, schema, contextMap, allowlist: new Set() });
  const text = formatReport(report);
  assert.match(text, /Info: 2 Node entities without a CDM mapping \(see report\.json\)/);
  assert.doesNotMatch(text, /BomWip/);
  assert.deepEqual(report.unmappedEntities, ['BomWip', 'DesOrphanEntity']);
});
