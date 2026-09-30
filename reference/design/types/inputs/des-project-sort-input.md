---
title: "DesProjectSortInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-project-sort-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesProjectSortInput

A project manages all development stages of the PCB/PCA product lifecycle.

### Member Of

[`desProjects`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-projects.md) query

```graphql
input DesProjectSortInput {
  createdAt: SortEnumType
  description: SortEnumType
  id: SortEnumType
  name: SortEnumType
  updatedAt: SortEnumType
}
```

### Fields

#### `DesProjectSortInput.createdAt` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

The `DateTime` when this project was created.

#### `DesProjectSortInput.description` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

The summary of this project content or purpose.

#### `DesProjectSortInput.id` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

The node identifier for this project (used by `desProjectById`).

#### `DesProjectSortInput.name` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

The assigned name for this project.

#### `DesProjectSortInput.updatedAt` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

The `DateTime` when this project was last modified.
