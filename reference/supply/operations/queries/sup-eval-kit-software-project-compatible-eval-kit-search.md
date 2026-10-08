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

### Type

#### [`SupSoftwareProjectEvalKitSourceConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-eval-kit-source-connection.md) object

A connection to a list of items.

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

#### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

#### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

#### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

#### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

#### `order` · [`[SupSoftwareProjectCompatibleEvalKitSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-compatible-eval-kit-sort-input.md) list input

#### `softwareProjectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `where` · [`SupSoftwareProjectCompatibleEvalKitFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-compatible-eval-kit-filter-input.md) input
