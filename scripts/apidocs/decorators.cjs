// graphql-markdown decorators: experimental markers and the Common Data Model section.
const { and, hasDirectiveNamed, isEntity } = require('@graphql-markdown/graphql');
const { escapeMDX } = require('@graphql-markdown/utils');

const PAGE_KINDS = ['queries', 'mutations', 'subscriptions', 'objects', 'inputs', 'enums', 'interfaces', 'unions', 'scalars', 'directives'];

const EXPERIMENTAL_NOTE = [
  ':::caution',
  'Not production-ready. It may change or be removed without notice. See [Lifecycle](/#lifecycle).',
  ':::',
].join('\n');

function renderCdmEntries(entries) {
  return entries
    .map((entry) => {
      let line = `- **[${escapeMDX(entry.title)}](${entry.url})**`;
      if (entry.description) line += ` — ${escapeMDX(entry.description)}`;
      const details = [];
      if (entry.subset) details.push(`bounded context \`${entry.subset}\``);
      if (entry.grid) details.push(`GRID \`${entry.grid}\``);
      if (details.length) line += ` (${details.join('; ')})`;
      return line;
    })
    .join('\n');
}

function buildDecorators({ cdmIndex }) {
  return {
    experimentalBadge: {
      predicate: hasDirectiveNamed('experimental'),
      position: { into: 'tags' },
      render: (_values, options) => options.formatMDXBadge({ text: 'EXPERIMENTAL', classname: 'warning' }),
    },
    experimentalNote: {
      predicate: and(hasDirectiveNamed('experimental'), isEntity(...PAGE_KINDS)),
      title: 'Experimental',
      level: 3,
      position: { before: 'description' },
      render: () => EXPERIMENTAL_NOTE,
    },
    cdmEntity: {
      predicate: (type) => Boolean(type?.name && cdmIndex[type.name]),
      resolve: (type) => cdmIndex[type.name],
      title: 'Common Data Model',
      level: 3,
      position: { after: 'description' },
      render: (entries) => renderCdmEntries(entries),
    },
  };
}

module.exports = { buildDecorators, renderCdmEntries, EXPERIMENTAL_NOTE };
