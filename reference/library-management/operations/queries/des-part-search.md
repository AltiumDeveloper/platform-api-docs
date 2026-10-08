---
title: "desPartSearch"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-search"
bounded_context: "Library Management"
kind: "queries"
experimental: false
deprecated: false
---

# desPartSearch

Searches parts by attributes.

### Type

#### [`DesPartSearchConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-connection.md) object

A connection to a list of items.

```graphql
desPartSearch(
  after: String
  before: String
  first: Int
  last: Int
  order: [DesPartSortInput!]
  where: DesPartSearchFilterInput
): DesPartSearchConnection
```

### Arguments

#### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The cursor to return the parts after.

#### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

#### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

The maximum number of parts to return.

#### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

#### `order` · [`[DesPartSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-sort-input.md) list input

The sort order to apply to the parts.

#### `where` · [`DesPartSearchFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-search-filter-input.md) input

The filter to apply to the part search.
