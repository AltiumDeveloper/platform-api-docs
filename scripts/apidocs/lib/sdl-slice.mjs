// Per-bounded-context SDL slice: the BC's type definitions plus its root fields as Query/Mutation/Subscription
// fragments, with a header listing the types it references from other contexts. Parses with graphql.parse;
// not meant for buildSchema (types from other contexts are referenced, not defined).
import { Kind, parse, print, visit } from 'graphql';

const BUILTIN_SCALARS = new Set(['String', 'Int', 'Float', 'Boolean', 'ID']);
const ROOT_KINDS = ['query', 'mutation', 'subscription'];
const DEFAULT_ROOTS = { query: 'Query', mutation: 'Mutation', subscription: 'Subscription' };
const TYPE_DEFINITIONS = new Set([
  Kind.OBJECT_TYPE_DEFINITION, Kind.INTERFACE_TYPE_DEFINITION, Kind.UNION_TYPE_DEFINITION,
  Kind.ENUM_TYPE_DEFINITION, Kind.INPUT_OBJECT_TYPE_DEFINITION, Kind.SCALAR_TYPE_DEFINITION,
]);

export const estimateTokens = (text) => Math.ceil(text.length / 4);

const namedTypeOf = (typeNode) => (typeNode.kind === Kind.NAMED_TYPE ? typeNode.name.value : namedTypeOf(typeNode.type));

export function rootTypeNames(document) {
  const roots = { ...DEFAULT_ROOTS };
  const schemaDef = document.definitions.find((definition) => definition.kind === Kind.SCHEMA_DEFINITION);
  for (const operation of schemaDef?.operationTypes ?? []) roots[operation.operation] = operation.type.name.value;
  return roots;
}

// Context id of a named type (entity/input/enum/... or namespace wrapper), or null.
export function ownerOf(name, manifest) {
  return manifest.types[name] ?? manifest.namespaceTypes?.[name] ?? null;
}

// Context id of a root field: plain operations by name, namespace roots through their wrapper type.
function rootFieldOwner(field, kind, manifest) {
  return manifest.operations[kind]?.[field.name.value] ?? manifest.namespaceTypes?.[namedTypeOf(field.type)] ?? null;
}

function referencedNames(nodes) {
  const names = new Set();
  for (const node of nodes) {
    visit(node, { NamedType: (named) => { names.add(named.name.value); } });
  }
  return names;
}

// Returns { text, definitions, externals, tokens } for one context. `document` is the parsed public SDL.
export function buildSlice({ document, manifest, contextId, siteUrl }) {
  const contexts = new Map(manifest.contexts.map((context) => [context.id, context]));
  const context = contexts.get(contextId);
  if (!context) throw new Error(`sdl-slice: unknown context "${contextId}"`);
  const roots = rootTypeNames(document);
  const rootNames = new Set(Object.values(roots));
  const kindOfRoot = new Map(ROOT_KINDS.map((kind) => [roots[kind], kind]));

  const types = [];
  const rootFields = { query: [], mutation: [], subscription: [] };
  const directives = [];
  for (const definition of document.definitions) {
    if (definition.kind === Kind.DIRECTIVE_DEFINITION) {
      if (contextId === 'common') directives.push(definition);
      continue;
    }
    if (!TYPE_DEFINITIONS.has(definition.kind)) continue;
    const name = definition.name.value;
    const rootKind = kindOfRoot.get(name);
    if (rootKind) {
      rootFields[rootKind].push(...(definition.fields ?? []).filter((field) => rootFieldOwner(field, rootKind, manifest) === contextId));
      continue;
    }
    if (ownerOf(name, manifest) === contextId) types.push(definition);
  }

  const rootDefinitions = ROOT_KINDS.filter((kind) => rootFields[kind].length).map((kind) => ({
    kind: Kind.OBJECT_TYPE_DEFINITION,
    name: { kind: Kind.NAME, value: roots[kind] },
    interfaces: [],
    directives: [],
    fields: rootFields[kind],
  }));
  const definitions = [...rootDefinitions, ...types, ...directives];
  const defined = new Set(types.map((definition) => definition.name.value));
  const externals = [...referencedNames(definitions)]
    .filter((name) => !defined.has(name) && !rootNames.has(name) && !BUILTIN_SCALARS.has(name))
    .map((name) => ({ name, context: contexts.get(ownerOf(name, manifest)) ?? null }))
    .filter((external) => external.context)
    .sort((a, b) => a.name.localeCompare(b.name));

  const body = definitions.length ? `${print({ kind: Kind.DOCUMENT, definitions })}\n` : '';
  const header = (tokens) => [
    `# Altium Platform API — ${context.title} schema slice (~${tokens} tokens)`,
    '# Not a complete schema: types from other contexts are referenced, not defined.',
    `# Full schema for code generation: ${siteUrl}/schema.graphql`,
    ...(externals.length
      ? ['# Referenced from other contexts:', ...externals.map(({ name, context: owner }) =>
        `#   ${name} → ${owner.title}: ${siteUrl}/reference/${owner.slug}/schema.graphql`)]
      : []),
    '',
  ].join('\n');
  const tokens = estimateTokens(header(0) + body);
  return { text: `${header(tokens)}\n${body}`, definitions, externals, tokens };
}

export const parseSdl = (sdl) => parse(sdl, { noLocation: true });
