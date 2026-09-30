// CDM alignment log: mismatches between the public CDM, the API schema and config/context-map.yaml.
// Written by annotate to notes/cdm-mismatches.md (git-ignored, uploaded with the CI report artifact).

import { cdmCommitUrl } from './cdm.mjs';

const sorted = (values) => [...values].sort((a, b) => a.localeCompare(b));

export function buildMismatches({ report, cdmIndex, contextMap }) {
  const stale = new Set(report.staleCdm);
  const subsetsOf = (entries) => sorted(new Set(entries.map((entry) => entry.subset).filter(Boolean)));

  const subsetDisagreements = sorted(Object.keys(cdmIndex))
    .map((name) => ({ name, subsets: subsetsOf(cdmIndex[name]) }))
    .filter(({ subsets }) => subsets.length > 1);

  const listed = new Set(contextMap.contexts.flatMap((context) => context.cdm ?? []));
  const cdmSubsets = new Set(Object.values(cdmIndex).flatMap(subsetsOf));
  const unlistedSubsets = sorted([...cdmSubsets].filter((subset) => !listed.has(subset)));

  const mappedSubsets = new Set(
    Object.entries(cdmIndex).filter(([name]) => !stale.has(name)).flatMap(([, entries]) => subsetsOf(entries)),
  );
  const emptySubsets = contextMap.contexts.flatMap((context) =>
    (context.cdm ?? []).filter((subset) => !mappedSubsets.has(subset)).map((subset) => ({ context: context.id, subset })));

  return {
    staleCdm: report.staleCdm,
    unmappedEntities: report.unmappedEntities,
    overrideConflicts: report.overrideConflicts ?? [],
    cdmConflicts: report.cdmConflicts,
    subsetDisagreements,
    unlistedSubsets,
    emptySubsets,
  };
}

const code = (value) => `\`${value}\``;

const SECTIONS = [
  {
    key: 'staleCdm',
    title: 'CDM mappings to missing API types',
    hint: 'CDM classes whose `platformAPI` annotation names a type that is not in the API schema.',
    item: (name) => code(name),
  },
  {
    key: 'unmappedEntities',
    title: 'Node entities without a CDM mapping',
    hint: 'API types implementing `Node` (with an `id`) that no CDM class maps via `platformAPI`.',
    item: (name) => code(name),
  },
  {
    key: 'overrideConflicts',
    title: 'Overrides that contradict the CDM bounded context',
    hint: 'Types pinned by `overrides` in config/context-map.yaml to a context other than the one their CDM subset maps to (the override wins).',
    item: ({ name, override, cdm }) => `${code(name)}: override ${code(override)}, CDM ${code(cdm)}`,
  },
  {
    key: 'cdmConflicts',
    title: 'CDM vs regex classification conflicts',
    hint: 'Types the CDM places in a different context than the context-map regexes would (the CDM wins).',
    item: ({ name, cdm, regex }) => `${code(name)}: CDM ${code(cdm)}, regex ${regex ? code(regex) : 'none'}`,
  },
  {
    key: 'subsetDisagreements',
    title: 'CDM types whose entries disagree on subset',
    hint: 'API types mapped by several CDM classes that belong to different subsets.',
    item: ({ name, subsets }) => `${code(name)}: ${subsets.map(code).join(', ')}`,
  },
  {
    key: 'unlistedSubsets',
    title: 'CDM subsets no context lists',
    hint: 'Subsets used by mapped CDM classes that no context lists in its `cdm:` field.',
    item: (subset) => code(subset),
  },
  {
    key: 'emptySubsets',
    title: 'Context subsets with no mapped API types',
    hint: 'Subsets listed in a context\'s `cdm:` field that map no API type present in the schema.',
    item: ({ context, subset }) => `${code(context)}: ${code(subset)}`,
  },
];

// `main @ abc1234` linked to the CDM commit when the SHA is known, else just the ref.
function cdmLabel({ ref, sha }) {
  if (!sha) return code(ref ?? 'unknown');
  return `[${code(`${ref ?? 'unknown'} @ ${sha.slice(0, 7)}`)}](${cdmCommitUrl(sha)})`;
}

export function renderMismatches(mismatches, { generatedAt, cdm = {} }) {
  const origin = [cdm.source, cdm.fetchedAt ? `fetched ${cdm.fetchedAt}` : null].filter(Boolean).join(', ');
  const lines = [
    '# CDM mismatches',
    '',
    `Generated ${generatedAt} from CDM ${cdmLabel(cdm)}${origin ? ` (${origin})` : ''}.`,
    'Rewritten by `npm run apidocs:annotate`; not published.',
  ];
  for (const { key, title, hint, item } of SECTIONS) {
    const items = mismatches[key] ?? [];
    lines.push('', `## ${title} (${items.length})`, '', hint, '');
    if (items.length) lines.push(...items.map((value) => `- ${item(value)}`));
    else lines.push('None');
  }
  return `${lines.join('\n')}\n`;
}
