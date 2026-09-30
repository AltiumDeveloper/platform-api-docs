---
title: "supEvalKitSoftwareProjectCompatibleEvalKitSearch"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-eval-kit-software-project-compatible-eval-kit-search"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supEvalKitSoftwareProjectCompatibleEvalKitSearch

Searches evauation kit compatible software projects.

```graphql
supEvalKitSoftwareProjectCompatibleEvalKitSearch(
  after: String
  before: String
  first: Int
  last: Int
  order: [SupSoftwareProjectCompatibleEvalKitSortInput!]
  softwareProjectId: ID!
  where: SupSoftwareProjectCompatibleEvalKitFilterInput
): SupSoftwareProjectEvalKitSourceConnection
```

### Arguments

#### `supEvalKitSoftwareProjectCompatibleEvalKitSearch.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

#### `supEvalKitSoftwareProjectCompatibleEvalKitSearch.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

#### `supEvalKitSoftwareProjectCompatibleEvalKitSearch.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

#### `supEvalKitSoftwareProjectCompatibleEvalKitSearch.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

#### `supEvalKitSoftwareProjectCompatibleEvalKitSearch.order` · [`[SupSoftwareProjectCompatibleEvalKitSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-compatible-eval-kit-sort-input.md) list input supply

#### `supEvalKitSoftwareProjectCompatibleEvalKitSearch.softwareProjectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

#### `supEvalKitSoftwareProjectCompatibleEvalKitSearch.where` · [`SupSoftwareProjectCompatibleEvalKitFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-compatible-eval-kit-filter-input.md) input supply

### Type

#### [`SupSoftwareProjectEvalKitSourceConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-eval-kit-source-connection.md) object supply

A connection to a list of items.
