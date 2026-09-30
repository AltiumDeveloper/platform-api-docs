// Built Docusaurus page (HTML) → clean Markdown for coding assistants.
// rehype-parse → rehypeDocusaurusCleanup (below) → rehype-remark → remark-gfm → remark-stringify.
import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeRemark from 'rehype-remark';
import remarkGfm from 'remark-gfm';
import remarkStringify from 'remark-stringify';
import { select, selectAll } from 'hast-util-select';
import { toText } from 'hast-util-to-text';

// Docusaurus renders the page body into `article .theme-doc-markdown`; breadcrumbs, TOC, pagination,
// footer and the comments block live outside it.
const ARTICLE_SELECTORS = ['article .theme-doc-markdown', '.theme-doc-markdown'];
const DROP_TAGS = new Set(['svg', 'button', 'script', 'style', 'noscript', 'nav', 'footer']);
const DROP_CLASSES = ['hash-link', 'theme-doc-breadcrumbs', 'theme-doc-toc-mobile', 'theme-doc-toc-desktop',
  'table-of-contents', 'pagination-nav', 'theme-doc-footer', 'theme-edit-this-page', 'theme-last-updated'];
// Lifecycle badges become **TEXT**; type/relation/context badges stay as plain words.
const STRONG_BADGES = ['badge--warning', 'badge--deprecated', 'badge--danger'];
const HEADING = /^h[1-6]$/;
const HAS_EXTENSION = /\.[a-z0-9]+$/i;

const text = (value) => ({ type: 'text', value });
const element = (tagName, properties, children) => ({ type: 'element', tagName, properties, children });
const classesOf = (node) => [node.properties?.className ?? []].flat().map(String);
const hasClass = (node, name) => classesOf(node).includes(name);
const capitalize = (value) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

// Site route ('' for home, 'reference/design/overview', ...) → .md path relative to the build directory.
export function markdownFileFor(route) {
  const clean = route.replace(/^\/+|\/+$/g, '');
  return clean === '' ? 'index.md' : `${clean}.md`;
}

// Internal page links → absolute .md URLs (fragment kept); internal files with an extension
// (/schema.graphql, images) → absolute URLs; external and non-http links unchanged.
export function rewriteHref(href, { route, siteUrl }) {
  if (!href) return href;
  const site = new URL(`${siteUrl}/`);
  let resolved;
  try {
    resolved = new URL(href, new URL(route.replace(/^\/+/, ''), site));
  } catch {
    return href;
  }
  const base = site.pathname;
  const inside = resolved.pathname === base.slice(0, -1) || resolved.pathname.startsWith(base);
  if (resolved.origin !== site.origin || !inside) return href;
  const path = resolved.pathname.slice(base.length);
  if (HAS_EXTENSION.test(path)) return `${siteUrl}/${path}${resolved.hash}`;
  return `${siteUrl}/${markdownFileFor(path)}${resolved.hash}`;
}

function languageOf(node) {
  const own = classesOf(node).find((name) => name.startsWith('language-'));
  if (own) return own.slice('language-'.length);
  const inner = select('[class*="language-"]', node);
  return inner ? languageOf(inner) : null;
}

// Prism renders one `.token-line` div per line (with a trailing <br>): rebuild plain `pre > code.language-x`.
function codeBlock(node) {
  const pre = node.tagName === 'pre' ? node : select('pre', node);
  if (!pre) return [];
  const lines = selectAll('.token-line', pre);
  const value = lines.length
    ? lines.map((line) => toText(line, { whitespace: 'pre' }).replace(/\n$/, '')).join('\n')
    : toText(pre, { whitespace: 'pre' });
  const lang = languageOf(node);
  return [element('pre', {}, [element('code', { className: lang ? [`language-${lang}`] : [] }, [text(value.replace(/\n+$/, ''))])])];
}

// `:::caution` etc. → `> **Caution:** first paragraph …`.
function admonition(node, ctx) {
  const heading = select('[class*="admonitionHeading"]', node);
  const content = select('[class*="admonitionContent"]', node);
  const label = capitalize((heading ? toText(heading) : '').trim() || 'Note');
  const children = content ? content.children.flatMap((child) => clean(child, ctx)) : [];
  const lead = [element('strong', {}, [text(`${label}:`)]), text(' ')];
  const first = children.find((child) => child.type === 'element');
  if (first && first.tagName === 'p') first.children = [...lead, ...first.children];
  else children.unshift(element('p', {}, lead));
  return [element('blockquote', {}, children)];
}

// graphql-markdown's collapsed "Show deprecated" group → a "Deprecated" heading followed by its content.
function details(node, ctx) {
  const body = node.children.filter((child) => !(child.type === 'element' && child.tagName === 'summary'));
  return [element('h4', {}, [text('Deprecated')]), ...body.flatMap((child) => clean(child, ctx))];
}

