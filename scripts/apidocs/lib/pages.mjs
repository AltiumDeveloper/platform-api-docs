import { createRequire } from 'node:module';
import { parse } from 'yaml';

const require = createRequire(import.meta.url);
const { slugify } = require('@graphql-markdown/utils');

const OPERATION_KINDS = { queries: 'query', mutations: 'mutation', subscriptions: 'subscription' };
const KIND_LABELS = [
  ['queries', 'Queries'], ['mutations', 'Mutations'], ['subscriptions', 'Subscriptions'],
  ['objects', 'Objects'], ['inputs', 'Inputs'], ['enums', 'Enums'], ['interfaces', 'Interfaces'],
  ['unions', 'Unions'], ['scalars', 'Scalars'], ['directives', 'Directives'],
];
const ENTRY_POINT = /(ById|ByIds|\.byId|\.byIds)$/;
const byName = (a, b) => a.name.localeCompare(b.name);

export function readFrontMatter(text) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text);
  return match ? parse(match[1]) ?? {} : {};
}

export function isDocDirectivePage({ path, frontMatter }) {
  return /\/types\/directives\//.test(path) && frontMatter.title === 'doc';
}

const DOC_LINK = /\[[^\]]*\]\([^)\s]*\/types\/directives\/doc(?:\.mdx)?(?:#[^)\s]*)?\)(?:[ \t]*<Badge\b[^>]*\/>)?/g;
const BULLET = '<Bullet />';

// Removes references to the deleted synthetic @doc directive page (link, its trailing relation badge and
// one adjacent <Bullet /> separator); lines left with nothing but badges/bullets/whitespace are dropped.
export function stripDocDirectiveLinks(text) {
  return text
    .split('\n')
    .flatMap((line) => {
      if (!line.includes('directives/doc')) return [line];
      DOC_LINK.lastIndex = 0;
      if (!DOC_LINK.test(line)) return [line];
      const cleaned = line
        .replace(DOC_LINK, '')
        .replace(/(?:<Bullet \/>\s*){2,}/g, BULLET)
        .replace(/^\s*<Bullet \/>\s*/, '')
        .replace(/\s*<Bullet \/>\s*$/, '');
      const leftover = cleaned.replace(/<Badge\b[^>]*\/>|<Bullet \/>|[-*+]|\s/g, '');
      return leftover === '' ? [] : [cleaned];
    })
    .join('\n');
}

export function buildPagesIndex(files, manifest) {
  const contextBySlug = new Map(manifest.contexts.map((c) => [c.slug, c.id]));
  const operationByPath = Object.fromEntries(
    Object.entries(manifest.operations).map(([kind, operations]) => [
      kind,
      new Map(Object.keys(operations).map((name) => [name.split('.').map(slugify).join('/'), name])),
    ]),
  );
  const experimentalOperations = new Set(manifest.experimental.operations);
  const experimentalTypes = new Set(manifest.experimental.types);

  return files.map(({ path, frontMatter }) => {
    const segments = path.replace(/\.mdx?$/, '').split('/');
    // graphql-markdown's `deprecated: 'group'` nests fully deprecated pages under reference/deprecated/<bc>/...
    const deprecated = segments[1] === 'deprecated';
    const logical = deprecated ? [segments[0], ...segments.slice(2)] : segments;
    const [, contextSlug, section, kind, ...rest] = logical;
    const operationKind = section === 'operations' ? OPERATION_KINDS[kind] : undefined;
    const namespaced = Boolean(operationKind) && rest.length > 1;
    const name = namespaced
      ? operationByPath[operationKind]?.get(rest.join('/')) ?? frontMatter.title
      : frontMatter.title;
    const docId = [...segments.slice(0, -1), frontMatter.id ?? segments.at(-1)].join('/');
    const experimental = operationKind ? experimentalOperations.has(name) : section === 'types' && experimentalTypes.has(name);
    return {
      docId,
      url: `/${docId}`,
      name,
      section,
      kind,
      context: contextBySlug.get(contextSlug) ?? null,
      experimental,
      deprecated,
      legacyUrl: namespaced ? null : `/${section}/${kind}/${name}`,
    };
  });
}

export function buildRedirects(pages) {
  const seen = new Set();
  const redirects = [];
  for (const page of pages) {
    if (!page.legacyUrl || page.legacyUrl === page.url || seen.has(page.legacyUrl)) continue;
    seen.add(page.legacyUrl);
    redirects.push({ from: page.legacyUrl, to: page.url });
  }
  return redirects.sort((a, b) => a.from.localeCompare(b.from));
}

export function renderContextOverview(context, pages, cdmIndex) {
  const mine = pages.filter((page) => page.context === context.id && !page.deprecated);
  const rows = KIND_LABELS.map(([kind, label]) => {
    const ofKind = mine.filter((page) => page.kind === kind);
    return ofKind.length ? `| ${label} | ${ofKind.length} | ${ofKind.filter((p) => p.experimental).length} |` : null;
  }).filter(Boolean);
  const entryPoints = mine
    .filter((page) => page.section === 'operations' && page.kind === 'queries' && ENTRY_POINT.test(page.name))
    .sort(byName);
  const cdmTypes = mine.filter((page) => page.section === 'types' && cdmIndex[page.name]).sort(byName);

  const lines = [
    '---',
    'id: overview',
    `title: ${JSON.stringify(context.title)}`,
    `description: ${JSON.stringify(context.description)}`,
    'hide_table_of_contents: true',
    'pagination_next: null',
    'pagination_prev: null',
    '---',
    '',
    context.description,
    '',
    '| Kind | Items | Experimental |',
    '| --- | --- | --- |',
    ...rows,
  ];
  if (entryPoints.length) {
    lines.push('', '## Entry points', '', 'Look up entities by identifier:', '');
    for (const page of entryPoints) lines.push(`- [\`${page.name}\`](${page.url})`);
  }
  if (cdmTypes.length) {
    lines.push('', '## Common Data Model', '', 'API types in this bounded context that represent CDM entities:', '');
    for (const page of cdmTypes) {
      const entities = cdmIndex[page.name].map((entry) => `[${entry.title}](${entry.url})`).join(', ');
      lines.push(`- [\`${page.name}\`](${page.url}) — ${entities}`);
    }
    lines.push('', 'Browse all entities in the [Common Data Model](https://altiumdeveloper.github.io/cdm/).');
  }
  return `${lines.join('\n')}\n`;
}
