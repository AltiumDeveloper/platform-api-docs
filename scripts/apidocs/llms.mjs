#!/usr/bin/env node
// Runs after `docusaurus build`: writes the LLM surface into build/ — clean .md pages, per-context schema
// slices and llms.txt indexes, the site-root llms.txt and llms-full.txt. Reads only public build outputs,
// the public SDL, .schema/{manifest,pages,cdm-index}.json and docs/guides front matter.
import { existsSync, mkdirSync, readdirSync, readFileSync, realpathSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { basename, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildSchema } from 'graphql';
import { readFrontMatter } from './lib/pages.mjs';
import { htmlToMarkdown, markdownFileFor } from './lib/html-to-md.mjs';
import { buildSlice, estimateTokens, parseSdl } from './lib/sdl-slice.mjs';
import { buildSchemaGraph } from './lib/schema-graph.mjs';
import { renderContextIndex, renderContextTypes, renderDeprecatedIndex, renderRootIndex } from './lib/llms-index.mjs';

const require = createRequire(import.meta.url);
const readJson = (path, fallback) => (existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : fallback);
const OPERATION_KINDS = ['queries', 'mutations', 'subscriptions', 'directives'];
const TYPE_KINDS = ['objects', 'interfaces', 'unions', 'inputs', 'enums', 'scalars', 'directives'];

// `url` + `baseUrl` from docusaurus.config.js, without the trailing slash.
export function siteUrlFromConfig() {
  const config = require('../../docusaurus.config.js');
  return `${config.url}${config.baseUrl}`.replace(/\/+$/, '');
}

// Docusaurus number prefixes (`01-foo.mdx`, `02-advanced/`): stripped from ids and routes, used as default position.
const NUMBER_PREFIX = /^(\d+)\s*[-_.]+\s*(?=[^-_.\s])/;
const unprefixed = (name) => name.replace(NUMBER_PREFIX, '');
const prefixNumber = (name) => {
  const match = NUMBER_PREFIX.exec(name);
  return match ? Number(match[1]) : null;
};
const LAST = Number.MAX_SAFE_INTEGER;

function guideFiles(dir, parents = []) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isDirectory()) return guideFiles(join(dir, entry.name), [...parents, entry.name]);
    return /\.mdx?$/.test(entry.name) ? [{ path: join(dir, entry.name), parents, file: entry.name }] : [];
  });
}

// Site route of a guide, as Docusaurus computes it (docs routeBasePath '/', guides under `routeBase`):
// absolute `slug` from the docs root, relative `slug` from the guide's folder, else the folder plus `id` (or the file
// name); `index`, `README` or a file named like its folder is the folder's own page. Number prefixes are stripped.
function guideRoute({ parents, file }, frontMatter, routeBase) {
  const dirs = parents.map(unprefixed);
  const routePath = (...parts) => parts.flat().filter(Boolean).join('/').replace(/\/{2,}/g, '/').replace(/^\/+|\/+$/g, '');
  const slug = frontMatter.slug == null ? null : String(frontMatter.slug);
  if (slug !== null) return slug.startsWith('/') ? routePath(slug) : routePath(routeBase, dirs, slug);
  const name = unprefixed(basename(file).replace(/\.mdx?$/, ''));
  if (frontMatter.id != null) return routePath(routeBase, dirs, String(frontMatter.id));
  const folderPage = /^(index|readme)$/i.test(name) || (dirs.length > 0 && name === dirs.at(-1));
  return routePath(routeBase, dirs, folderPage ? [] : name);
}

// Hand-written guides in sidebar order: top-level guides first, then each subfolder (by its number prefix, then
// name); within a folder by sidebar_position (default: the file's number prefix), then title.
export function readGuides(guidesDir, { routeBase = 'guides' } = {}) {
  if (!existsSync(guidesDir)) return [];
  return guideFiles(guidesDir)
    .map((entry) => {
      const frontMatter = readFrontMatter(readFileSync(entry.path, 'utf8'));
      const route = guideRoute(entry, frontMatter, routeBase);
      return {
        route,
        path: entry.path,
        title: frontMatter.title ?? route.split('/').pop(),
        description: frontMatter.description ?? '',
        position: frontMatter.sidebar_position ?? prefixNumber(entry.file) ?? LAST,
        folder: entry.parents.join('/'),
        folderPosition: entry.parents.length ? prefixNumber(entry.parents[0]) ?? LAST : -1,
      };
    })
    .sort((a, b) => a.folderPosition - b.folderPosition || a.folder.localeCompare(b.folder)
      || a.position - b.position || a.title.localeCompare(b.title))
    .map(({ folder, folderPosition, ...guide }) => guide);
}

const rank = (list, value) => {
  const index = list.indexOf(value);
  return index === -1 ? list.length : index;
};

// Reference pages of one context in llms-full order: operations, then types, then deprecated pages.
function orderedPages(pages, contextId) {
  const mine = pages.filter((page) => page.context === contextId);
  const group = (page) => (page.deprecated ? 2 : page.section === 'operations' ? 0 : 1);
  const kindRank = (page) => rank(page.section === 'operations' ? OPERATION_KINDS : TYPE_KINDS, page.kind);
  return mine.sort((a, b) => group(a) - group(b) || kindRank(a) - kindRank(b) || a.name.localeCompare(b.name));
}

