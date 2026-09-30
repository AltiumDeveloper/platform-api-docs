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

#### `supSolutionTemplateRefDesignSearch.filter` · [`SupSolutionTemplateRefDesignFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-ref-design-filter-input.md) input supply

#### `supSolutionTemplateRefDesignSearch.limit` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

#### `supSolutionTemplateRefDesignSearch.order` · [`[SupSolutionTemplateRefDesignOrderInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-ref-design-order-input.md) list input supply

#### `supSolutionTemplateRefDesignSearch.q` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `supSolutionTemplateRefDesignSearch.start` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

### Type

#### [`SupSolutionTemplateRefDesignResultSet`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-ref-design-result-set.md) object supply

Reference designs with pagination, aggregation information.
