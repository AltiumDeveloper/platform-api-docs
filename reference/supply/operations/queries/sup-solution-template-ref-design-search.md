---
title: "supSolutionTemplateRefDesignSearch"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-solution-template-ref-design-search"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supSolutionTemplateRefDesignSearch

Search solution templates and reference designs.

### Type

#### [`SupSolutionTemplateRefDesignResultSet`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-ref-design-result-set.md) object

Reference designs with pagination, aggregation information.

```graphql
supSolutionTemplateRefDesignSearch(
  filter: SupSolutionTemplateRefDesignFilterInput
  limit: Int!
  order: [SupSolutionTemplateRefDesignOrderInput!]
  q: String!
  start: Int!
): SupSolutionTemplateRefDesignResultSet!
```

### Arguments

#### `filter` · [`SupSolutionTemplateRefDesignFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-ref-design-filter-input.md) input

#### `limit` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

#### `order` · [`[SupSolutionTemplateRefDesignOrderInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-ref-design-order-input.md) list input

#### `q` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `start` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar
