// Schema-aware search engine shared by the browser (src/theme/SearchBar), the index build
// (scripts/apidocs/search-index.mjs) and the ranking eval (scripts/apidocs/search-eval.mjs).
//
// Records come from the schema, not from rendered HTML: one per operation, type, field, input field, enum value,
// guide section and bounded-context overview. MiniSearch finds candidates (BM25 over boosted fields); `search` then
// re-ranks them with explicit API-reference rules — an exact name beats a prefix beats a word match, operations and
// types beat members, deprecated items sink — so a type named like the query never drowns among the fields that share
// a word with it.
import MiniSearch from 'minisearch';

// Record kinds, in the order of the UI tabs. `group` drives the tabs; `weight` is the kind's prior.
export const KINDS = {
  query: { label: 'Query', group: 'operations', weight: 1.5 },
  mutation: { label: 'Mutation', group: 'operations', weight: 1.4 },
  subscription: { label: 'Subscription', group: 'operations', weight: 1.3 },
  object: { label: 'Object', group: 'types', weight: 1.4 },
  interface: { label: 'Interface', group: 'types', weight: 1.4 },
  union: { label: 'Union', group: 'types', weight: 1.2 },
  input: { label: 'Input', group: 'types', weight: 1.0 },
  enum: { label: 'Enum', group: 'types', weight: 1.1 },
  scalar: { label: 'Scalar', group: 'types', weight: 0.8 },
  directive: { label: 'Directive', group: 'types', weight: 0.6 },
  field: { label: 'Field', group: 'fields', weight: 0.45 },
  inputField: { label: 'Input field', group: 'fields', weight: 0.3 },
  enumValue: { label: 'Enum value', group: 'fields', weight: 0.35 },
  overview: { label: 'Context', group: 'guides', weight: 1.6 },
  guide: { label: 'Guide', group: 'guides', weight: 1.2 },
};

export const GROUPS = [
  { id: 'all', label: 'All' },
  { id: 'operations', label: 'Operations' },
  { id: 'types', label: 'Types' },
  { id: 'fields', label: 'Fields' },
  { id: 'guides', label: 'Guides' },
];

export const FLAG_EXPERIMENTAL = 1;
export const FLAG_DEPRECATED = 2;

const MEMBER_KINDS = new Set(['field', 'inputField', 'enumValue']);
export const isMember = (kind) => MEMBER_KINDS.has(kind);

// Splits an identifier into its words: `desProjectById` → des project by id, `BOMItem_v2` → bom item v 2,
// `design.project.byId` → design project by id.
export function identifierWords(identifier) {
  return identifier
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    .replace(/([a-zA-Z])([0-9])/g, '$1 $2')
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(Boolean);
}

const WORD = /[A-Za-z0-9_][\w.]*[A-Za-z0-9_]|[A-Za-z0-9]/g;

// Every word becomes its lower-cased self (identifiers stay whole, `desProjectById` → `desprojectbyid`) plus its parts,
// so a query matches either the whole name or any word in it. Used for both indexing and querying.
// Names also get their suffixes at word boundaries (`desComponentType` → `componenttype`): type and operation names
// start with a context prefix (`Des`, `bom`, `sup`, …) that readers rarely type, so without them a prefix query
// ("componentTy") would only ever complete field names, which have no prefix.
export function tokenize(text, fieldName) {
  const tokens = [];
  for (const word of String(text ?? '').match(WORD) ?? []) {
    const whole = word.toLowerCase();
    tokens.push(whole);
    const parts = identifierWords(word);
    if (parts.length > 1 || parts[0] !== whole) tokens.push(...parts);
    if (fieldName === 'name') for (let k = 1; k < parts.length - 1; k += 1) tokens.push(parts.slice(k).join(''));
  }
  return tokens;
}

const STOP_WORDS = new Set(['a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'can', 'do', 'does', 'for', 'from', 'how',
  'i', 'in', 'is', 'it', 'my', 'of', 'on', 'or', 'that', 'the', 'this', 'to', 'what', 'which', 'with']);

export const isStopWord = (word) => STOP_WORDS.has(word);

