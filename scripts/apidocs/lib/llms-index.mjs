// llms.txt rendering (llmstxt.org format): the site root index and one index per bounded context.
import { getNamedType, isObjectType } from 'graphql';
import { ENTRY_POINT } from './pages.mjs';
import { buildSchemaGraph, fieldTarget } from './schema-graph.mjs';
import { estimateTokens } from './sdl-slice.mjs';

export const DEVELOPER_CENTER_LINKS = [
  ['Using an access token', 'https://www.altium.com/documentation/altium-developer-center/altium-365/key-concepts/tokens/access'],
  ['Quick start (Altium 365 API)', 'https://www.altium.com/documentation/altium-developer-center/quick-starts/365-api'],
  ['Pagination', 'https://www.altium.com/documentation/altium-developer-center/altium-365/api/pagination'],
  ['Examples', 'https://www.altium.com/documentation/altium-developer-center/altium-365/api/examples'],
  ['Altium 365 API overview', 'https://www.altium.com/documentation/altium-developer-center/altium-365/api'],
];
const CDM_SITE = 'https://altiumdeveloper.github.io/cdm';
const OPERATION_SECTIONS = [['queries', 'Queries'], ['mutations', 'Mutations'], ['subscriptions', 'Subscriptions']];
const TYPE_KIND_ORDER = ['objects', 'interfaces', 'unions', 'inputs', 'enums', 'scalars', 'directives'];
const EXPERIMENTAL_PREFIX = /^\s*\*\*Experimental\*\*\s*/;
const MAX_DESCRIPTION = 200;
const byName = (a, b) => a.name.localeCompare(b.name);

export const cdmSubsetUrl = (subset) => `${CDM_SITE}/subsets/${encodeURIComponent(subset)}/`;
export const mdUrl = (siteUrl, page) => `${siteUrl}${page.url}.md`;