function write(path, text) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, text);
}

export function runLlms({
  buildDir = 'build', schemaDir = '.schema', guidesDir = 'docs/guides', sdlPath = null, siteUrl = siteUrlFromConfig(),
} = {}) {
  const manifest = readJson(join(schemaDir, 'manifest.json'), null);
  const pages = readJson(join(schemaDir, 'pages.json'), null);
  if (!manifest || !pages) throw new Error(`llms: ${schemaDir}/manifest.json or pages.json not found; run npm run apidocs first`);
  if (!existsSync(join(buildDir, 'index.html'))) throw new Error(`llms: ${buildDir}/index.html not found; run npm run build first`);
  const cdmIndex = readJson(join(schemaDir, 'cdm-index.json'), {});
  const sdlFile = sdlPath ?? (existsSync(join(buildDir, 'schema.graphql')) ? join(buildDir, 'schema.graphql') : 'static/schema.graphql');
  const sdl = readFileSync(sdlFile, 'utf8');
  const document = parseSdl(sdl);
  const schema = buildSchema(sdl, { assumeValidSDL: true });
  const contexts = manifest.contexts;
  const contextById = new Map(contexts.map((context) => [context.id, context]));
  const guides = readGuides(guidesDir);

  // 1. Clean .md pages.
  const markdown = new Map();
  const convert = (route, meta) => {
    const htmlPath = join(buildDir, route, 'index.html');
    if (!existsSync(htmlPath)) throw new Error(`llms: missing built page ${htmlPath}`);
    const md = htmlToMarkdown(readFileSync(htmlPath, 'utf8'), { route, siteUrl, meta });
    write(join(buildDir, markdownFileFor(route)), md);
    markdown.set(route, md);
  };
  const flags = { experimental: false, deprecated: false };
  convert('', { bounded_context: 'none', kind: 'overview', ...flags });
  for (const guide of guides) convert(guide.route, { bounded_context: 'none', kind: 'guide', ...flags });
  for (const context of contexts) convert(`reference/${context.slug}/overview`, { bounded_context: context.title, kind: 'overview', ...flags });
  for (const page of pages) {
    convert(page.url.replace(/^\/+/, ''), {
      bounded_context: contextById.get(page.context)?.title ?? 'none',
      kind: page.kind,
      experimental: page.experimental,
      deprecated: page.deprecated,
    });
  }

  // 2. Per-context schema slices and llms.txt; the deprecated index.
  const tokens = { contexts: {}, slices: {}, types: {} };
  const namespaceTypes = new Set(Object.keys(manifest.namespaceTypes ?? {}));
  const graph = buildSchemaGraph(schema, { isNamespace: (type) => namespaceTypes.has(type.name) });
  for (const context of contexts) {
    const slice = buildSlice({ document, manifest, contextId: context.id, siteUrl });
    write(join(buildDir, 'reference', context.slug, 'schema.graphql'), slice.text);
    const types = renderContextTypes({ context, pages, schema, cdmIndex, siteUrl });
    write(join(buildDir, 'reference', context.slug, 'types.txt'), types);
    const typesTokens = estimateTokens(types);
    const index = renderContextIndex({ context, pages, schema, cdmIndex, siteUrl, sliceTokens: slice.tokens, typesTokens, graph });
    write(join(buildDir, 'reference', context.slug, 'llms.txt'), index);
    tokens.slices[context.slug] = slice.tokens;
    tokens.types[context.slug] = typesTokens;
    tokens.contexts[context.slug] = estimateTokens(index);
  }
  const deprecated = renderDeprecatedIndex({ contexts, pages, schema, siteUrl });
  write(join(buildDir, 'reference', 'deprecated', 'llms.txt'), deprecated);
  tokens.deprecated = estimateTokens(deprecated);

  // 3. llms-full.txt: guides, then each context (overview, operations, types, deprecated), each page with its front matter.
  const fullRoutes = [
    ...guides.map((guide) => guide.route),
    ...contexts.flatMap((context) => [
      `reference/${context.slug}/overview`,
      ...orderedPages(pages, context.id).map((page) => page.url.replace(/^\/+/, '')),
    ]),
  ];
  const full = fullRoutes.map((route) => markdown.get(route)).join('\n');
  write(join(buildDir, 'llms-full.txt'), full);
  tokens.full = estimateTokens(full);

  // 4. Root llms.txt.
  const root = renderRootIndex({ contexts, guides, siteUrl, schemaTokens: estimateTokens(sdl), fullTokens: tokens.full });
  write(join(buildDir, 'llms.txt'), root);
  tokens.root = estimateTokens(root);
  return { pages: markdown.size, tokens };
}

if (process.argv[1] && realpathSync(fileURLToPath(import.meta.url)) === realpathSync(process.argv[1])) {
  const { pages, tokens } = runLlms();
  console.log(`llms: ${pages} markdown pages; llms.txt ~${tokens.root} tokens; llms-full.txt ~${tokens.full} tokens`);
  for (const [slug, count] of Object.entries(tokens.contexts)) {
    console.log(`  reference/${slug}/llms.txt ~${count} tokens, types.txt ~${tokens.types[slug]} tokens, schema.graphql ~${tokens.slices[slug]} tokens`);
  }
  console.log(`  reference/deprecated/llms.txt ~${tokens.deprecated} tokens`);
}
