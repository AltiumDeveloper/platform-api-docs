#!/usr/bin/env node
// End-to-end check: fixture SDL → full pipeline → Docusaurus build → assertions on the output.
import assert from 'node:assert/strict';
import { execSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';

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

const overview = page('reference/design/overview');
assert.match(overview, /Entry points/);

const home = page('');
assert.match(home, /How this reference is organised/);

const redirect = page('types/objects/DesProject');
assert.match(redirect, /reference\/design\/types\/objects\/des-project/);

const sdl = readFileSync('build/schema.graphql', 'utf8');
assert.doesNotMatch(sdl, /@authorize|@cost|@doc\(/);

console.log('smoke: OK');
