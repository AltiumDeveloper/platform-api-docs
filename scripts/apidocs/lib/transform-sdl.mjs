import { Kind, parse, print, visit } from 'graphql';

// Internal details that must not be published: authorization policy names (@authorize,
// with its ApplyPolicy enum) and per-field cost weights (@cost, noise on every field).
export const STRIP = { directives: ['authorize', 'cost'], types: ['ApplyPolicy'] };

export function stripDirectives(sdl, { directives = [], types = [] } = {}) {
  const dropDirectives = new Set(directives);
  const dropTypes = new Set(types);
  const ast = visit(parse(sdl), {
    Directive: (node) => (dropDirectives.has(node.name.value) ? null : undefined),
    DirectiveDefinition: (node) => (dropDirectives.has(node.name.value) ? null : undefined),
    EnumTypeDefinition: (node) => (dropTypes.has(node.name.value) ? null : undefined),
    ObjectTypeDefinition: (node) => (dropTypes.has(node.name.value) ? null : undefined),
    InputObjectTypeDefinition: (node) => (dropTypes.has(node.name.value) ? null : undefined),
  });
  return print(ast);
}

const DOC_DEFINITION = parse(
  'directive @doc(category: String) on OBJECT | INTERFACE | UNION | ENUM | INPUT_OBJECT | SCALAR | FIELD_DEFINITION',
).definitions[0];

const TYPE_DEFINITION_KINDS = new Set([
  Kind.OBJECT_TYPE_DEFINITION,
  Kind.INTERFACE_TYPE_DEFINITION,
  Kind.UNION_TYPE_DEFINITION,
  Kind.ENUM_TYPE_DEFINITION,
  Kind.INPUT_OBJECT_TYPE_DEFINITION,
  Kind.SCALAR_TYPE_DEFINITION,
]);

const name = (value) => ({ kind: Kind.NAME, value });
const docDirective = (category) => ({
  kind: Kind.DIRECTIVE,
  name: name('doc'),
  arguments: [{ kind: Kind.ARGUMENT, name: name('category'), value: { kind: Kind.STRING, value: category } }],
});
const experimentalDirective = () => ({ kind: Kind.DIRECTIVE, name: name('experimental'), arguments: [] });
const hasDirectiveNode = (node, directiveName) => (node.directives ?? []).some((d) => d.name.value === directiveName);
const namedTypeName = (typeNode) => (typeNode.kind === Kind.NAMED_TYPE ? typeNode.name.value : namedTypeName(typeNode.type));
const withDirectives = (node, extra) =>
  extra.length ? { ...node, directives: [...(node.directives ?? []), ...extra] } : node;

export function annotateSdl(sdl, { classification, titleOf, rootTypeNames = { Query: 'query', Mutation: 'mutation', Subscription: 'subscription' } }) {
  const rootKinds = new Map(Object.entries(rootTypeNames));
  const ast = visit(parse(sdl), {
    enter(node) {
      if (!TYPE_DEFINITION_KINDS.has(node.kind)) return undefined;
      const typeName = node.name.value;
      const rootKind = rootKinds.get(typeName);
      const isNamespace = classification.namespaceTypes.has(typeName);
      if (rootKind || isNamespace) {
        const namespaceId = classification.namespaceTypes.get(typeName);
        const fields = (node.fields ?? []).map((field) => {
          const id = rootKind
            ? classification.operations[rootKind].get(field.name.value)
              ?? classification.namespaceTypes.get(namedTypeName(field.type))
            : namespaceId;
          const extra = id ? [docDirective(titleOf(id))] : [];
          if (!rootKind && classification.experimentalNamespaces.has(typeName) && !hasDirectiveNode(field, 'experimental')) {
            extra.push(experimentalDirective());
          }
          return withDirectives(field, extra);
        });
        const typeExtra = namespaceId ? [docDirective(titleOf(namespaceId))] : [];
        return { ...withDirectives(node, typeExtra), fields };
      }
      const id = classification.types.get(typeName);
      return id ? withDirectives(node, [docDirective(titleOf(id))]) : undefined;
    },
  });
  return print({ ...ast, definitions: [...ast.definitions, DOC_DEFINITION] });
}
