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

#### `desPartSearch.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The cursor to return the parts after.

#### `desPartSearch.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

#### `desPartSearch.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

The maximum number of parts to return.

#### `desPartSearch.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

#### `desPartSearch.order` · [`[DesPartSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-sort-input.md) list input library-management

The sort order to apply to the parts.

#### `desPartSearch.where` · [`DesPartSearchFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-search-filter-input.md) input library-management

The filter to apply to the part search.

### Type

#### [`DesPartSearchConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-connection.md) object library-management

A connection to a list of items.
