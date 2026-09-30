// graphql-markdown decorators: experimental markers and the Common Data Model section.
const { and, hasDirectiveNamed, isEntity } = require('@graphql-markdown/graphql');
const { renderCdmEntries } = require('./lib/cdm-render.cjs');

const PAGE_KINDS = ['queries', 'mutations', 'subscriptions', 'objects', 'inputs', 'enums', 'interfaces', 'unions', 'scalars', 'directives'];

const EXPERIMENTAL_NOTE = [
  ':::caution',
  'Not production-ready. It may change or be removed without notice. See [Lifecycle](/#lifecycle).',
  ':::',
].join('\n');

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
