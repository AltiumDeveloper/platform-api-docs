// Type-page section order, applied through graphql-markdown's `beforeComposePageTypeHook`.
//
// printer-legacy composes a page from sections (tags, description, code, metadata, example, relations plus
// decorators). `metadata` bundles the member sections (Fields + Interfaces, Arguments + Type, Values, ...)
// and `relations` is one markdown string holding "Returned By", "Member Of" and "Implemented By". The hook
// splits both into individual sections (`metadata:<Title>`, `relations:<Title>`) and orders the page as:
// everything before the SDL code block (badges, Experimental callout, description, Common Data Model),
// Returned By, Member Of, Interfaces, Implemented By, the remaining member sections, then the rest
// (SDL code block, example, directives).

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
  const rest = codeIndex === -1 ? [] : base.slice(codeIndex);
  const split = new Set([...members, ...relations]);
  const lead = LEAD.filter((key) => split.has(key));
  const remaining = [...members, ...relations].filter((key) => !lead.includes(key));
  return [...head, ...lead, ...remaining, ...rest];
}

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
