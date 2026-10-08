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

### Type

#### [`DesPartGlobalSearchConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-search-connection.md) object

A connection to a list of items.

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

#### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The cursor to return the global parts after.

#### `attributeFacets` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Specifies the list of attribute identifiers for which facets should be calculated.

#### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

#### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

The maximum number of global parts to return.

#### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

#### `order` · [`DesPartGlobalSearchSortInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-global-search-sort-input.md) input

The sort order to apply to the global parts.

#### `where` · [`DesPartGlobalSearchFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-global-search-filter-input.md) input

The filter to apply to the global part search.
