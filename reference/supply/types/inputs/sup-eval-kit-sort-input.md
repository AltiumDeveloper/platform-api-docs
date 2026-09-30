---
title: "SupEvalKitSortInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-sort-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitSortInput

Input type for sorting.

### Member Of

[`supEvalKitDetailsByRefDesignId`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-eval-kit-details-by-ref-design-id.md) query · [`supEvalKitSearch`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-eval-kit-search.md) query · [`SupSoftwareProjectCompatibleEvalKitSortInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-compatible-eval-kit-sort-input.md) input

```graphql
input SupEvalKitSortInput {
  createdAt: SortEnumType
  title: SortEnumType
  updatedAt: SortEnumType
}
```

### Fields

#### `SupEvalKitSortInput.createdAt` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

Sorting by creation date.

#### `SupEvalKitSortInput.title` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

Sorting by title.

#### `SupEvalKitSortInput.updatedAt` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

Sorting by last update date.
