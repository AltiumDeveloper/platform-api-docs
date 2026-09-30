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

// Hand-written guides in sidebar order (sidebar_position, then title).
export function readGuides(guidesDir) {
  if (!existsSync(guidesDir)) return [];
  return readdirSync(guidesDir)
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => {
      const frontMatter = readFrontMatter(readFileSync(join(guidesDir, file), 'utf8'));
      const slug = frontMatter.slug ?? basename(file).replace(/\.mdx?$/, '');
      return {
        route: `guides/${String(slug).replace(/^\/+/, '')}`,
        title: frontMatter.title ?? slug,
        description: frontMatter.description ?? '',
        position: frontMatter.sidebar_position ?? Number.MAX_SAFE_INTEGER,
      };
    })
    .sort((a, b) => a.position - b.position || a.title.localeCompare(b.title));
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
  for (const context of contexts) {
    const slice = buildSlice({ document, manifest, contextId: context.id, siteUrl });
    write(join(buildDir, 'reference', context.slug, 'schema.graphql'), slice.text);
    const types = renderContextTypes({ context, pages, schema, cdmIndex, siteUrl });
    write(join(buildDir, 'reference', context.slug, 'types.txt'), types);
    const typesTokens = estimateTokens(types);
    const index = renderContextIndex({ context, pages, schema, cdmIndex, siteUrl, sliceTokens: slice.tokens, typesTokens });
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
