import { test } from 'node:test';
import assert from 'node:assert/strict';
import { copyFileSync, existsSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'graphql';
import { buildCdmIndex } from '../scripts/apidocs/lib/cdm.mjs';
import { runAnnotate } from '../scripts/apidocs/annotate.mjs';
import { readGuides, runLlms, siteUrlFromConfig } from '../scripts/apidocs/llms.mjs';

const SITE = 'https://example.test/docs';
const fixture = (p) => fileURLToPath(new URL(`./fixtures/${p}`, import.meta.url));
const page = (title, body = '') =>
  `<html><head><title>${title} | Altium 365 API</title></head><body><article><div class="theme-doc-markdown markdown"><header><h1>${title}</h1></header><p>${body}</p></div></article></body></html>`;

function writeFile(path, text) {
  mkdirSync(join(path, '..'), { recursive: true });
  writeFileSync(path, text);
}

// A tiny site: fixture manifest/SDL from the real annotate step, two reference pages, one guide.
function setup() {
  const root = mkdtempSync(join(tmpdir(), 'apidocs-llms-'));
  const schemaDir = join(root, '.schema');
  const buildDir = join(root, 'build');
  const guidesDir = join(root, 'guides');
  mkdirSync(schemaDir, { recursive: true });
  copyFileSync(fixture('schema.graphql'), join(schemaDir, 'raw.graphql'));
  writeFileSync(join(schemaDir, 'cdm-index.json'), JSON.stringify(buildCdmIndex([readFileSync(fixture('cdm/design.yaml'), 'utf8')])));
  runAnnotate({
    schemaDir,
    contextMapPath: fixture('context-map.yaml'),
    allowlistPath: fixture('unassigned-allowlist.txt'),
    publicSchemaPath: join(buildDir, 'schema.graphql'),
  });
  const pages = [
    { docId: 'reference/design/operations/queries/des-project-by-id', url: '/reference/design/operations/queries/des-project-by-id',
      name: 'desProjectById', section: 'operations', kind: 'queries', context: 'design', experimental: false, deprecated: false, legacyUrl: null },
    { docId: 'reference/design/types/objects/des-project', url: '/reference/design/types/objects/des-project',
      name: 'DesProject', section: 'types', kind: 'objects', context: 'design', experimental: false, deprecated: false, legacyUrl: null },
    { docId: 'reference/common/types/objects/page-info', url: '/reference/common/types/objects/page-info',
      name: 'PageInfo', section: 'types', kind: 'objects', context: 'common', experimental: false, deprecated: false, legacyUrl: null },
  ];
  writeFileSync(join(schemaDir, 'pages.json'), JSON.stringify(pages));
  writeFile(join(buildDir, 'index.html'), page('Altium 365 API', 'Home.'));
  writeFile(join(buildDir, 'guides/getting-started/index.html'), page('Getting started', 'See <a href="/docs/reference/design/overview">Design</a>.'));
  const manifest = JSON.parse(readFileSync(join(schemaDir, 'manifest.json'), 'utf8'));
  for (const context of manifest.contexts) writeFile(join(buildDir, 'reference', context.slug, 'overview/index.html'), page(context.title));
  for (const p of pages) writeFile(join(buildDir, p.url, 'index.html'), page(p.name, 'Body.'));
  writeFile(join(guidesDir, 'getting-started.mdx'), '---\ntitle: Getting started\ndescription: Endpoints and a first query.\nsidebar_position: 1\n---\n\nText.\n');
  writeFile(join(guidesDir, 'errors.mdx'), '---\ntitle: Errors\ndescription: Error handling.\nsidebar_position: 6\n---\n\nText.\n');
  writeFile(join(buildDir, 'guides/errors/index.html'), page('Errors'));
  return { root, schemaDir, buildDir, guidesDir };
}

test('siteUrlFromConfig reads url + baseUrl from docusaurus.config.js', () => {
  assert.equal(siteUrlFromConfig(), 'https://altiumdeveloper.github.io/platform-api-docs');
});

test('readGuides returns guides in sidebar order with route and description', () => {
  const { guidesDir } = setup();
  assert.deepEqual(readGuides(guidesDir).map((g) => [g.route, g.description]), [
    ['guides/getting-started', 'Endpoints and a first query.'],
    ['guides/errors', 'Error handling.'],
  ]);
  assert.deepEqual(readGuides(join(guidesDir, 'missing')), []);
});

test('readGuides recurses into folders, honours id/slug front matter and strips number prefixes', () => {
  const dir = mkdtempSync(join(tmpdir(), 'apidocs-guides-'));
  const guide = (path, fields) => writeFile(join(dir, path),
    `---\n${Object.entries(fields).map(([key, value]) => `${key}: ${value}`).join('\n')}\n---\n\nText.\n`);
  guide('getting-started.mdx', { title: 'Getting started', description: 'd', sidebar_position: 1 });
  guide('03-pagination.mdx', { title: 'Pagination', description: 'd' }); // position 3 from the number prefix
  guide('errors.mdx', { title: 'Errors', description: 'd', sidebar_position: 6 });
  guide('absolute.mdx', { title: 'Absolute', description: 'd', slug: '/top/absolute' });
  guide('02-advanced/index.mdx', { title: 'Advanced', description: 'd', sidebar_position: 1 });
  guide('02-advanced/01-webhooks.mdx', { title: 'Webhooks', description: 'd' });
  guide('02-advanced/custom.mdx', { title: 'Custom', description: 'd', id: 'tuned', sidebar_position: 5 });
  guide('02-advanced/relative.md', { title: 'Relative', description: 'd', slug: 'other-name', sidebar_position: 7 });
  writeFile(join(dir, '02-advanced/_category_.json'), '{}');
  assert.deepEqual(readGuides(dir).map((g) => g.route), [
    'guides/getting-started',
    'guides/pagination',
    'guides/errors',
    'top/absolute',
    'guides/advanced',
    'guides/advanced/webhooks',
    'guides/advanced/tuned',
    'guides/advanced/other-name',
  ]);
});

test('runLlms writes .md pages, slices, per-context and root indexes and llms-full.txt', () => {
  const { schemaDir, buildDir, guidesDir } = setup();
  const result = runLlms({ buildDir, schemaDir, guidesDir, siteUrl: SITE });
  const read = (path) => readFileSync(join(buildDir, path), 'utf8');

  assert.equal(result.pages, 1 + 2 + 8 + 3); // home, guides, 8 overviews (7 contexts + Common), pages
  assert.match(read('index.md'), /^---\ntitle: "Altium 365 API"\nurl: "https:\/\/example\.test\/docs\/"\nbounded_context: "none"\nkind: "overview"/);
  assert.match(read('guides/getting-started.md'), /kind: "guide"/);
  assert.match(read('reference/design/overview.md'), /bounded_context: "Design"\nkind: "overview"/);
  const project = read('reference/design/types/objects/des-project.md');
  assert.match(project, /bounded_context: "Design"\nkind: "objects"\nexperimental: false\ndeprecated: false\n---\n\n# DesProject\n\nBody\./);

  const slice = read('reference/design/schema.graphql');
  parse(slice);
  assert.match(slice, /^# Altium 365 API — Design schema slice/);
  assert.match(slice, /^type DesProject implements Node/m);
  assert.ok(existsSync(join(buildDir, 'reference/common/schema.graphql')));

  const designIndex = read('reference/design/llms.txt');
  assert.match(designIndex, /^# Design — Altium 365 API/);
  assert.match(designIndex, new RegExp(`## Entry points\\n- \\[desProjectById\\]\\(${SITE}/reference/design/operations/queries/des-project-by-id\\.md\\): Gets a project by its identifier\\.`));
  assert.match(designIndex, /## Entities\n- \[DesProject\]/);
  const commonTypes = read('reference/common/types.txt');
  assert.match(commonTypes, /^# Common — types\n[\s\S]*\n- \[PageInfo\]/);
  assert.ok(read('reference/common/llms.txt').includes(
    `- [All types in Common](${SITE}/reference/common/types.txt): one line per type (~${result.tokens.types.common} tokens)`));
  assert.equal(result.tokens.types.common, Math.ceil(commonTypes.length / 4));
  assert.ok(existsSync(join(buildDir, 'reference/deprecated/llms.txt')));

  const full = read('llms-full.txt');
  const at = (text) => full.indexOf(text);
  assert.ok(at('title: "Getting started"') < at('title: "Errors"'), 'guides in sidebar order');
  assert.ok(at('title: "Errors"') < at('title: "Platform"'), 'guides before reference');
  assert.ok(at('title: "Design"') < at('title: "desProjectById"'), 'overview before operations');
  assert.ok(at('title: "desProjectById"') < at('title: "DesProject"'), 'operations before types');
  assert.equal(at('title: "Altium 365 API"'), -1, 'home page is not part of llms-full');

  const root = read('llms.txt');
  assert.match(root, /^# Altium 365 API\n/);
  assert.ok(root.includes(`- [Design](${SITE}/reference/design/llms.txt)`));
  assert.ok(root.includes(`- [Getting started](${SITE}/guides/getting-started.md): Endpoints and a first query.`));
  assert.ok(root.includes(`(~${result.tokens.full} tokens)`));
  assert.equal(result.tokens.root, Math.ceil(root.length / 4));
});

test('runLlms fails clearly when inputs are missing', () => {
  const { schemaDir, buildDir, guidesDir } = setup();
  assert.throws(() => runLlms({ buildDir, schemaDir: join(schemaDir, 'none'), guidesDir, siteUrl: SITE }), /manifest\.json or pages\.json not found/);
  assert.throws(() => runLlms({ buildDir: join(buildDir, 'none'), schemaDir, guidesDir, siteUrl: SITE }), /index\.html not found/);
  writeFileSync(join(schemaDir, 'pages.json'), JSON.stringify([{ docId: 'reference/design/x', url: '/reference/design/x', name: 'x',
    section: 'types', kind: 'objects', context: 'design', experimental: false, deprecated: false, legacyUrl: null }]));
  assert.throws(() => runLlms({ buildDir, schemaDir, guidesDir, siteUrl: SITE }), /missing built page/);
});
