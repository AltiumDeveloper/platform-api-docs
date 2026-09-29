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
const classification = classifySchema(schema, parseContextMap(read('context-map.yaml')), cdmIndex);

test('parseAllowlist ignores comments and blanks', () => {
  assert.deepEqual([...parseAllowlist('# c\n\n zzzUnknown \nZzzOrphanType\n')], ['zzzUnknown', 'ZzzOrphanType']);
});

test('report counts, blocking names and CDM findings', () => {
  const report = buildReport({ classification, cdmIndex, schema, allowlist: new Set(['zzzUnknown']) });
  assert.deepEqual(report.counts.design, { query: 3, mutation: 1, subscription: 0, type: 2 });
  assert.deepEqual(report.blocking, [{ kind: 'type', name: 'ZzzOrphanType' }]);
  assert.deepEqual(report.staleCdm, ['DesGone']);
  assert.deepEqual(report.unmappedEntities, ['BomWip', 'DesOrphanEntity']);
  assert.equal(report.experimental.operations, 3);
  assert.equal(report.experimental.types, 1);
});

test('fixture allowlist clears all blocking names', () => {
  const report = buildReport({ classification, cdmIndex, schema, allowlist: parseAllowlist(read('unassigned-allowlist.txt')) });
  assert.deepEqual(report.blocking, []);
});

test('formatReport suggests a context-map entry for blocking names', () => {
  const text = formatReport(buildReport({ classification, cdmIndex, schema, allowlist: new Set() }));
  assert.match(text, /zzzUnknown/);
  assert.match(text, /query: '\^zzz'/);
  assert.match(text, /config\/unassigned-allowlist\.txt/);
});
