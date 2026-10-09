# Altium 365 API documentation

Source for https://altiumdeveloper.github.io/platform-api-docs/ — the GraphQL reference for the
Altium 365 API, grouped by bounded context and cross-linked with the
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
6. `search:index` — writes the search index `static/search-index.json` (see [Search](#search)).

`npm run build` then builds the Docusaurus site, and `npm run llms` adds the LLM surface to `build/`
(see below). The GitHub workflow runs all three nightly.

## Local development

Requires Node 22.

```bash
npm ci
npm run apidocs
npm start
```

Tests: `npm test` (unit), `npm run test:guides` (guide examples against `static/schema.graphql`, or the file
in `APIDOCS_GUIDES_SCHEMA`; run `npm run apidocs` first) and `npm run test:smoke` (full build from test fixtures,
including `npm run llms` and `npm run llms:check`).

## Guides

Hand-written pages live in `docs/guides/*.mdx` (sidebar order from `sidebar_position`; the front-matter
`description` is reused in `llms.txt`). Every ` ```graphql ` block that is an operation is validated against
the public SDL by `npm run test:guides`; mark schema excerpts with ` ```graphql title="SDL" `. Keep `{`, `}`,
`<` and `>` inside code spans (MDX). Use only public-safe facts.

In CI the guide examples are validated by a separate `validate-guides` job against the `schema.graphql` of the
site that was just built (`APIDOCS_GUIDES_SCHEMA=build/schema.graphql`). A schema change that breaks an example
shows up as a failed check on the workflow run, but it does not stop publishing: `deploy` depends only on
`build`. Fix the guide in a follow-up.

## LLM surface

`npm run llms` (after `npm run build`) writes, from already-public outputs only:

- `build/llms.txt` — site index for coding assistants (bounded contexts, guides, Developer Center links);
- `build/reference/<context>/llms.txt` and `build/reference/<context>/schema.graphql` — per-context index and
  SDL slice (types from other contexts are referenced, not defined); `build/reference/<context>/types.txt` — one
  line per non-entity type (without Relay `*Connection`/`*Edge` types); `build/reference/deprecated/llms.txt`;
- a `.md` twin of every docs page (`/reference/design/overview` → `/reference/design/overview.md`, home →
  `/index.md`), advertised by `<link rel="alternate" type="text/markdown">`;
- `build/llms-full.txt` — all guides and reference pages as Markdown.

It prints token estimates (characters / 4). `npm run serve` serves the files locally.

`npm run llms:check` (run by CI after `npm run llms`) scans every `.md` page, `llms*.txt` / `types.txt` index and
schema slice in `build/`: it fails on JSX, `export const`, zero-width characters, Docusaurus anchors
(`hash-link`, "Direct link to"), relative or `.mdx` links, internal absolute links that do not resolve to a file
in `build/`, and slices that do not parse.

## Search

Search runs entirely in the browser; there is no search service. `npm run search:index` builds one record per
operation, type, field, input field, enum value, guide section and bounded-context overview from the SDL,
`.schema/pages.json` and the generated pages (member links use the anchors graphql-markdown wrote), and writes them to
`static/search-index.json` (about 200 KB gzipped). The navbar `SearchBar` (`src/theme/SearchBar`, ⌘K / Ctrl+K or `/`)
fetches it on first use and indexes it with MiniSearch.

The build also publishes the index as `search-index.<hash>.json` (`plugins/search-index.cjs`; the SearchBar reads the
name from `usePluginData('search-index').file`), so a deploy never pairs a cached index with new code; the dev server
keeps using `static/search-index.json`. `npm run search:check`, run in CI after `npm run build`, fails when the hashed
file is missing, duplicated or differs from `build/search-index.json`, when record ids, kinds or context indexes are
invalid, or when a record URL or `#anchor` does not exist in the built HTML.

Ranking is in `src/search/engine.mjs`, shared by the browser and the scripts: candidates from boosted fields (name
above guide title above description, parent type barely), then explicit rules — exact name, then a name equal to the
query once its context prefix (`des`, `bom`, …) is dropped, then typed-ahead prefixes; operations and types above
members; deprecated items demoted; members sharing a name collapsed into one row.

`npm run search:eval` checks the ranking against the cases in `config/search-eval.yaml` (expected result within the
first N) and prints the MRR; `npm run search:eval -- --query "project by id"` shows the ranked list for one query. Add
a case for every query that ranked badly before changing weights. `--index <path>` and `--cases <path>` override the
inputs. The `search-eval` CI job runs it against the built `build/search-index.json`; a failure shows
as a failed check but does not block deploy and, unlike `validate-guides`, opens no issue.

## Changing the grouping

Edit `config/context-map.yaml`. Each context has regexes for query, mutation and type names; the most
specific anchored prefix wins, CDM mappings win for entity types, and `overrides` pins individual
names. Run `npm run apidocs:fetch && npm run apidocs:annotate` to see the effect in the report.

Keep the context map public-safe: no owner or team names, OAuth resources or internal links.

## CDM alignment

The site follows the CDM `main` branch: the nightly build resolves `main` to a commit SHA and reads every schema
file at that SHA, so fixes to the CDM show up on the next run. To pin a version (for example while `main` is
broken), set `CDM_REF` to a tag, branch or SHA; the resolved commit is recorded in `.schema/cdm-meta.json`.

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

## Failure notifications

On `main` (push, nightly schedule, manual run) the `report-failures` job files GitHub issues automatically: a
`docs-build-failure` issue when the build or deploy fails and a `guide-examples-failure` issue when guide examples
fail validation. A repeated failure comments on the open issue instead of opening a new one; the first green run
comments "Resolved by ..." and closes it. Build issues include a summary of the `apidocs-report` artifact. The logic
is in `.github/scripts/report-failures.cjs`.

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
