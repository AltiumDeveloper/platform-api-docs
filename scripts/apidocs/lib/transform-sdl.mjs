import { parse, print, visit } from 'graphql';

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
