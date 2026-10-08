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

### Type

#### [`SupSoftwareProjectConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-connection.md) object

A connection to a list of items.

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

#### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

#### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

#### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

#### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

#### `order` · [`[SupSoftwareProjectSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-sort-input.md) list input

#### `where` · [`SupSoftwareProjectSearchFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-search-filter-input.md) input
