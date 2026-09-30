# Altium Platform API documentation

Source for https://altiumdeveloper.github.io/platform-api-docs/ — the GraphQL reference for the
Altium Platform API, grouped by bounded context and cross-linked with the
[Common Data Model](https://altiumdeveloper.github.io/cdm/).

## How it works

`npm run apidocs` runs the pipeline:

1. `fetch-schema` — downloads the SDL (with applied directives) from the EUR gateway (`?sdl`).
2. `fetch-cdm` — builds an API-type → CDM-entity index from the public CDM schema.
3. `annotate` — assigns every type and operation to a bounded context using
   `config/context-map.yaml`, strips internal directives, and writes `.schema/report.json`.
   The build fails if a name is unassigned and not listed in `config/unassigned-allowlist.txt`.
4. `graphql-to-doc` — graphql-markdown renders `docs/reference/**`.
5. `postprocess` — writes BC overview pages, the sidebar index and redirects for old URLs.

`npm run build` then builds the Docusaurus site. The GitHub workflow does both nightly.

## Local development

Requires Node 22.

```bash
npm ci
npm run apidocs
npm start
```

Tests: `npm test` (unit) and `npm run test:smoke` (full build from test fixtures).

## Changing the grouping

Edit `config/context-map.yaml`. Each context has regexes for query, mutation and type names; the most
specific anchored prefix wins, CDM mappings win for entity types, and `overrides` pins individual
names. Run `npm run apidocs:fetch && npm run apidocs:annotate` to see the effect in the report.

Keep the context map public-safe: no owner or team names, OAuth resources or internal links.

## CDM alignment

Every `annotate` run rewrites `notes/cdm-mismatches.md` (git-ignored, never published; in CI it is uploaded
with `.schema/report.json` as the `apidocs-report` artifact). It records the CDM ref it was built from
(`.schema/cdm-meta.json`, written by `fetch-cdm`) and lists, one bullet per name:

- CDM `platformAPI` mappings to API types that do not exist;
- `Node` entities without a CDM mapping;
- `overrides` in the context map that contradict the CDM bounded context;
- CDM/regex classification conflicts (the CDM wins);
- API types mapped by CDM classes from different subsets;
- CDM subsets that no context lists in `cdm:`, and listed subsets that map no API type.

Use it as the to-do list when fixing the CDM or the context map. Set `APIDOCS_MISMATCHES_FILE` to write it elsewhere.

## Troubleshooting

### "SDL shrank ... refusing to publish"

`fetch-schema` remembers the size of the last accepted SDL (`.schema/last-size`, cached between CI runs).
If a new SDL is more than 50% smaller, the fetch fails so that a partial or broken gateway response is never
published. If the removal is legitimate (for example a large bounded context was retired), bypass the guard once:

- Locally: `APIDOCS_ALLOW_SHRINK=1 npm run apidocs:fetch`.
- In CI: run the "GitHub Pages" workflow manually (`workflow_dispatch`) with `allow_shrink` ticked.
  It sets `APIDOCS_ALLOW_SHRINK=1` for the "Generate API reference" step, and the new, smaller size becomes the baseline.

The script logs `schema size guard bypassed` when the bypass is active. Other checks (empty SDL, parse errors,
missing `Query` type) still apply.
