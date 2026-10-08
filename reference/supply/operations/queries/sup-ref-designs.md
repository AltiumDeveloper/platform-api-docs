---
title: "supRefDesigns"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-ref-designs"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supRefDesigns

Search a reference designs.

### Type

#### [`SupRefDesignResultSet`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design-result-set.md) object

Reference designs with pagination, aggregation information.

```graphql
supRefDesigns(
  filter: SupRefDesignFilterInput
  limit: Int! = 10
  order: [SupRefDesignOrderInput!]
  q: String!
  start: Int! = 0
): SupRefDesignResultSet!
```

### Arguments

#### `filter` · [`SupRefDesignFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-ref-design-filter-input.md) input

Optional structured filter input for searching.

#### `limit` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Page size of results.

#### `order` · [`[SupRefDesignOrderInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-ref-design-order-input.md) list input

Sort order for results. Supports multiple fields.

#### `q` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The search query string. Leave empty to query all.

#### `start` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Offset in the result set.
