#!/usr/bin/env node
// End-to-end check: fixture SDL → full pipeline → Docusaurus build → assertions on the output.
import assert from 'node:assert/strict';
import { execSync } from 'node:child_process';
import { cpSync, existsSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { parse } from 'graphql';
import { runCheck } from './llms-check.mjs';

const env = {
  ...process.env,
  APIDOCS_SCHEMA_FILE: 'test/fixtures/schema.graphql',
  APIDOCS_CDM_DIR: 'test/fixtures/cdm',
  APIDOCS_CONTEXT_MAP: 'test/fixtures/context-map.yaml',
  APIDOCS_ALLOWLIST: 'test/fixtures/unassigned-allowlist.txt',
  // Keep the live notes/cdm-mismatches.md untouched by fixture runs.
  APIDOCS_MISMATCHES_FILE: join(process.env.TMPDIR || tmpdir(), `apidocs-smoke-mismatches-${process.pid}.md`),
};
const run = (command) => execSync(command, { stdio: 'inherit', env });
const page = (path) => {
  const file = `build/${path}/index.html`;
  assert.ok(existsSync(file), `missing ${file}`);
  return readFileSync(file, 'utf8');
};

// The pipeline overwrites .schema/ (raw SDL, manifest, CDM index, size baseline) and static/schema.graphql
// (the public SDL that `npm run test:guides` validates against): keep the live copies safe.
const SCHEMA_DIR = '.schema';
const PUBLIC_SDL = 'static/schema.graphql';
const backup = join(process.env.TMPDIR || tmpdir(), `apidocs-smoke-backup-${process.pid}`);
const hadSchemaDir = existsSync(SCHEMA_DIR);
const hadPublicSdl = existsSync(PUBLIC_SDL);
if (hadSchemaDir) cpSync(SCHEMA_DIR, backup, { recursive: true });
if (hadPublicSdl) cpSync(PUBLIC_SDL, `${backup}.graphql`);

try {
  runSmoke();
} finally {
  rmSync(env.APIDOCS_MISMATCHES_FILE, { force: true });
  rmSync(SCHEMA_DIR, { recursive: true, force: true });
  if (hadPublicSdl) {
    cpSync(`${backup}.graphql`, PUBLIC_SDL);
    rmSync(`${backup}.graphql`, { force: true });
  } else {
    rmSync(PUBLIC_SDL, { force: true });
  }
  if (hadSchemaDir) {
    cpSync(backup, SCHEMA_DIR, { recursive: true });
    rmSync(backup, { recursive: true, force: true });
    console.log('smoke: restored .schema and static/schema.graphql; run `npm run apidocs:generate && npm run apidocs:postprocess && npm run build && npm run llms && npm run llms:check` to rebuild live docs');
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

  // Section order: Returned By, then the SDL code block, then Fields.
  const heading = (html, text) => {
    const at = html.search(new RegExp(`<h[1-6][^>]*>\\s*${text}\\b`));
    assert.notEqual(at, -1, `missing "${text}" heading`);
    return at;
  };
  const sdlAt = project.indexOf('language-graphql');
  assert.notEqual(sdlAt, -1, 'missing SDL code block');
  assert.ok(heading(project, 'Returned By') < sdlAt, 'Returned By must precede the SDL code block');
  assert.ok(sdlAt < heading(project, 'Fields'), 'the SDL code block must precede Fields');

  // Namespaced operation pages are titled with the dotted name, not the leaf.
  assert.match(byId, /<h1[^>]*>[^<]*design\.project\.byId/);

  const drc = page('reference/design/operations/mutations/design-rule-check-execute');
  assert.match(drc, /id="input"/);

  const overview = page('reference/design/overview');
  assert.match(overview, /Entry points/);
  const at = (text) => {
    const index = overview.indexOf(text);
    assert.notEqual(index, -1, `overview is missing "${text}"`);
    return index;
  };
  assert.ok(at('Concepts:') < at('Entities'), 'overview: Concepts before Entities');
  assert.ok(at('Entities') < at('Entry points'), 'overview: Entities before Entry points');
  assert.ok(at('Entry points') < at('Contents'), 'overview: Entry points before Contents');

  const home = page('');
  assert.match(home, /How this reference is organised/);

  const redirect = page('types/objects/DesProject');
  assert.match(redirect, /reference\/design\/types\/objects\/des-project/);

  const sdl = readFileSync('build/schema.graphql', 'utf8');
  assert.doesNotMatch(sdl, /@authorize|@cost|@doc\(/);

  // Landing page: public endpoints, a pointer for assistants, no gateway URL.
  assert.match(home, /eur\.365\.altium\.com\/api\/graphql/);
  assert.match(home, /For AI assistants/);
  assert.doesNotMatch(home, /napi\/gateway/);
  assert.match(home, /served from regional endpoints/);
  assert.doesNotMatch(home, /single GraphQL endpoint/);
  assert.match(home, /Most take a single/);

  // Guides are in the sidebar, before the reference.
  const guide = page('guides/getting-started');
  assert.match(guide, /Getting started/);
  const guidesAt = home.indexOf('title="Guides"');
  assert.ok(guidesAt !== -1 && guidesAt < home.indexOf('title="Reference"'), 'sidebar: Guides category before Reference');

  // Every doc page advertises its Markdown twin.
  const alternate = (html, href) => (html.match(/<link\b[^>]*>/g) ?? []).some((tag) =>
    tag.includes('rel="alternate"') && tag.includes('type="text/markdown"') && tag.includes(`href="${href}"`));
  assert.ok(alternate(project, '/platform-api-docs/reference/design/types/objects/des-project.md'), 'type page: markdown alternate link');
  assert.ok(alternate(home, '/platform-api-docs/index.md'), 'home page: markdown alternate link');

  // Human-visible links to the LLM files: footer, context overview, and "View as Markdown" on every doc page.
  const anchor = (html, pattern) => (html.match(/<a\b[^>]*>/g) ?? []).some((tag) => pattern.test(tag));
  assert.ok(anchor(home, /href="\/platform-api-docs\/llms\.txt"/), 'footer: llms.txt link');
  assert.ok(anchor(overview, /href="\/platform-api-docs\/reference\/design\/llms\.txt"/), 'overview: llms.txt link');
  assert.ok(anchor(overview, /href="\/platform-api-docs\/reference\/design\/schema\.graphql"/), 'overview: schema slice link');
  assert.ok(anchor(overview, /href="\/platform-api-docs\/reference\/design\/types\.txt"/), 'overview: types link');
  const viewAsMarkdown = (html, href) => (html.match(/<a\b[^>]*>View as Markdown<\/a>/g) ?? []).some((tag) => tag.includes(`href="${href}"`));
  assert.ok(viewAsMarkdown(project, '/platform-api-docs/reference/design/types/objects/des-project.md'), 'type page: View as Markdown link');
  assert.ok(viewAsMarkdown(guide, '/platform-api-docs/guides/getting-started.md'), 'guide: View as Markdown link');
  assert.ok(viewAsMarkdown(overview, '/platform-api-docs/reference/design/overview.md'), 'overview: View as Markdown link');
  assert.ok(viewAsMarkdown(home, '/platform-api-docs/index.md'), 'home page: View as Markdown link');

  // LLM surface.
  run('npm run llms');
  const text = (path) => {
    const file = `build/${path}`;
    assert.ok(existsSync(file), `missing ${file}`);
    return readFileSync(file, 'utf8');
  };
  const llms = text('llms.txt');
  assert.match(llms, /^# Altium Platform API\n/);
  assert.match(llms, /\[Design\]\(https:\/\/altiumdeveloper\.github\.io\/platform-api-docs\/reference\/design\/llms\.txt\)/);
  assert.match(llms, /\[Getting started\]\(https:\/\/altiumdeveloper\.github\.io\/platform-api-docs\/guides\/getting-started\.md\)/);
  assert.match(text('reference/design/llms.txt'), /^# Design — Altium Platform API\n/);
  assert.match(text('reference/common/types.txt'), /^# Common — types\n/);
  const slice = text('reference/design/schema.graphql');
  parse(slice);
  assert.match(slice, /^type DesProject implements Node/m);
  const projectMd = text('reference/design/types/objects/des-project.md');
  assert.match(projectMd, /^---\ntitle: "DesProject"\nurl: "https:\/\/altiumdeveloper\.github\.io\/platform-api-docs\/reference\/design\/types\/objects\/des-project"\nbounded_context: "Design"\nkind: "objects"\n/);
  assert.doesNotMatch(projectMd, /<Badge|export const|hash-link/);
  // The UI-only "View as Markdown" link never reaches the Markdown twins; the overview's LLM links become absolute URLs.
  for (const file of ['reference/design/types/objects/des-project.md', 'index.md', 'reference/design/overview.md', 'guides/getting-started.md']) {
    assert.doesNotMatch(text(file), /View as Markdown/, `${file} must not contain the View as Markdown link`);
  }
  const overviewMd = text('reference/design/overview.md');
  assert.match(overviewMd, /\[llms\.txt\]\(https:\/\/altiumdeveloper\.github\.io\/platform-api-docs\/reference\/design\/llms\.txt\)/);
  assert.match(overviewMd, /\[schema slice\]\(https:\/\/altiumdeveloper\.github\.io\/platform-api-docs\/reference\/design\/schema\.graphql\)/);
  assert.match(overviewMd, /\[all types\]\(https:\/\/altiumdeveloper\.github\.io\/platform-api-docs\/reference\/design\/types\.txt\)/);
  assert.match(text('reference/design/operations/queries/design/project/by-id.md'), /\*\*EXPERIMENTAL\*\*/);
  assert.match(text('index.md'), /^---\ntitle: "Altium Platform API"/);
  assert.match(text('llms-full.txt'), /title: "Getting started"/);
  // llms:check. The landing page and guides link to live pages the fixture schema does not produce (Docusaurus warns
  // about the same links): only those broken internal links are tolerated here.
  const check = runCheck({ buildDir: 'build' });
  const handWritten = (file) => file === 'index.md' || file.startsWith('guides/') || file === 'llms-full.txt';
  const unexpected = check.problems.filter((problem) => !(problem.message.startsWith('broken internal link ') && handWritten(problem.file)));
  assert.deepEqual(unexpected, [], 'llms:check problems');
  assert.ok(check.files > 0 && check.links > 0);
  console.log(`smoke: llms:check ${check.files} files, ${check.links} distinct links; ${check.problems.length - unexpected.length} tolerated links from hand-written pages to live-only pages`);

  console.log('smoke: OK');
}
