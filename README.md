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