function badge(node) {
  const label = toText(node).trim();
  if (!label) return [];
  if (STRONG_BADGES.some((name) => hasClass(node, name))) {
    return [text(' '), element('strong', {}, [text(label.toUpperCase())]), text(' ')];
  }
  return [text(` ${label} `)];
}

const NO_DESCRIPTION = 'No description';

// graphql-markdown escapes some characters in descriptions as numeric entities (`_` → `&#x005F;`), and the page
// then escapes the `&`, so links (autolinks in particular) keep a literal `&#x005F;`: decode those.
export const decodeNumericEntities = (value) => value
  .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(Number.parseInt(hex, 16)))
  .replace(/&#([0-9]+);/g, (_, decimal) => String.fromCodePoint(Number.parseInt(decimal, 10)));

function decodeTextEntities(node) {
  if (node.type === 'text') return { ...node, value: decodeNumericEntities(node.value) };
  if (node.children) return { ...node, children: node.children.map(decodeTextEntities) };
  return node;
}

// graphql-markdown separates items with a small ` ● ` span.
const isSeparator = (node) => node.tagName === 'span' && /font-size:\s*\.5em/.test(String(node.properties?.style ?? ''));

// Returns the replacement nodes for `node` (possibly none).
function clean(node, ctx) {
  if (node.type === 'comment' || node.type === 'doctype') return [];
  if (node.type !== 'element') return [node];
  if (DROP_TAGS.has(node.tagName) || DROP_CLASSES.some((name) => hasClass(node, name))) return [];
  if (node.tagName === 'details') return details(node, ctx);
  if (hasClass(node, 'theme-admonition')) return admonition(node, ctx);
  if (hasClass(node, 'theme-code-block') || node.tagName === 'pre') return codeBlock(node);
  if (hasClass(node, 'badge')) return badge(node);
  if (isSeparator(node)) return [text(' · ')];
  // graphql-markdown's "No description" placeholder carries no information.
  if (node.tagName === 'p' && toText(node).trim() === NO_DESCRIPTION) return [];
  if (node.tagName === 'a') {
    const href = decodeNumericEntities(String(node.properties?.href ?? ''));
    const children = node.children.flatMap((child) => clean(child, ctx)).map(decodeTextEntities);
    // Self-links on member headings (`#name`) add nothing in Markdown.
    if (ctx.inHeading && href.startsWith('#')) return children;
    return [{ ...node, properties: { href: rewriteHref(href, ctx) }, children }];
  }
  if (node.tagName === 'img') {
    return [{ ...node, properties: { src: rewriteHref(String(node.properties?.src ?? ''), ctx), alt: node.properties?.alt ?? '' } }];
  }
  const inner = HEADING.test(node.tagName) ? { ...ctx, inHeading: true } : ctx;
  return [{ ...node, children: node.children.flatMap((child) => clean(child, inner)) }];
}

function rehypeDocusaurusCleanup(ctx) {
  return (tree) => {
    const article = ARTICLE_SELECTORS.map((selector) => select(selector, tree)).find(Boolean);
    if (!article) throw new Error(`html-to-md: no .theme-doc-markdown content in /${ctx.route}`);
    const h1 = select('h1', article);
    const title = select('title', tree);
    ctx.title = h1 ? toText(h1).trim() : (title ? toText(title).replace(/\s*\|.*$/, '').trim() : '');
    tree.children = clean(article, ctx);
  };
}

export function renderFrontMatter(fields) {
  const lines = Object.entries(fields).map(([key, value]) => `${key}: ${typeof value === 'string' ? JSON.stringify(value) : value}`);
  return `---\n${lines.join('\n')}\n---\n`;
}

// html: a built page; route: '' | 'reference/…' | 'guides/…'; siteUrl: absolute site URL without trailing slash;
// meta: extra front-matter fields (bounded_context, kind, experimental, deprecated), written after title and url.
export function htmlToMarkdown(html, { route, siteUrl, meta = {} }) {
  const ctx = { route, siteUrl, inHeading: false, title: '' };
  const body = String(unified()
    .use(rehypeParse)
    .use(rehypeDocusaurusCleanup, ctx)
    .use(rehypeRemark)
    .use(remarkGfm, { tablePipeAlign: false })
    .use(remarkStringify, { bullet: '-', fences: true, rule: '-', emphasis: '_', strong: '*', listItemIndent: 'one' })
    .processSync(html));
  const url = route ? `${siteUrl}/${route}` : `${siteUrl}/`;
  return `${renderFrontMatter({ title: ctx.title, url, ...meta })}\n${body.trim()}\n`;
}
