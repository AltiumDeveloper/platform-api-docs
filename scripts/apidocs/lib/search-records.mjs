// Search records for src/search/engine.mjs, built from the schema rather than from rendered pages: one per operation,
// type, field, input field and enum value, plus guide sections and bounded-context overviews.
//
// Record shape (short keys keep the index small): i id (= array index), n name, k kind (engine KINDS), p parent type
// (members), c context index (into `contexts`), u url (without baseUrl), d description, s signature, t page title
// (guides), f flags (FLAG_EXPERIMENTAL | FLAG_DEPRECATED), r deprecation reason.
//
// URLs come from what graphql-markdown generated: pages from .schema/pages.json, member anchors from the
// `{/* #anchor */}` headings of the generated type pages, so search links can't drift from the site.
import { existsSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join } from 'node:path';
import {
  getNamedType, isEnumType, isInputObjectType, isInterfaceType, isObjectType, isUnionType,
} from 'graphql';
import { FLAG_DEPRECATED, FLAG_EXPERIMENTAL } from '../../../src/search/engine.mjs';

const require = createRequire(import.meta.url);
const GithubSlugger = require('github-slugger');

const PAGE_KINDS = {
  queries: 'query', mutations: 'mutation', subscriptions: 'subscription', objects: 'object', inputs: 'input',
  enums: 'enum', interfaces: 'interface', unions: 'union', scalars: 'scalar', directives: 'directive',
};
const ROOTS = { query: 'getQueryType', mutation: 'getMutationType', subscription: 'getSubscriptionType' };
// Descriptions are indexed up to these lengths (the full text is on the page); they are most of the index size.
const DESCRIPTION_LIMIT = 600;
const MEMBER_DESCRIPTION_LIMIT = 300;
const REASON_LIMIT = 160;
const GUIDE_TEXT_LIMIT = 1500;

const hasDirective = (node, name) => Boolean(node?.directives?.some((directive) => directive.name.value === name));

// Plain text of an SDL description: no markdown emphasis, links or the literal "**Experimental**" lead
// (the flag says it), whitespace collapsed.
export function plainDescription(text, limit = DESCRIPTION_LIMIT) {
  if (!text) return '';
  const plain = text
    .replace(/^\s*\*\*Experimental\*\*[.:]?\s*/i, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_`]+/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return plain.length > limit ? `${plain.slice(0, limit - 1).trimEnd()}…` : plain;
}

// `(id: ID!, first: Int, …): DesProject`
function signature(field) {
  const args = field.args ?? [];
  const shown = args.slice(0, 3).map((arg) => `${arg.name}: ${arg.type}`);
  if (args.length > 3) shown.push('…');
  return `${shown.length ? `(${shown.join(', ')})` : ''}: ${field.type}`;
}

// Field / enum value name → anchor, read from the level-4 member headings of a generated type page. graphql-markdown
// MDX-escapes some characters in names as numeric entities (`IN&#x005F;PROGRESS`), so headings are decoded first.
// The `Type.` prefix before <b> is normally stripped by postprocess, but survives on names it does not recognise.
const MEMBER_HEADING = /^#### \[<code[^>]*>[^<]*<b>([^<]+)<\/b><\/code>\]\(#([^)\s]+)\)/gm;
const decodeEntities = (text) => text
  .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
  .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)));
export function memberAnchors(mdx) {
  const anchors = new Map();
  for (const [, raw, anchor] of mdx.matchAll(MEMBER_HEADING)) {
    const name = decodeEntities(raw);
    if (!anchors.has(name)) anchors.set(name, anchor);
  }
  return anchors;
}

function resolveOperation(schema, kind, name) {
  let parent = schema[ROOTS[kind]]?.();
  let field = null;
  for (const segment of name.split('.')) {
    field = parent?.getFields?.()[segment] ?? null;
    if (!field) return null;
    parent = getNamedType(field.type);
  }
  return field;
}

/**
 * @param {{schema: import('graphql').GraphQLSchema, manifest: object, pages: object[], docsDir: string,
 *   guides: {route: string, title: string, path: string}[], config?: {prefixes?: string[],
 *   synonyms?: {match: string, add: string}[], contextWeights?: Record<string, number>}}} input
 * `config` is config/search.yaml; it is passed through to the engine in the payload.
 */
