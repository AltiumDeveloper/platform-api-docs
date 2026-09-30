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

#### `supEvalKitDetailsByRefDesignId.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

#### `supEvalKitDetailsByRefDesignId.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

#### `supEvalKitDetailsByRefDesignId.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

#### `supEvalKitDetailsByRefDesignId.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

#### `supEvalKitDetailsByRefDesignId.order` · [`[SupEvalKitSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-sort-input.md) list input supply

#### `supEvalKitDetailsByRefDesignId.refDesignId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

#### `supEvalKitDetailsByRefDesignId.where` · [`SupEvalKitByRefDesignFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-by-ref-design-filter-input.md) input supply

### Type

#### [`SupEvalKitConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-connection.md) object supply

A connection to a list of items.
