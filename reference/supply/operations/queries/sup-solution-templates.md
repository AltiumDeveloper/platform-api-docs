---
title: "supSolutionTemplates"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-solution-templates"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supSolutionTemplates

List a solution templates.

### Type

#### [`SupSolutionTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template.md) object

```graphql
supSolutionTemplates(
  filter: SupSolutionTemplateFilterInput
  limit: Int! = 10
  q: String
  start: Int! = 0
): [SupSolutionTemplate]!
```

### Arguments

#### `filter` · [`SupSolutionTemplateFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-filter-input.md) input

Optional structured filter input for searching.

#### `limit` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Page size of results.

#### `q` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The search query string. Leave empty to query all.

#### `start` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Offset in the result set.