// `*PROTOTYPE, SUBJECT TO CHANGE*.`, `**DEPRECATED**.` …: an italic/bold all-caps phrase ending with a full stop.
const CAPS_PREFIX = /^(\*{1,2})[A-Z][A-Z0-9 ,'/-]*\1\.\s+/;
const ABBREVIATION = /(?:^|[\s(])(?:e\.g|i\.e|etc|vs)\.$/i;

// Index just past the first sentence end: [.!?] followed by whitespace or the end, outside parentheses and not
// closing an abbreviation (e.g., i.e., etc., vs.). -1 when there is none.
function sentenceEnd(text) {
  let depth = 0;
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    if (char === '(') depth += 1;
    else if (char === ')') depth = Math.max(0, depth - 1);
    else if ('.!?'.includes(char) && depth === 0 && (index + 1 === text.length || /\s/.test(text[index + 1]))) {
      if (char === '.' && ABBREVIATION.test(text.slice(0, index + 1))) continue;
      return index + 1;
    }
  }
  return -1;
}

// First sentence of an SDL description, without the `**Experimental**` prefix or an all-caps emphasis prefix
// (`*PROTOTYPE, SUBJECT TO CHANGE*.`), at most 200 characters.
export function firstSentence(description) {
  const text = String(description ?? '').replace(EXPERIMENTAL_PREFIX, '').replace(/\s+/g, ' ').trim()
    .replace(CAPS_PREFIX, '');
  if (!text) return '';
  const end = sentenceEnd(text);
  const sentence = end === -1 ? text : text.slice(0, end);
  return sentence.length > MAX_DESCRIPTION ? `${sentence.slice(0, MAX_DESCRIPTION - 1).trimEnd()}…` : sentence;
}

// Field definition of a (possibly dotted, namespaced) operation, or null.
export function operationField(schema, kind, name) {
  const root = { queries: schema.getQueryType(), mutations: schema.getMutationType(), subscriptions: schema.getSubscriptionType() }[kind];
  let type = root;
  let field = null;
  for (const segment of name.split('.')) {
    if (!type || !isObjectType(type)) return null;
    field = type.getFields()[segment] ?? null;
    if (!field) return null;
    type = getNamedType(field.type);
  }
  return field;
}

// SDL description of the page's operation, type or directive.
export function pageDescription(schema, page) {
  if (page.kind === 'directives') return schema.getDirective(page.name)?.description ?? '';
  if (page.section === 'operations') return operationField(schema, page.kind, page.name)?.description ?? '';
  return schema.getType(page.name)?.description ?? '';
}

function deprecationReason(schema, page) {
  if (page.section !== 'operations') return '';
  return operationField(schema, page.kind, page.name)?.deprecationReason ?? '';
}

function pageLine(page, { schema, siteUrl }, label = '') {
  const description = firstSentence(pageDescription(schema, page));
  const suffix = page.experimental ? ' [EXPERIMENTAL]' : '';
  return `- [${page.name}](${mdUrl(siteUrl, page)})${label ? ` ${label}` : ''}${description ? `: ${description}` : ''}${suffix}`;
}

const MAX_VIA = 5;
const MAX_VIA_REFERENCES = 3;

// "Via: …" hint for an entity: root queries that return it (by-id lookups first), then up to 3 `Parent.field`
// references (types of the same context first, then by name); at most 5 entries, "…" when some were left out.
// `graph` is a schema-graph index; `typeContexts` maps type names to context ids.
export function entityVia(typeName, { graph, contextId, typeContexts }) {
  const lookup = (entry) => (ENTRY_POINT.test(entry.operation) ? 0 : 1);
  const operations = [...graph.returns(typeName)]
    .sort((a, b) => lookup(a) - lookup(b) || a.operation.localeCompare(b.operation))
    .map((entry) => entry.operation);
  const local = (entry) => (typeContexts.get(entry.parent) === contextId ? 0 : 1);
  const references = [...graph.references(typeName)]
    .sort((a, b) => local(a) - local(b) || a.parent.localeCompare(b.parent) || a.field.localeCompare(b.field))
    .map((entry) => `${entry.parent}.${entry.field}`);
  const all = [...operations, ...references.slice(0, MAX_VIA_REFERENCES)];
  if (!all.length) return '';
  const shown = all.slice(0, MAX_VIA);
  const more = all.length > shown.length || references.length > MAX_VIA_REFERENCES;
  return `Via: ${[...shown, ...(more ? ['…'] : [])].join(', ')}`;
}

function concepts(context) {
  const subsets = context.cdm ?? [];
  return subsets.map((subset) => `[${subset}](${cdmSubsetUrl(subset)})`).join(', ');
}

// How well a CDM class name (`des_Project`) matches an API type name (`DesProject`): 0 same name without the
// underscore, 1 the type ends with the class's local name, 2 otherwise.
export function cdmClassMatch(cdmClass, typeName) {
  const type = typeName.toLowerCase();
  const name = String(cdmClass ?? '').toLowerCase();
  if (name.replace(/[^a-z0-9]/g, '') === type) return 0;
  const local = name.slice(name.lastIndexOf('_') + 1);
  return local && type.endsWith(local) ? 1 : 2;
}

function entityLine(page, entries, siteUrl, via) {
  const ordered = [...entries].sort((a, b) => cdmClassMatch(a.cdmClass, page.name) - cdmClassMatch(b.cdmClass, page.name));
  const described = ordered.map((entry) => {
    let text = entry.title;
    if (entry.description) text += ` — ${firstSentence(entry.description)}`;
    if (entry.grid) text = appendSentence(text, `GRID \`${entry.grid}\``);
    return text;
  });
  return `- [${page.name}](${mdUrl(siteUrl, page)}): ${appendSentence(described.join('; '), via)}`;
}

// `text` followed by the sentence `extra`, with a full stop in between unless `text` already ends one (or was
// truncated with "…").
function appendSentence(text, extra) {
  if (!extra) return text;
  return /[.!?…]$/.test(text) ? `${text} ${extra}` : `${text}. ${extra}`;
}

const section = (title, lines) => (lines.length ? [`## ${title}`, ...lines, ''] : []);
// Relay wrappers: mechanical, and reachable from the entity or operation that returns them.
const RELAY_WRAPPER = /(Connection|Edge)$/;

const livePages = (pages, context) => pages.filter((page) => page.context === context.id && !page.deprecated);
const typeRank = (page) => TYPE_KIND_ORDER.indexOf(page.kind);

// Non-deprecated type and directive pages of the context that are not CDM entities, in kind order.
function otherTypePages(pages, context, cdmIndex) {
  return livePages(pages, context)
    .filter((page) => (page.section === 'types' && !cdmIndex[page.name]) || page.kind === 'directives')
    .sort((a, b) => typeRank(a) - typeRank(b) || a.name.localeCompare(b.name));
}

// Pages listed in /reference/<slug>/types.txt: other types without Relay Connection/Edge objects.
const listedTypePages = (pages, context, cdmIndex) => otherTypePages(pages, context, cdmIndex)
  .filter((page) => !(page.kind === 'objects' && RELAY_WRAPPER.test(page.name)));

// /reference/<slug>/types.txt: one line per non-entity type of the context.
export function renderContextTypes({ context, pages, schema, cdmIndex, siteUrl }) {
  const ctx = { schema, siteUrl };
  const lines = [
    `# ${context.title} — types`,
    `> Types of the ${context.title} bounded context that are not entities, one line each; Relay \`*Connection\` and \`*Edge\` types are omitted. Entities, entry points and operations: [llms.txt](${siteUrl}/reference/${context.slug}/llms.txt).`,
    '',
    ...listedTypePages(pages, context, cdmIndex).map((page) => pageLine(page, ctx)),
  ];
  return `${lines.join('\n').trimEnd()}\n`;
}

// Whether a query returns a list or a Relay connection of CDM entities.
function isEntityList(schema, page, cdmIndex) {
  const field = operationField(schema, 'queries', page.name);
  if (!field) return false;
  const target = fieldTarget(field.type);
  return target.shape !== 'single' && Boolean(cdmIndex[target.name]);
}

// Per-context llms.txt. `pages` is .schema/pages.json; `sliceTokens` / `typesTokens` the size of the context's
// schema slice and types.txt; `graph` a schema-graph index of `schema` (built when omitted).
export function renderContextIndex({ context, pages, schema, cdmIndex, siteUrl, sliceTokens, typesTokens, graph = buildSchemaGraph(schema) }) {
  const mine = livePages(pages, context);
  const operations = (kind) => mine.filter((page) => page.section === 'operations' && page.kind === kind).sort(byName);
  const lookups = operations('queries').filter((page) => ENTRY_POINT.test(page.name));
  const lists = operations('queries').filter((page) => !ENTRY_POINT.test(page.name) && isEntityList(schema, page, cdmIndex));
  const entryNames = new Set([...lookups, ...lists].map((page) => page.name));
  const entities = mine.filter((page) => page.section === 'types' && cdmIndex[page.name]).sort(byName);
  const typeContexts = new Map(pages.filter((page) => page.section === 'types').map((page) => [page.name, page.context]));
  const via = (page) => entityVia(page.name, { graph, contextId: context.id, typeContexts });
  const hasTypes = listedTypePages(pages, context, cdmIndex).length > 0;
  const ctx = { schema, siteUrl };
  const base = `${siteUrl}/reference/${context.slug}`;
  const cdm = concepts(context);

  const lines = [
    `# ${context.title} — Altium Platform API`,
    `> ${context.description}`,
    '',
    [
      cdm ? `Concepts: ${cdm}.` : null,
      `Schema slice: [schema.graphql](${base}/schema.graphql) (~${sliceTokens} tokens).`,
      `Overview: [overview](${base}/overview.md).`,
    ].filter(Boolean).join(' '),
    '',
    ...section('Entities', entities.map((page) => entityLine(page, cdmIndex[page.name], siteUrl, via(page)))),
    ...section('Entry points', [
      ...lookups.map((page) => pageLine(page, ctx)),
      ...lists.map((page) => pageLine(page, ctx, '(list)')),
    ]),
    ...OPERATION_SECTIONS.flatMap(([kind, title]) =>
      section(title, operations(kind).filter((page) => kind !== 'queries' || !entryNames.has(page.name)).map((page) => pageLine(page, ctx)))),
    ...section('Optional', hasTypes
      ? [`- [All types in ${context.title}](${base}/types.txt): one line per type (~${typesTokens} tokens)`]
      : []),
  ];
  return `${lines.join('\n').trimEnd()}\n`;
}

// /reference/deprecated/llms.txt: deprecated operations grouped by context (context-map order).
export function renderDeprecatedIndex({ contexts, pages, schema, siteUrl }) {
  const lines = [
    '# Deprecated — Altium Platform API',
    '> Operations marked @deprecated. They still work; migrate to the replacement named in each reason.',
    '',
  ];
  for (const context of contexts) {
    const mine = pages.filter((page) => page.deprecated && page.context === context.id).sort(byName);
    lines.push(...section(context.title, mine.map((page) => {
      const reason = deprecationReason(schema, page);
      return `${pageLine(page, { schema, siteUrl })}${reason ? ` (deprecated: ${reason.replace(/\s+/g, ' ').trim()})` : ''}`;
    })));
  }
  return `${lines.join('\n').trimEnd()}\n`;
}

// Site root /llms.txt.
export function renderRootIndex({ contexts, guides, siteUrl, schemaTokens, fullTokens }) {
  const bcs = contexts.filter((context) => context.id !== 'common').map((context) => {
    const cdm = concepts(context);
    const flag = context.id === 'renesas-preview' ? ' (preview, Renesas-specific)' : '';
    return `- [${context.title}](${siteUrl}/reference/${context.slug}/llms.txt): ${context.description}${flag}${cdm ? ` (CDM: ${cdm})` : ''}`;
  });
  const common = contexts.find((context) => context.id === 'common');
  const lines = [
    '# Altium Platform API',
    '> GraphQL API for Altium 365 workspace data, organised into bounded contexts aligned with the Common Data Model (CDM).',
    '',
    'How to navigate (for assistants):',
    '1. Pick the bounded context for the task (list below; each links its CDM concepts).',
    "2. Read that context's llms.txt: entities, entry points, operations.",
    '3. Load its schema.graphql slice instead of the full schema.',
    'Conventions: prefer bounded-context queries (`platform.token.byWorkspace`, `requirements.project.byId`) over legacy prefixed ones (`desProjectById`) where both exist; mutations take `input: XInput!` and return `XPayload!`; list fields are Relay connections (`first`/`after`); look up by GRID with `node(id:)`; items marked EXPERIMENTAL are not production-ready. Endpoints are regional; auth is a Bearer token (see Developer Center).',
    '',
    ...section('Bounded contexts', bcs),
    ...section('Guides', guides.map((guide) => `- [${guide.title}](${siteUrl}/${guide.route}.md): ${guide.description}`)),
    ...section('Developer Center', DEVELOPER_CENTER_LINKS.map(([title, url]) => `- [${title}](${url})`)),
    ...section('Optional', [
      ...(common ? [`- [${common.title} types](${siteUrl}/reference/${common.slug}/llms.txt): ${common.description}`] : []),
      `- [Deprecated](${siteUrl}/reference/deprecated/llms.txt): deprecated operations by bounded context`,
      `- [Full schema SDL](${siteUrl}/schema.graphql): ~${schemaTokens} tokens — prefer per-context slices`,
      `- [llms-full.txt](${siteUrl}/llms-full.txt): all guides and reference pages as markdown (~${fullTokens} tokens)`,
    ]),
  ];
  return `${lines.join('\n').trimEnd()}\n`;
}

export { estimateTokens };
