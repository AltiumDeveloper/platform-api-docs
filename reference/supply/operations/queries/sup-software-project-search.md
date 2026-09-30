---
title: "supSoftwareProjectSearch"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-software-project-search"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supSoftwareProjectSearch

Searches software projects.

```graphql
supSoftwareProjectSearch(
  after: String
  before: String
  first: Int
  last: Int
  order: [SupSoftwareProjectSortInput!]
  where: SupSoftwareProjectSearchFilterInput
): SupSoftwareProjectConnection
```

### Arguments

#### `supSoftwareProjectSearch.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

#### `supSoftwareProjectSearch.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

#### `supSoftwareProjectSearch.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

#### `supSoftwareProjectSearch.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

#### `supSoftwareProjectSearch.order` · [`[SupSoftwareProjectSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-sort-input.md) list input supply

#### `supSoftwareProjectSearch.where` · [`SupSoftwareProjectSearchFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-search-filter-input.md) input supply

### Type

#### [`SupSoftwareProjectConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-connection.md) object supply

A connection to a list of items.
