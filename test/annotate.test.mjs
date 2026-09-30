import { test } from 'node:test';
import assert from 'node:assert/strict';
import { copyFileSync, existsSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
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

test('strips the **Experimental** prefix from annotated SDL only, keeping the public SDL intact', () => {
  const dir = setup();
  const raw = readFileSync(join(dir, 'raw.graphql'), 'utf8');
  const marked = raw.replace('"Gets a project by its identifier."', '"**Experimental** Gets a project by its identifier."');
  assert.notEqual(marked, raw);
  writeFileSync(join(dir, 'raw.graphql'), marked);
  const publicSchemaPath = join(dir, 'public', 'schema.graphql');
  runAnnotate({
    schemaDir: dir,
    contextMapPath: fixture('context-map.yaml'),
    allowlistPath: fixture('unassigned-allowlist.txt'),
    publicSchemaPath,
  });
  const annotated = readFileSync(join(dir, 'annotated.graphql'), 'utf8');
  assert.match(annotated, /"Gets a project by its identifier\."/);
  assert.doesNotMatch(annotated, /\*\*Experimental\*\*/);
  assert.match(readFileSync(publicSchemaPath, 'utf8'), /"\*\*Experimental\*\* Gets a project by its identifier\."/);
});

test('writes the CDM mismatch log only when a path is given, using cdm-meta.json when present', () => {
  const dir = setup();
  const options = {
    schemaDir: dir,
    contextMapPath: fixture('context-map.yaml'),
    allowlistPath: fixture('unassigned-allowlist.txt'),
    publicSchemaPath: join(dir, 'schema.graphql'),
    now: new Date('2026-09-30T00:00:00Z'),
  };
  runAnnotate(options);
  assert.equal(existsSync(join(dir, 'notes')), false);

  const mismatchesPath = join(dir, 'notes', 'cdm-mismatches.md');
  runAnnotate({ ...options, mismatchesPath });
  const fallback = readFileSync(mismatchesPath, 'utf8');
  assert.match(fallback, /Generated 2026-09-30T00:00:00\.000Z from CDM `(v0\.10\.0|[^`]+)`\./);
  assert.match(fallback, /## CDM mappings to missing API types \(1\)\n\n[^#]*- `DesGone`\n/);

  writeFileSync(join(dir, 'cdm-meta.json'), JSON.stringify({ ref: 'v9.9.9', fetchedAt: '2026-09-29T00:00:00Z', source: 'github:x' }));
  runAnnotate({ ...options, mismatchesPath });
  assert.match(readFileSync(mismatchesPath, 'utf8'), /from CDM `v9\.9\.9` \(github:x, fetched 2026-09-29T00:00:00Z\)\./);
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
