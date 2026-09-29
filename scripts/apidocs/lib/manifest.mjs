import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
// Same slug function graphql-markdown uses for group folders (verified: "Renesas (preview)" → "renesas-preview").
const { slugify } = require('@graphql-markdown/utils');

export function buildManifest({ contextMap, classification, cdmIndex }) {
  const contexts = [...contextMap.contexts, contextMap.common].map((context) => ({
    id: context.id,
    title: context.title,
    slug: slugify(context.title),
    description: context.description,
    collapsed: context.collapsed,
    cdm: context.cdm,
  }));
  const operations = Object.fromEntries(
    Object.entries(classification.operations).map(([kind, map]) => [kind, Object.fromEntries(map)]),
  );
  return {
    contexts,
    operations,
    types: Object.fromEntries(classification.types),
    experimental: {
      operations: [...classification.experimental.operations].sort(),
      types: [...classification.experimental.types].sort(),
    },
    cdmTypes: Object.keys(cdmIndex).sort(),
  };
}
