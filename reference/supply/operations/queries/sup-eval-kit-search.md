---
title: "supEvalKitSearch"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-eval-kit-search"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supEvalKitSearch

Searches evaluation kits.

```graphql
supEvalKitSearch(
  after: String
  before: String
  first: Int
  last: Int
  order: [SupEvalKitSortInput!]
  where: SupEvalKitSearchFilterInput
): SupEvalKitConnection
```

### Arguments

#### `supEvalKitSearch.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

#### `supEvalKitSearch.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

#### `supEvalKitSearch.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

#### `supEvalKitSearch.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

#### `supEvalKitSearch.order` · [`[SupEvalKitSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-sort-input.md) list input supply

#### `supEvalKitSearch.where` · [`SupEvalKitSearchFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-search-filter-input.md) input supply

### Type

#### [`SupEvalKitConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-connection.md) object supply

A connection to a list of items.
