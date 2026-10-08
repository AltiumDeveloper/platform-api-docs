// Type-page section order, applied through graphql-markdown's `beforeComposePageTypeHook`.
//
// printer-legacy composes a page from sections (tags, description, code, metadata, example, relations plus
// decorators). `metadata` bundles the member sections (Fields + Interfaces, Arguments + Type, Values, ...)
// and `relations` is one markdown string holding "Returned By", "Member Of" and "Implemented By". The hook
// splits both into individual sections (`metadata:<Title>`, `relations:<Title>`) and orders the page as:
// everything before the SDL code block (badges, Experimental callout, description, Common Data Model),
// Returned By, Member Of, Interfaces, Implemented By, the SDL code block, the remaining member sections,
// then the rest (example, directives).
//
// When the page has a primary member section (Fields, Arguments or Values), the SDL code block and that section
// are wrapped in a two-column container (`ref-split`): the DOM keeps the SDL first and the members second (so
// Markdown twins read in a stable order) and the stylesheet puts the SDL on the right, sticky, on wide screens.
// On operation pages the return Type comes before the Arguments, outside the container.

const LEAD = ['relations:Returned By', 'relations:Member Of', 'metadata:Interfaces', 'relations:Implemented By'];

function splitMetadata(sections) {
  const metadata = sections.metadata;
  if (!metadata) return [];
  let entries = null;
  if (Array.isArray(metadata.content)) entries = metadata.content;
  else if (typeof metadata.title === 'string' && metadata.title) entries = [metadata];
  if (!entries || entries.some((entry) => !entry || typeof entry.title !== 'string' || !entry.title)) {
    return ['metadata'];
  }
  return entries.map((entry) => {
    const key = `metadata:${entry.title}`;
    sections[key] = entry;
    return key;
  });
}

function splitRelations(sections) {
  const content = sections.relations?.content;
  if (typeof content !== 'string' || !content.trim()) return [];
  const pieces = content.split(/^(?=### )/m).map((piece) => piece.trim()).filter(Boolean);
  if (!pieces.every((piece) => piece.startsWith('### '))) return ['relations'];
  return pieces.map((piece) => {
    const key = `relations:${piece.split('\n', 1)[0].slice(4).trim()}`;
    sections[key] = { content: piece };
    return key;
  });
}

// Mutates `sections` (adds the split sections) and returns the new section order.
function reorderTypePageSections(sections, order) {
  const members = splitMetadata(sections);
  const relations = splitRelations(sections);
  const base = order.filter((key) => key !== 'metadata' && key !== 'relations');
  const codeIndex = base.indexOf('code');
  const head = codeIndex === -1 ? base : base.slice(0, codeIndex);
  const rest = codeIndex === -1 ? [] : base.slice(codeIndex + 1);
  const code = codeIndex === -1 ? [] : ['code'];
  const split = new Set([...members, ...relations]);
  const lead = LEAD.filter((key) => split.has(key));
  const remaining = [...members, ...relations].filter((key) => !lead.includes(key));
  const primary = SPLIT_MEMBERS.find((key) => remaining.includes(key));
  if (code.length && primary) {
    for (const [key, content] of Object.entries(SPLIT)) sections[key] = { content };
    const typeFirst = primary === 'metadata:Arguments' && remaining.includes('metadata:Type') ? ['metadata:Type'] : [];
    const others = remaining.filter((key) => key !== primary && !typeFirst.includes(key));
    return [...head, ...lead, ...typeFirst, 'split:open', 'code', 'split:mid', primary, 'split:close', ...others, ...rest];
  }
  return [...head, ...lead, ...code, ...remaining, ...rest];
}

const SPLIT_MEMBERS = ['metadata:Fields', 'metadata:Arguments', 'metadata:Values'];

// Raw MDX for the wrapper elements; blank lines keep the markdown inside parsed as markdown.
const SPLIT = {
  'split:open': '<div className="ref-split">\n\n<div className="ref-split__code">\n',
  'split:mid': '</div>\n\n<div className="ref-split__fields">\n',
  'split:close': '</div>\n\n</div>\n',
};

// Never breaks page generation: a malformed event (or any error while reordering) leaves the default order.
function beforeComposePageTypeHook(event) {
  try {
    const sections = event?.data?.sections;
    if (!Array.isArray(event?.output) || !sections || typeof sections !== 'object') return;
    event.output = reorderTypePageSections(sections, event.output);
  } catch (error) {
    let name;
    try {
      name = event?.data?.name ?? event?.data?.type?.name;
    } catch {
      name = undefined;
    }
    console.warn(`page-sections: keeping default section order${name ? ` for ${name}` : ''}: ${error?.message ?? error}`);
  }
}

module.exports = { reorderTypePageSections, beforeComposePageTypeHook };
