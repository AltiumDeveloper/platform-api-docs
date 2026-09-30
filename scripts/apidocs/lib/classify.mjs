import { getNamedType, isObjectType } from 'graphql';
import { COMMON_ID } from './context-map.mjs';

const ROOT_GETTERS = { query: 'getQueryType', mutation: 'getMutationType', subscription: 'getSubscriptionType' };
const BUILTIN_SCALARS = new Set(['String', 'Int', 'Float', 'Boolean', 'ID']);

export function isNamespaceTypeName(typeName, rootKind) {
  const lower = typeName.toLowerCase();
  const plural = rootKind === 'query' ? 'queries' : `${rootKind}s`;
  return lower.endsWith(rootKind) || lower.endsWith(plural);
}

export function literalPrefixLength(source) {
  if (!source.startsWith('^')) return 0;
  const rest = source.slice(1);
  let length = /^[A-Za-z0-9_]*/.exec(rest)[0].length;
  if (length > 0 && /^[?*{]/.test(rest.slice(length))) length -= 1;
  return length;
}

export function matchContext(name, kind, map) {
  let best = null;
  for (const context of map.contexts) {
    for (const regex of context[kind]) {
      const match = regex.exec(name);
      if (!match) continue;
      const score = [literalPrefixLength(regex.source), match[0].length];
      if (!best || score[0] > best.score[0] || (score[0] === best.score[0] && score[1] > best.score[1])) {
        best = { id: context.id, score, tied: [context.id] };
      } else if (score[0] === best.score[0] && score[1] === best.score[1] && !best.tied.includes(context.id)) {
        best.tied.push(context.id);
      }
    }
  }
  if (!best) return null;
  return { id: best.id, ambiguous: best.tied.length > 1 ? best.tied : null };
}

const hasDirective = (astNode, name) => astNode?.directives?.some((d) => d.name.value === name) ?? false;

const contextForCdm = (map, subset) => map.contexts.find((context) => context.cdm.includes(subset))?.id ?? null;

export function classifySchema(schema, map, cdmIndex = {}) {
  const result = {
    types: new Map(),
    operations: { query: new Map(), mutation: new Map(), subscription: new Map() },
    namespaceTypes: new Map(),
    experimentalNamespaces: new Set(),
    unassigned: [],
    ambiguous: [],
    cdmConflicts: [],
    overrideConflicts: [],
    experimental: { operations: new Set(), types: new Set() },
  };

  const byRegex = (name, kind) => {
    const match = matchContext(name, kind, map);
    if (match) return { id: match.id, ambiguous: match.ambiguous };
    if (kind === 'type' && (map.common.names.has(name) || map.common.type.some((regex) => regex.test(name)))) {
      return { id: COMMON_ID, ambiguous: null };
    }
    return { id: null, ambiguous: null };
  };

  const cdmContextOf = (name) => {
    const subset = (cdmIndex[name] ?? [])[0]?.subset;
    return subset ? contextForCdm(map, subset) : null;
  };

  const assign = (name, kind) => {
    if (map.overrides.has(name)) {
      const override = map.overrides.get(name);
      const cdm = kind === 'type' ? cdmContextOf(name) : null;
      if (cdm && cdm !== override) result.overrideConflicts.push({ name, override, cdm });
      return override;
    }
    const regex = byRegex(name, kind);
    if (kind === 'type') {
      const entries = cdmIndex[name] ?? [];
      const fromCdm = cdmContextOf(name);
      if (fromCdm) {
        const candidates = [...new Set(entries.map((entry) => (entry.subset ? contextForCdm(map, entry.subset) : null)).filter(Boolean))];
        if (candidates.length > 1) result.ambiguous.push({ kind, name, candidates, source: 'cdm' });
        if (regex.id !== fromCdm) result.cdmConflicts.push({ name, cdm: fromCdm, regex: regex.id });
        return fromCdm;
      }
    }
    if (regex.ambiguous) result.ambiguous.push({ kind, name, candidates: regex.ambiguous });
    return regex.id;
  };

  const rootNames = new Set();
  for (const [rootKind, getter] of Object.entries(ROOT_GETTERS)) {
    const root = schema[getter]();
    if (!root) continue;
    rootNames.add(root.name);

    const walk = (fields, prefix, inheritedId, inheritedExperimental, visited) => {
      for (const field of Object.values(fields)) {
        const dotted = prefix ? `${prefix}.${field.name}` : field.name;
        const id = prefix ? inheritedId : assign(field.name, rootKind);
        const experimental = inheritedExperimental || hasDirective(field.astNode, 'experimental');
        const named = getNamedType(field.type);
        const isNamespace = isObjectType(named) && named.name !== root.name && isNamespaceTypeName(named.name, rootKind);
        if (isNamespace) {
          const nsExperimental = experimental || hasDirective(named.astNode, 'experimental');
          result.namespaceTypes.set(named.name, id);
          if (nsExperimental) result.experimentalNamespaces.add(named.name);
          if (!visited.has(named.name)) {
            walk(named.getFields(), dotted, id, nsExperimental, new Set([...visited, named.name]));
          }
          continue;
        }
        if (id) result.operations[rootKind].set(dotted, id);
        else result.unassigned.push({ kind: rootKind, name: dotted });
        if (experimental) result.experimental.operations.add(dotted);
      }
    };
    walk(root.getFields(), '', null, false, new Set([root.name]));
  }

  for (const type of Object.values(schema.getTypeMap())) {
    const { name } = type;
    if (name.startsWith('__') || rootNames.has(name) || result.namespaceTypes.has(name)) continue;
    const id = BUILTIN_SCALARS.has(name) ? COMMON_ID : assign(name, 'type');
    if (id) result.types.set(name, id);
    else result.unassigned.push({ kind: 'type', name });
    if (hasDirective(type.astNode, 'experimental')) result.experimental.types.add(name);
  }
  return result;
}
