import { isObjectType } from 'graphql';

export function parseAllowlist(text) {
  return new Set(
    text.split('\n').map((line) => line.trim()).filter((line) => line && !line.startsWith('#')),
  );
}

export function buildReport({ classification, cdmIndex, schema, contextMap, allowlist }) {
  const counts = {};
  const bump = (id, bucket) => {
    counts[id] ??= { query: 0, mutation: 0, subscription: 0, type: 0 };
    counts[id][bucket] += 1;
  };
  for (const [kind, operations] of Object.entries(classification.operations)) {
    for (const id of operations.values()) bump(id, kind);
  }
  for (const id of classification.types.values()) bump(id, 'type');

  const typeMap = schema.getTypeMap();
  const unmappedEntities = Object.values(typeMap)
    .filter((type) => isObjectType(type) && !type.name.startsWith('__'))
    .filter((type) => type.getInterfaces().some((i) => i.name === 'Node') && type.getFields().id)
    .filter((type) => !cdmIndex[type.name])
    .map((type) => type.name)
    .sort();

  const rootFieldNames = new Set();
  for (const root of [schema.getQueryType(), schema.getMutationType(), schema.getSubscriptionType()]) {
    for (const field of Object.keys(root?.getFields() ?? {})) rootFieldNames.add(field);
  }
  const staleOverrides = [...contextMap.overrides.keys()]
    .filter((name) => !typeMap[name] && !rootFieldNames.has(name))
    .sort();
  const unassignedNames = new Set(classification.unassigned.map((item) => item.name));
  const staleAllowlist = [...allowlist].filter((name) => !unassignedNames.has(name)).sort();

  return {
    counts,
    experimental: {
      operations: classification.experimental.operations.size,
      types: classification.experimental.types.size,
    },
    unassigned: classification.unassigned,
    blocking: classification.unassigned.filter((item) => !allowlist.has(item.name)),
    ambiguous: classification.ambiguous,
    cdmConflicts: classification.cdmConflicts,
    staleOverrides,
    staleAllowlist,
    staleCdm: Object.keys(cdmIndex).filter((name) => !typeMap[name]).sort(),
    unmappedEntities,
  };
}

const suggestion = ({ kind, name }) => {
  const prefix = /^[a-z]+|^[A-Z][a-z]+/.exec(name)?.[0] ?? name;
  return `  - ${kind} ${name}: add ${kind}: '^${prefix}' to a context in config/context-map.yaml, or list "${name}" in config/unassigned-allowlist.txt`;
};

export function formatReport(report) {
  const lines = ['Bounded-context classification', ''];
  for (const [id, c] of Object.entries(report.counts)) {
    lines.push(`  ${id.padEnd(26)} queries ${c.query}  mutations ${c.mutation}  subscriptions ${c.subscription}  types ${c.type}`);
  }
  lines.push('', `Experimental: ${report.experimental.operations} operations, ${report.experimental.types} types`);
  lines.push(`Unassigned: ${report.unassigned.length} (blocking: ${report.blocking.length})`);
  for (const item of report.blocking) lines.push(suggestion(item));
  if (report.ambiguous.length) {
    lines.push(`Warning: ${report.ambiguous.length} ambiguous matches (first context wins):`);
    for (const a of report.ambiguous) lines.push(`  - ${a.kind} ${a.name}: ${a.candidates.join(', ')}`);
  }
  if (report.cdmConflicts.length) {
    lines.push(`Warning: ${report.cdmConflicts.length} CDM/regex classification conflicts (CDM wins):`);
    for (const c of report.cdmConflicts) lines.push(`  - ${c.name}: cdm=${c.cdm}, regex=${c.regex ?? 'none'}`);
  }
  if (report.staleOverrides.length) {
    lines.push(`Warning: overrides naming no type or root field: ${report.staleOverrides.join(', ')}`);
  }
  if (report.staleAllowlist.length) {
    lines.push(`Warning: allowlist entries that are no longer unassigned: ${report.staleAllowlist.join(', ')}`);
  }
  if (report.staleCdm.length) lines.push(`Warning: CDM maps to missing API types: ${report.staleCdm.join(', ')}`);
  if (report.unmappedEntities.length) {
    lines.push(`Info: ${report.unmappedEntities.length} Node entities without a CDM mapping (see report.json)`);
  }
  return lines.join('\n');
}
