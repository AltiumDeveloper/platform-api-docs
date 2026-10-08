---
title: "RsaMotorStudioProjectSortInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-project-sort-input"
bounded_context: "Renesas (preview)"
kind: "inputs"
experimental: true
deprecated: false
---

# RsaMotorStudioProjectSortInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`rsaMotorStudioProjects`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/rsa-motor-studio-projects.md) query

```graphql
input RsaMotorStudioProjectSortInput {
  createdAt: SortEnumType
  createdBy: DesWorkspaceUserSortInput
  createdById: SortEnumType
  description: SortEnumType
  folderId: SortEnumType
  id: MotorStudioProjectGridSortInput
  modifiedAt: SortEnumType
  modifiedBy: DesWorkspaceUserSortInput
  modifiedById: SortEnumType
  name: SortEnumType
}
```

### Fields

#### `createdAt` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

#### `createdBy` · [`DesWorkspaceUserSortInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-workspace-user-sort-input.md) input Platform

#### `createdById` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

#### `description` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

#### `folderId` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

#### `id` · [`MotorStudioProjectGridSortInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/motor-studio-project-grid-sort-input.md) input

#### `modifiedAt` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

#### `modifiedBy` · [`DesWorkspaceUserSortInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-workspace-user-sort-input.md) input Platform

#### `modifiedById` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

#### `name` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum
