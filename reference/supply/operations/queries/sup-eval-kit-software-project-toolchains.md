---
title: "supEvalKitSoftwareProjectToolchains"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-eval-kit-software-project-toolchains"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supEvalKitSoftwareProjectToolchains

Search project source toolchains by querying in the database.

### Type

#### [`SupEvalKitSoftwareProjectToolchainConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-software-project-toolchain-connection.md) object

A connection to a list of items.

```graphql
supEvalKitSoftwareProjectToolchains(
  after: String
  before: String
  first: Int
  last: Int
  order: [SupEvalKitSoftwareProjectToolchainSortInput!]
  where: SupEvalKitSoftwareProjectToolchainFilterInput
): SupEvalKitSoftwareProjectToolchainConnection
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

#### `order` · [`[SupEvalKitSoftwareProjectToolchainSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-software-project-toolchain-sort-input.md) list input

#### `where` · [`SupEvalKitSoftwareProjectToolchainFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-software-project-toolchain-filter-input.md) input