// Stop words are dropped from prose only: in names, `by` (`desProjectById`) and `of` are meaningful. Queries drop
// them only when they are phrases ("how to page a connection"), not names.
const processTerm = (term, fieldName) => (fieldName === 'text' && STOP_WORDS.has(term) ? null : term);

const FIELDS = ['name', 'parent', 'title', 'text'];
// The parent type only qualifies a member ("DesProject name"): weighted high, every field of DesComponent would
// match "component" twice and outrank DesComponent itself.
const BOOST = { name: 6, parent: 0.3, title: 4, text: 1 };

export function createIndex(records) {
  const index = new MiniSearch({
    idField: 'i',
    fields: FIELDS,
    storeFields: [],
    tokenize,
    processTerm,
    extractField: (record, field) => {
      switch (field) {
        case 'i': return record.i;
        case 'name': return record.n;
        case 'parent': return record.p ?? '';
        case 'title': return record.t ?? '';
        case 'text': return record.d ?? '';
        default: return undefined;
      }
    },
  });
  index.addAll(records);
  return index;
}

const normalise = (text) => String(text ?? '').toLowerCase().replace(/[^a-z0-9]/g, '');

// How strongly the record's name answers the query as a whole. Members get smaller bonuses: hundreds of types have an
// `id` or a `name`, and none of those should outrank the type called that.
function nameBonus(record, query, prefixes) {
  const q = normalise(query);
  if (!q) return 1;
  const member = isMember(record.k);
  const name = normalise(record.n);
  const qualified = record.p ? normalise(`${record.p}${record.n}`) : null;
  if (name === q) return member ? 3 : 12;
  if (qualified === q) return 12; // `DesProject.name`
  if (!member && coreWords(record, prefixes).join('') === q) return 6; // "component" → DesComponent, "project by id" → desProjectById
  const leaf = record.n.includes('.') ? normalise(record.n.split('.').at(-1)) : null;
  if (leaf === q) return 4; // `byId` → every `*.byId`
  // Typed-ahead name: the closer the prefix is to the whole name, the better (`DesComp` → DesComponent before
  // DesComponentParameter).
  if (q.length >= 3 && name.startsWith(q)) return member ? 1.4 : 1.5 + 4.5 * (q.length / name.length);
  if (qualified && q.length >= 3 && qualified.startsWith(q)) return 3;
  return 1;
}

// Share of the name's words that the query accounts for: for "project by id", `desProjectById` (3 of 4) is a better
// answer than `supSoftwareProjectEvalKitCompatibleSoftwareProjectIdsByEvalKitId` (4 of 12), which BM25 alone prefers
// because it repeats the words.
const coreWordsCache = new WeakMap();

// The words of a name without its leading context prefix: `DesComponent` → component, `platform.token.byId` →
// token by id. A one-word name keeps its word (`Bom`).
function coreWords(record, prefixes) {
  let words = coreWordsCache.get(record);
  if (!words) {
    words = identifierWords(record.n);
    if (words.length > 1 && prefixes.has(words[0])) words = words.slice(1);
    coreWordsCache.set(record, words);
  }
  return words;
}

function nameFit(record, queryParts, prefixes) {
  const nameWords = coreWords(record, prefixes);
  if (!nameWords.length) return 1;
  const fit = nameWords.filter((word) => queryParts.some((part) => word.startsWith(part))).length / nameWords.length;
  return 0.35 + 0.65 * fit;
}

// Common phrasings that never appear in names: the query is extended with the identifier word.
const SYNONYMS = [
  [/\bbills? of materials?\b/, 'bom'],
  [/\bmanufacturer part numbers?\b/, 'mpn'],
  [/\bprinted circuit boards?\b/, 'pcb'],
  [/\b(?:design rule check|drc)\b/, 'rule check'],
  [/\bpaging\b|\bpaginat\w*\b/, 'pagination connection'],
];

// → the identifier words the query stands for ("bill of materials" → ['bom']); empty when none applies.
export function synonymsOf(query) {
  const lower = query.toLowerCase();
  return SYNONYMS.filter(([pattern, word]) => pattern.test(lower) && !lower.includes(word)).map(([, word]) => word);
}

