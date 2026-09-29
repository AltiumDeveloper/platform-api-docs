import { test } from 'node:test';
import assert from 'node:assert/strict';
import { copyFileSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildCdmIndex } from '../scripts/apidocs/lib/cdm.mjs';
import { runAnnotate } from '../scripts/apidocs/annotate.mjs';

const fixture = (p) => fileURLToPath(new URL(`./fixtures/${p}`, import.meta.url));

function setup() {
  const dir = mkdtempSync(join(tmpdir(), 'apidocs-'));
  copyFileSync(fixture('schema.graphql'), join(dir, 'raw.graphql'));
  const cdm = buildCdmIndex([readFileSync(fixture('cdm/design.yaml'), 'utf8'), readFileSync(fixture('cdm/platform.yaml'), 'utf8')]);
  writeFileSync(join(dir, 'cdm-index.json'), JSON.stringify(cdm));
  return dir;
}

test('writes annotated SDL, public SDL, report and manifest', () => {
  const dir = setup();
  const publicSchemaPath = join(dir, 'public', 'schema.graphql');
  const { report } = runAnnotate({
    schemaDir: dir,
    contextMapPath: fixture('context-map.yaml'),
    allowlistPath: fixture('unassigned-allowlist.txt'),
    publicSchemaPath,
  });
  assert.deepEqual(report.blocking, []);
  assert.match(readFileSync(join(dir, 'annotated.graphql'), 'utf8'), /@doc\(category: "Design"\)/);
  const publicSdl = readFileSync(publicSchemaPath, 'utf8');
  assert.doesNotMatch(publicSdl, /@authorize|@cost|@doc/);
  const manifest = JSON.parse(readFileSync(join(dir, 'manifest.json'), 'utf8'));
  assert.deepEqual(manifest.contexts.map((c) => c.slug),
    ['platform', 'design', 'insights', 'collaboration', 'procurement', 'customization', 'renesas-preview', 'common']);
  assert.equal(manifest.operations.query['design.project.byId'], 'design');
  assert.equal(manifest.types.DesProject, 'design');
  assert.ok(manifest.experimental.operations.includes('design.project.byId'));
  assert.deepEqual(JSON.parse(readFileSync(join(dir, 'report.json'), 'utf8')).blocking, []);
});

test('reports blocking names when the allowlist is missing', () => {
  const dir = setup();
  const { report } = runAnnotate({
    schemaDir: dir,
    contextMapPath: fixture('context-map.yaml'),
    allowlistPath: join(dir, 'missing.txt'),
    publicSchemaPath: join(dir, 'schema.graphql'),
  });
  assert.equal(report.blocking.length, 2);
});
