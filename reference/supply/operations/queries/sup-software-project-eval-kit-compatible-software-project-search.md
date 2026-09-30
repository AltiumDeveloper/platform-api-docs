---
title: "supSoftwareProjectEvalKitCompatibleSoftwareProjectSearch"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-software-project-eval-kit-compatible-software-project-search"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supSoftwareProjectEvalKitCompatibleSoftwareProjectSearch

Searches evauation kit compatible software projects.

```graphql
supSoftwareProjectEvalKitCompatibleSoftwareProjectSearch(
  after: String
  before: String
  evalKitId: ID!
  first: Int
  last: Int
  order: [SupSoftwareProjectSortInput!]
  where: SupEvalKitCompatibleSoftwareProjectFilterInput
): SupEvalKitCompatibleSoftwareProjectConnection
```

### Arguments

#### `supSoftwareProjectEvalKitCompatibleSoftwareProjectSearch.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

#### `supSoftwareProjectEvalKitCompatibleSoftwareProjectSearch.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

#### `supSoftwareProjectEvalKitCompatibleSoftwareProjectSearch.evalKitId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

#### `supSoftwareProjectEvalKitCompatibleSoftwareProjectSearch.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

#### `supSoftwareProjectEvalKitCompatibleSoftwareProjectSearch.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

#### `supSoftwareProjectEvalKitCompatibleSoftwareProjectSearch.order` · [`[SupSoftwareProjectSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-sort-input.md) list input supply

#### `supSoftwareProjectEvalKitCompatibleSoftwareProjectSearch.where` · [`SupEvalKitCompatibleSoftwareProjectFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-compatible-software-project-filter-input.md) input supply

### Type

#### [`SupEvalKitCompatibleSoftwareProjectConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-compatible-software-project-connection.md) object supply

A connection to a list of items.