// Share of the query's words that the record actually contains (in any field). BM25 already rewards it, but a single
// rare word in a long description can still beat a name that contains two of three words; squaring keeps partial
// matches below complete ones.
function coverage(record, words) {
  if (words.length < 2) return 1;
  const haystack = `${normalise(record.n)} ${normalise(record.p)} ${(record.t ?? '').toLowerCase()} ${(record.d ?? '').toLowerCase()}`;
  const hits = words.filter((word) => haystack.includes(word)).length;
  return (hits / words.length) ** 2;
}

/**
 * @param {MiniSearch} index from createIndex
 * @param {object[]} records the same records, indexed by their `i`
 * @param {string} query
 * @param {{group?: string, context?: number|null, includeDeprecated?: boolean, currentContext?: number|null,
 *   limit?: number}} options
 */
export function search(index, records, query, options = {}) {
  const {
    group = 'all', context = null, includeDeprecated = true, currentContext = null, contextWeights = [], prefixes = new Set(),
    limit = 50,
  } = options;
  const trimmed = query.trim();
  if (!trimmed) return [];
  let words = trimmed.toLowerCase().split(/\s+/).map(normalise).filter(Boolean);
  const phrase = words.length > 2;
  if (phrase) words = words.filter((word) => !STOP_WORDS.has(word));
  if (!words.length) return [];
  const synonyms = synonymsOf(trimmed);
  const text = [phrase ? words.join(' ') : trimmed, ...synonyms].join(' ');
  const synonymWords = synonyms.flatMap((synonym) => synonym.split(' '));
  const queryParts = [...new Set(tokenize(text).flatMap((token) => identifierWords(token)))];
  const filter = (hit) => {
    const record = records[hit.id];
    if (group !== 'all' && KINDS[record.k]?.group !== group) return false;
    if (context !== null && record.c !== context) return false;
    if (!includeDeprecated && record.f & FLAG_DEPRECATED) return false;
    return true;
  };
  const hits = index.search(text, {
    boost: BOOST,
    prefix: (term) => term.length >= 2,
    fuzzy: (term) => (term.length >= 5 ? 0.2 : false),
    combineWith: 'OR',
    filter,
  });
  const scored = hits.slice(0, 600).map((hit) => {
    const record = records[hit.id];
    let score = hit.score;
    score *= KINDS[record.k]?.weight ?? 1;
    const bonus = nameBonus(record, trimmed, prefixes);
    score *= bonus;
    if (bonus === 1) score *= nameFit(record, queryParts, prefixes);
    // A record matched through a synonym answers the phrase as well as one containing its words.
    score *= synonymWords.length ? Math.max(coverage(record, words), coverage(record, synonymWords)) : coverage(record, words);
    score *= contextWeights[record.c] ?? 1;
    if (record.f & FLAG_DEPRECATED) score *= 0.25;
    if (record.f & FLAG_EXPERIMENTAL) score *= 0.9;
    if (currentContext !== null && record.c === currentContext) score *= 1.25;
    return { record, score, terms: hit.terms };
  });
  scored.sort((a, b) => b.score - a.score || a.record.n.length - b.record.n.length);
  return scored.slice(0, limit);
}

// Members sharing a name (`id` on 400 types) collapse into their best-scored record; the others are counted.
export function collapseMembers(results, { keepAll = false } = {}) {
  if (keepAll) return results.map((result) => ({ ...result, more: 0 }));
  const seen = new Map();
  const out = [];
  for (const result of results) {
    if (!isMember(result.record.k)) {
      out.push({ ...result, more: 0 });
      continue;
    }
    const key = `${result.record.k}:${result.record.n}`;
    const first = seen.get(key);
    if (first) first.more += 1;
    else {
      const entry = { ...result, more: 0 };
      seen.set(key, entry);
      out.push(entry);
    }
  }
  return out;
}

export function loadIndex(payload) {
  const records = payload.records;
  const contextWeights = payload.contexts.map((context) => context.weight ?? 1);
  const prefixes = new Set(payload.prefixes ?? []);
  return { records, contexts: payload.contexts, contextWeights, prefixes, index: createIndex(records) };
}
