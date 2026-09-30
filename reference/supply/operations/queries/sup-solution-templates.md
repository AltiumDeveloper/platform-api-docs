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

```graphql
supSolutionTemplates(
  filter: SupSolutionTemplateFilterInput
  limit: Int! = 10
  q: String
  start: Int! = 0
): [SupSolutionTemplate]!
```

### Arguments

#### `supSolutionTemplates.filter` · [`SupSolutionTemplateFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-filter-input.md) input supply

Optional structured filter input for searching.

#### `supSolutionTemplates.limit` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Page size of results.

#### `supSolutionTemplates.q` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The search query string. Leave empty to query all.

#### `supSolutionTemplates.start` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Offset in the result set.

### Type

#### [`SupSolutionTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template.md) object supply
