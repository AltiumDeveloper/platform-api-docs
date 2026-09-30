---
title: "SupSolutionTemplateSortInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-sort-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateSortInput

Input type for solution template sorting.

### Member Of

[`supSolutionTemplateSearch`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-solution-template-search.md) query

```graphql
input SupSolutionTemplateSortInput {
  createdAt: SortEnumType
  releaseDate: SortEnumType
  stableName: SortEnumType
  title: SortEnumType
  updatedAt: SortEnumType
}
```

### Fields

#### `SupSolutionTemplateSortInput.createdAt` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

Sort by creation date.

#### `SupSolutionTemplateSortInput.releaseDate` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

Sort by release date.

#### `SupSolutionTemplateSortInput.stableName` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

Sort by the stable name identifier.

#### `SupSolutionTemplateSortInput.title` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

Sort by the solution template title.

#### `SupSolutionTemplateSortInput.updatedAt` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

Sort by last update date.
