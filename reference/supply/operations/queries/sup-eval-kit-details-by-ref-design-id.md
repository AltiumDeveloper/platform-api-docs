---
title: "supEvalKitDetailsByRefDesignId"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-eval-kit-details-by-ref-design-id"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supEvalKitDetailsByRefDesignId

The evaluation kits of reference design.

### Type

#### [`SupEvalKitConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-connection.md) object

A connection to a list of items.

```graphql
supEvalKitDetailsByRefDesignId(
  after: String
  before: String
  first: Int
  last: Int
  order: [SupEvalKitSortInput!]
  refDesignId: ID!
  where: SupEvalKitByRefDesignFilterInput
): SupEvalKitConnection
```

### Arguments

#### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

#### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

#### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

#### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

#### `order` · [`[SupEvalKitSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-sort-input.md) list input

#### `refDesignId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `where` · [`SupEvalKitByRefDesignFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-by-ref-design-filter-input.md) input
