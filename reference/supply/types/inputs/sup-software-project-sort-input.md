---
title: "SupSoftwareProjectSortInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-sort-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectSortInput

Input type for sorting.

### Member Of

[`supSoftwareProjectEvalKitCompatibleSoftwareProjectSearch`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-software-project-eval-kit-compatible-software-project-search.md) query · [`supSoftwareProjectSearch`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-software-project-search.md) query

```graphql
input SupSoftwareProjectSortInput {
  createdAt: SortEnumType
  isRecommended: SortEnumType
  recommendScore: SortEnumType
  title: SortEnumType
  updatedAt: SortEnumType
}
```

### Fields

#### `SupSoftwareProjectSortInput.createdAt` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

Sorting by creation date.

#### `SupSoftwareProjectSortInput.isRecommended` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

Sorting by recommendation status.

#### `SupSoftwareProjectSortInput.recommendScore` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

Sorting by recommendation score.

#### `SupSoftwareProjectSortInput.title` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

Sorting by title.

#### `SupSoftwareProjectSortInput.updatedAt` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

Sorting by last update date.
