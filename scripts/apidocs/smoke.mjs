#!/usr/bin/env node
// End-to-end check: fixture SDL → full pipeline → Docusaurus build → assertions on the output.
import assert from 'node:assert/strict';
import { execSync } from 'node:child_process';
import { cpSync, existsSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const env = {
  ...process.env,
  APIDOCS_SCHEMA_FILE: 'test/fixtures/schema.graphql',
  APIDOCS_CDM_DIR: 'test/fixtures/cdm',
  APIDOCS_CONTEXT_MAP: 'test/fixtures/context-map.yaml',
  APIDOCS_ALLOWLIST: 'test/fixtures/unassigned-allowlist.txt',
};
const run = (command) => execSync(command, { stdio: 'inherit', env });
const page = (path) => {
  const file = `build/${path}/index.html`;
  assert.ok(existsSync(file), `missing ${file}`);
  return readFileSync(file, 'utf8');
};

// The pipeline overwrites .schema/ (raw SDL, manifest, CDM index, size baseline): keep the live copy safe.
const SCHEMA_DIR = '.schema';
const backup = join(process.env.TMPDIR || tmpdir(), `apidocs-smoke-backup-${process.pid}`);
const hadSchemaDir = existsSync(SCHEMA_DIR);
if (hadSchemaDir) cpSync(SCHEMA_DIR, backup, { recursive: true });

try {
  runSmoke();
} finally {
  rmSync(SCHEMA_DIR, { recursive: true, force: true });
  if (hadSchemaDir) {
    cpSync(backup, SCHEMA_DIR, { recursive: true });
    rmSync(backup, { recursive: true, force: true });
    console.log('smoke: restored .schema; run `npm run apidocs:generate && npm run apidocs:postprocess && npm run build` to rebuild live docs');
  }
}

function runSmoke() {
  run('npm run apidocs');
  run('npm run build');

  const byId = page('reference/design/operations/queries/design/project/by-id');
  assert.match(byId, /EXPERIMENTAL/);
  assert.match(byId, /Not production-ready/);
  assert.match(byId, /sidebar-exp/);

  const project = page('reference/design/types/objects/des-project');
  assert.match(project, /Common Data Model/);
  assert.match(project, /Hardware Project/);
  assert.doesNotMatch(project, /id="comments"/);
  // Member headings keep graphql-markdown's explicit IDs, so `#name`-style links resolve.
  assert.match(project, /id="name"/);

  const drc = page('reference/design/operations/mutations/design-rule-check-execute');
  assert.match(drc, /id="input"/);

  const overview = page('reference/design/overview');
  assert.match(overview, /Entry points/);

  const home = page('');
  assert.match(home, /How this reference is organised/);

  const redirect = page('types/objects/DesProject');
  assert.match(redirect, /reference\/design\/types\/objects\/des-project/);

  const sdl = readFileSync('build/schema.graphql', 'utf8');
  assert.doesNotMatch(sdl, /@authorize|@cost|@doc\(/);

  console.log('smoke: OK');
}
