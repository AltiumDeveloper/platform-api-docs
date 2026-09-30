---
title: "desPartGlobalSearch"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-global-search"
bounded_context: "Library Management"
kind: "queries"
experimental: false
deprecated: false
---

# desPartGlobalSearch

Searches part by attributes globally.

```graphql
desPartGlobalSearch(
  after: String
  attributeFacets: [String!]
  before: String
  first: Int
  last: Int
  order: DesPartGlobalSearchSortInput
  where: DesPartGlobalSearchFilterInput
): DesPartGlobalSearchConnection
```

### Arguments

#### `desPartGlobalSearch.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The cursor to return the global parts after.

#### `desPartGlobalSearch.attributeFacets` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Specifies the list of attribute identifiers for which facets should be calculated.

#### `desPartGlobalSearch.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

#### `desPartGlobalSearch.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

The maximum number of global parts to return.

#### `desPartGlobalSearch.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

#### `desPartGlobalSearch.order` · [`DesPartGlobalSearchSortInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-global-search-sort-input.md) input library-management

The sort order to apply to the global parts.

#### `desPartGlobalSearch.where` · [`DesPartGlobalSearchFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-global-search-filter-input.md) input library-management

The filter to apply to the global part search.

### Type

#### [`DesPartGlobalSearchConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-search-connection.md) object library-management

A connection to a list of items.
