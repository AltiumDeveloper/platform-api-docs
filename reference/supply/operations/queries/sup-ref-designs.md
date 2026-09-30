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

#### `supRefDesigns.filter` · [`SupRefDesignFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-ref-design-filter-input.md) input supply

Optional structured filter input for searching.

#### `supRefDesigns.limit` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Page size of results.

#### `supRefDesigns.order` · [`[SupRefDesignOrderInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-ref-design-order-input.md) list input supply

Sort order for results. Supports multiple fields.

#### `supRefDesigns.q` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The search query string. Leave empty to query all.

#### `supRefDesigns.start` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Offset in the result set.

### Type

#### [`SupRefDesignResultSet`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design-result-set.md) object supply

Reference designs with pagination, aggregation information.
