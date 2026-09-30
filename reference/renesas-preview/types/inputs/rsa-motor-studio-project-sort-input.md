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

#### `RsaMotorStudioProjectSortInput.createdAt` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

#### `RsaMotorStudioProjectSortInput.createdBy` · [`DesWorkspaceUserSortInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-workspace-user-sort-input.md) input platform

#### `RsaMotorStudioProjectSortInput.createdById` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

#### `RsaMotorStudioProjectSortInput.description` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

#### `RsaMotorStudioProjectSortInput.folderId` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

#### `RsaMotorStudioProjectSortInput.id` · [`MotorStudioProjectGridSortInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/motor-studio-project-grid-sort-input.md) input renesas-preview

#### `RsaMotorStudioProjectSortInput.modifiedAt` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

#### `RsaMotorStudioProjectSortInput.modifiedBy` · [`DesWorkspaceUserSortInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-workspace-user-sort-input.md) input platform

#### `RsaMotorStudioProjectSortInput.modifiedById` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

#### `RsaMotorStudioProjectSortInput.name` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common
