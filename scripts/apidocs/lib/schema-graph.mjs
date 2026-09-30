// "Returns / references" index over the public schema: which root queries return a type (directly, as a list or
// through a Relay connection) and which fields of other object types reference it. Used for the "Via:" hints and
// list entry points in the per-context llms.txt.
import { getNamedType, getNullableType, isListType, isObjectType } from 'graphql';

const RELAY_WRAPPER = /(Connection|Edge)$/;
const PAYLOAD = /Payload$/;
const byOperation = (a, b) => a.operation.localeCompare(b.operation);
const byReference = (a, b) => a.parent.localeCompare(b.parent) || a.field.localeCompare(b.field);

export const defaultIsNamespace = (type) => /Queries$/.test(type.name);

// Named type behind a Relay connection (`nodes`, else `edges.node`), or null.
function connectionNode(type) {
  if (!isObjectType(type) || !/Connection$/.test(type.name)) return null;
  const fields = type.getFields();
  if (fields.nodes) return getNamedType(fields.nodes.type);
  const edge = fields.edges ? getNamedType(fields.edges.type) : null;
  const node = isObjectType(edge) ? edge.getFields().node : null;
  return node ? getNamedType(node.type) : null;
}

// What a field type points at: { name, shape: 'single' | 'list' | 'connection' }.
export function fieldTarget(type) {
  const named = getNamedType(type);
  const node = connectionNode(named);
  if (node) return { name: node.name, shape: 'connection' };
  return { name: named.name, shape: isListType(getNullableType(type)) ? 'list' : 'single' };
}

function push(map, key, value) {
  if (!map.has(key)) map.set(key, []);
  map.get(key).push(value);
}

// schema: GraphQLSchema (public SDL). isNamespace(type): whether a root query field is a namespace wrapper to walk
// into (dotted operation names such as `design.project.byId`). Deprecated fields are ignored.
export function buildSchemaGraph(schema, { isNamespace = defaultIsNamespace } = {}) {
  const returns = new Map();
  const references = new Map();
  const namespaces = new Set();

  const walk = (type, prefix) => {
    for (const field of Object.values(type.getFields())) {
      if (field.deprecationReason) continue;
      const name = `${prefix}${field.name}`;
      const named = getNamedType(field.type);
      if (isObjectType(named) && isNamespace(named)) {
        if (namespaces.has(named.name)) continue;
        namespaces.add(named.name);
        walk(named, `${name}.`);
        continue;
      }
      const target = fieldTarget(field.type);
      push(returns, target.name, { operation: name, shape: target.shape });
    }
  };
  const query = schema.getQueryType();
  if (query) walk(query, '');

  const roots = new Set([schema.getQueryType(), schema.getMutationType(), schema.getSubscriptionType()]
    .filter(Boolean).map((type) => type.name));
  for (const type of Object.values(schema.getTypeMap())) {
    if (!isObjectType(type) || type.name.startsWith('__')) continue;
    if (roots.has(type.name) || namespaces.has(type.name) || RELAY_WRAPPER.test(type.name) || PAYLOAD.test(type.name)) continue;
    for (const field of Object.values(type.getFields())) {
      if (field.deprecationReason) continue;
      const target = fieldTarget(field.type);
      if (target.name === type.name) continue;
      push(references, target.name, { parent: type.name, field: field.name, shape: target.shape });
    }
  }
  for (const list of returns.values()) list.sort(byOperation);
  for (const list of references.values()) list.sort(byReference);

  return {
    returns: (typeName) => returns.get(typeName) ?? [],
    references: (typeName) => references.get(typeName) ?? [],
  };
}
