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

#### `createdAt` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) when this project was created.

#### `description` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

The summary of this project content or purpose.

#### `id` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

The node identifier for this project (used by [`desProjectById`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-project-by-id.md)).

#### `name` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

The assigned name for this project.

#### `updatedAt` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) when this project was last modified.