export function buildSearchRecords({ schema, manifest, pages, docsDir, guides = [], config = {} }) {
  const weights = config.contextWeights ?? {};
  const contexts = manifest.contexts.map(({ id, title, slug }) => ({ id, title, slug, ...(weights[id] ? { weight: weights[id] } : {}) }));
  for (const { match } of config.synonyms ?? []) new RegExp(match, 'i'); // fail the build on an invalid pattern
  // Deprecation reason, shown in the result ("Use desProjectById.").
  const reason = (item) => (item?.deprecationReason != null ? plainDescription(item.deprecationReason, REASON_LIMIT) || 'Deprecated.' : undefined);
  const contextIndex = new Map(contexts.map((context, index) => [context.id, index]));
  const records = [];
  const add = (record) => {
    const clean = Object.fromEntries(Object.entries(record).filter(([key, value]) => value !== undefined && value !== ''
      && !(key === 'f' && value === 0)));
    records.push({ i: records.length, ...clean });
  };

  for (const page of pages) {
    const kind = PAGE_KINDS[page.kind];
    if (!kind) continue;
    const c = contextIndex.get(page.context);
    const pageFlags = (page.experimental ? FLAG_EXPERIMENTAL : 0) | (page.deprecated ? FLAG_DEPRECATED : 0);

    if (page.section === 'operations' && ROOTS[kind]) {
      const field = resolveOperation(schema, kind, page.name);
      const deprecated = field?.deprecationReason != null ? FLAG_DEPRECATED : 0;
      add({
        n: page.name, k: kind, c, u: page.url, d: plainDescription(field?.description), s: field ? signature(field) : undefined,
        f: pageFlags | deprecated, r: reason(field),
      });
      continue;
    }
    if (kind === 'directive') {
      const directive = schema.getDirective(page.name);
      add({ n: `@${page.name}`, k: kind, c, u: page.url, d: plainDescription(directive?.description), f: pageFlags });
      continue;
    }

    const type = schema.getType(page.name);
    let s;
    if (isUnionType(type)) s = `= ${type.getTypes().map((member) => member.name).join(' | ')}`;
    else if ((isObjectType(type) || isInterfaceType(type)) && type.getInterfaces().length) {
      s = `implements ${type.getInterfaces().map((iface) => iface.name).join(' & ')}`;
    }
    add({ n: page.name, k: kind, c, u: page.url, d: plainDescription(type?.description), s, f: pageFlags });
    if (!type) continue;

    const file = [join(docsDir, `${page.docId}.mdx`), join(docsDir, `${page.docId}.md`)].find(existsSync);
    const anchors = file ? memberAnchors(readFileSync(file, 'utf8')) : new Map();
    const memberUrl = (name) => (anchors.has(name) ? `${page.url}#${anchors.get(name)}` : page.url);

    if (isObjectType(type) || isInterfaceType(type) || isInputObjectType(type)) {
      const memberKind = isInputObjectType(type) ? 'inputField' : 'field';
      for (const field of Object.values(type.getFields())) {
        const flags = pageFlags
          | (field.deprecationReason != null ? FLAG_DEPRECATED : 0)
          | (hasDirective(field.astNode, 'experimental') ? FLAG_EXPERIMENTAL : 0);
        add({
          n: field.name, k: memberKind, p: type.name, c, u: memberUrl(field.name),
          d: plainDescription(field.description, MEMBER_DESCRIPTION_LIMIT), s: memberKind === 'field' ? signature(field) : `: ${field.type}`,
          f: flags, r: reason(field),
        });
      }
    } else if (isEnumType(type)) {
      for (const value of type.getValues()) {
        const flags = pageFlags | (value.deprecationReason != null ? FLAG_DEPRECATED : 0);
        add({
          n: value.name, k: 'enumValue', p: type.name, c, u: memberUrl(value.name),
          d: plainDescription(value.description, MEMBER_DESCRIPTION_LIMIT), f: flags, r: reason(value),
        });
      }
    }
  }

  for (const [c, context] of manifest.contexts.entries()) {
    add({ n: context.title, k: 'overview', c, u: `/reference/${context.slug}/overview`, d: plainDescription(context.description, 400) });
  }
  for (const guide of guides) {
    for (const section of guideSections(readFileSync(guide.path, 'utf8'))) {
      const url = `/${guide.route}${section.anchor ? `#${section.anchor}` : ''}`.replace(/^\/+$/, '/');
      add({ n: section.heading ?? guide.title, k: 'guide', t: guide.title, u: url, d: section.text });
    }
  }
  return { contexts, prefixes: config.prefixes ?? [], synonyms: config.synonyms ?? [], records };
}

const stripMarkdown = (text) => text
  .replace(/^\s*(import|export)\s.*$/gm, '')
  .replace(/^\s*(```|~~~).*$/gm, '')
  .replace(/<[^>\n]+>/g, ' ')
  .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
  .replace(/^\s*[-*+>|]\s?/gm, '')
  .replace(/(?:^|\s):?-{3,}:?(?=\s|$)/g, ' ')
  .replace(/[|*_`#]+/g, ' ')
  .replace(/\{\/\*.*?\*\/\}/g, '')
  .replace(/\s+/g, ' ')
  .trim();

const EXPLICIT_ID = /\s*\{#([^}]+)\}\s*$/;

// A guide split at its `##` / `###` headings. The text before the first heading belongs to the page itself
// (heading null, no anchor). Anchors follow Docusaurus: an explicit `{#id}`, else github-slugger of the plain text.
export function guideSections(source) {
  const body = source.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '');
  const slugger = new GithubSlugger();
  const sections = [{ heading: null, anchor: null, lines: [] }];
  let fenced = false;
  for (const line of body.split('\n')) {
    if (/^\s*(```|~~~)/.test(line)) fenced = !fenced;
    const match = fenced ? null : /^(#{2,3})\s+(.+?)\s*$/.exec(line);
    if (!match) {
      sections.at(-1).lines.push(line);
      continue;
    }
    const explicit = EXPLICIT_ID.exec(match[2]);
    const heading = stripMarkdown(match[2].replace(EXPLICIT_ID, ''));
    sections.push({ heading, anchor: explicit ? explicit[1] : slugger.slug(heading), lines: [] });
  }
  return sections
    .map(({ heading, anchor, lines }) => {
      const text = stripMarkdown(lines.join('\n'));
      return { heading, anchor, text: text.length > GUIDE_TEXT_LIMIT ? `${text.slice(0, GUIDE_TEXT_LIMIT)}…` : text };
    })
    .filter((section) => section.heading || section.text);
}
