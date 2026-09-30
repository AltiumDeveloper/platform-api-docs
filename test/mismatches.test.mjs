import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildMismatches, renderMismatches } from '../scripts/apidocs/lib/mismatches.mjs';

const report = {
  staleCdm: ['DesGone'],
  unmappedEntities: ['BomWip', 'DesOrphanEntity'],
  overrideConflicts: [{ name: 'DesProject', override: 'platform', cdm: 'design' }],
  cdmConflicts: [{ name: 'DesThing', cdm: 'platform', regex: 'design' }, { name: 'ZzzType', cdm: 'design', regex: null }],
};
const cdmIndex = {
  DesProject: [{ subset: 'design' }, { subset: 'design' }],
  BomWip2: [{ subset: 'procurement' }, { subset: 'design' }],
  DesGone: [{ subset: 'software' }],
  OtaThing: [{ subset: 'ota' }],
  NoSubset: [{ subset: null }],
};
const contextMap = {
  contexts: [
    { id: 'design', cdm: ['design'] },
    { id: 'procurement', cdm: ['procurement'] },
    { id: 'renesas', cdm: ['deviceModel', 'software'] },
  ],
};

test('buildMismatches collects report findings and CDM subset coverage', () => {
  assert.deepEqual(buildMismatches({ report, cdmIndex, contextMap }), {
    staleCdm: ['DesGone'],
    unmappedEntities: ['BomWip', 'DesOrphanEntity'],
    overrideConflicts: report.overrideConflicts,
    cdmConflicts: report.cdmConflicts,
    subsetDisagreements: [{ name: 'BomWip2', subsets: ['design', 'procurement'] }],
    unlistedSubsets: ['ota'],
    // `software` only maps DesGone, which is not in the API.
    emptySubsets: [{ context: 'renesas', subset: 'deviceModel' }, { context: 'renesas', subset: 'software' }],
  });
});

test('renderMismatches writes a markdown log with header, one bullet per item and None for empty sections', () => {
  const md = renderMismatches(buildMismatches({ report, cdmIndex, contextMap }), {
    generatedAt: '2026-09-30T00:00:00.000Z',
    cdm: {
      ref: 'main', sha: '0123456789abcdef0123456789abcdef01234567',
      source: 'github:AltiumDeveloper/cdm', fetchedAt: '2026-09-29T23:00:00.000Z',
    },
  });
  assert.match(md, /^# CDM mismatches\n/);
  assert.match(md, /Generated 2026-09-30T00:00:00\.000Z from CDM \[`main @ 0123456`\]\(https:\/\/github\.com\/AltiumDeveloper\/cdm\/commit\/0123456789abcdef0123456789abcdef01234567\) \(github:AltiumDeveloper\/cdm, fetched 2026-09-29T23:00:00\.000Z\)\./);
  assert.match(md, /## CDM mappings to missing API types \(1\)\n\n[^#]*- `DesGone`\n/);
  assert.match(md, /## Node entities without a CDM mapping \(2\)\n\n[^#]*- `BomWip`\n- `DesOrphanEntity`\n/);
  assert.match(md, /## Overrides that contradict the CDM bounded context \(1\)\n\n[^#]*- `DesProject`: override `platform`, CDM `design`\n/);
  assert.match(md, /## CDM vs regex classification conflicts \(2\)\n\n[^#]*- `DesThing`: CDM `platform`, regex `design`\n- `ZzzType`: CDM `design`, regex none\n/);
  assert.match(md, /## CDM types whose entries disagree on subset \(1\)\n\n[^#]*- `BomWip2`: `design`, `procurement`\n/);
  assert.match(md, /## CDM subsets no context lists \(1\)\n\n[^#]*- `ota`\n/);
  assert.match(md, /## Context subsets with no mapped API types \(2\)\n\n[^#]*- `renesas`: `deviceModel`\n- `renesas`: `software`\n/);
  assert.ok(md.endsWith('\n'));
});

test('renderMismatches says None for empty sections and tolerates missing CDM metadata', () => {
  const empty = {
    staleCdm: [], unmappedEntities: [], overrideConflicts: [], cdmConflicts: [],
    subsetDisagreements: [], unlistedSubsets: [], emptySubsets: [],
  };
  const md = renderMismatches(empty, { generatedAt: 'now', cdm: { ref: 'v0.10.0' } });
  assert.match(md, /Generated now from CDM `v0\.10\.0`\./);
  assert.equal(md.match(/\nNone\n/g).length, 7);
  assert.match(md, /## CDM mappings to missing API types \(0\)\n\n[^#]*None\n/);
});
