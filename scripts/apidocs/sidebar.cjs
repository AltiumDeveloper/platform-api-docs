// Sidebar for docs/reference: BC first (in context-map order), Operations/Types level flattened,
// BC overview page as category link, experimental docs marked with the `sidebar-exp` class.
const { existsSync, readFileSync } = require('node:fs');

const MANIFEST = '.schema/manifest.json';
const PAGES = '.schema/pages.json';

const docIdsIn = (item) => {
  if (item.type === 'doc') return [item.id];
  if (item.type === 'category') return item.items.flatMap(docIdsIn);
  return [];
};
const contextSlugOf = (item, index = 1) => docIdsIn(item)[0]?.split('/')[index];
const isDeprecatedGroup = (item) => item.type === 'category' && contextSlugOf(item) === 'deprecated';

function markExperimental(item, experimentalDocIds) {
  if (item.type === 'doc' && experimentalDocIds.has(item.id)) {
    return { ...item, className: [item.className, 'sidebar-exp'].filter(Boolean).join(' ') };
  }
  if (item.type === 'category') {
    return { ...item, items: item.items.map((child) => markExperimental(child, experimentalDocIds)) };
  }
  return item;
}

function flattenKinds(items) {
  const flat = items.flatMap((item) => (item.type === 'category' ? item.items : [item]));
  const labels = flat.filter((item) => item.type === 'category').map((item) => item.label);
  return new Set(labels).size === labels.length ? flat : items;
}

// Relabels/orders BC categories whose doc ids carry the BC slug at `slugIndex`
// (1 for reference/<bc>/..., 2 for reference/deprecated/<bc>/...).
function regroupContexts(items, { contexts, experimentalDocIds, slugIndex = 1, deprecated = false }) {
  const bySlug = new Map(contexts.map((context) => [context.slug, context]));
  const order = new Map(contexts.map((context, index) => [context.slug, index]));
  const regrouped = items.map((item) => {
    if (item.type !== 'category') return item;
    const slug = contextSlugOf(item, slugIndex);
    const context = bySlug.get(slug);
    if (!context) return item;
    const overviewId = `reference/${slug}/overview`;
    const children = deprecated ? item.items : item.items.filter((child) => !(child.type === 'doc' && child.id === overviewId));
    const hasOverview = children.length !== item.items.length;
    return {
      ...item,
      label: context.title,
      collapsible: true,
      collapsed: deprecated ? true : context.collapsed,
      ...(hasOverview ? { link: { type: 'doc', id: overviewId } } : {}),
      items: flattenKinds(children).map((child) => markExperimental(child, experimentalDocIds)),
    };
  });
  const rank = (item) => order.get(contextSlugOf(item, slugIndex)) ?? Number.MAX_SAFE_INTEGER;
  return [...regrouped].sort((a, b) => rank(a) - rank(b));
}

function regroupReference(items, { contexts, experimentalDocIds }) {
  const regular = items.filter((item) => !isDeprecatedGroup(item));
  const deprecatedGroups = items.filter(isDeprecatedGroup).map((group) => ({
    ...group,
    label: 'Deprecated',
    collapsible: true,
    collapsed: true,
    items: regroupContexts(group.items, { contexts, experimentalDocIds, slugIndex: 2, deprecated: true }),
  }));
  return [...regroupContexts(regular, { contexts, experimentalDocIds }), ...deprecatedGroups];
}

async function sidebarItemsGenerator({ defaultSidebarItemsGenerator, ...args }) {
  const items = await defaultSidebarItemsGenerator(args);
  if (args.item.dirName !== 'reference' || !existsSync(MANIFEST)) return items;
  const manifest = JSON.parse(readFileSync(MANIFEST, 'utf8'));
  const pages = existsSync(PAGES) ? JSON.parse(readFileSync(PAGES, 'utf8')) : [];
  const experimentalDocIds = new Set(pages.filter((page) => page.experimental).map((page) => page.docId));
  return regroupReference(items, { contexts: manifest.contexts, experimentalDocIds });
}

module.exports = { sidebarItemsGenerator, regroupReference };
