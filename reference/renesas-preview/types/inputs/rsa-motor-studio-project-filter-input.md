---
title: "RsaMotorStudioProjectFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-project-filter-input"
bounded_context: "Renesas (preview)"
kind: "inputs"
experimental: true
deprecated: false
---

# RsaMotorStudioProjectFilterInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`RsaMotorStudioProjectFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-project-filter-input.md) input · [`rsaMotorStudioProjects`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/rsa-motor-studio-projects.md) query

```graphql
input RsaMotorStudioProjectFilterInput {
  and: [RsaMotorStudioProjectFilterInput!]
  createdAt: DateTimeOperationFilterInput
  createdBy: DesWorkspaceUserFilterInput
  createdById: GridFilterInput
  description: StringOperationFilterInput
  folderId: StringOperationFilterInput
  id: MotorStudioProjectGridFilterInput
  modifiedAt: DateTimeOperationFilterInput
  modifiedBy: DesWorkspaceUserFilterInput
  modifiedById: GridFilterInput
  name: StringOperationFilterInput
  or: [RsaMotorStudioProjectFilterInput!]
}
```

### Fields

#### `and` · [`[RsaMotorStudioProjectFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-project-filter-input.md) list input

#### `createdAt` · [`DateTimeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/date-time-operation-filter-input.md) input

#### `createdBy` · [`DesWorkspaceUserFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-workspace-user-filter-input.md) input Platform

#### `createdById` · [`GridFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/grid-filter-input.md) input

#### `description` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

#### `folderId` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

#### `id` · [`MotorStudioProjectGridFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/motor-studio-project-grid-filter-input.md) input

#### `modifiedAt` · [`DateTimeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/date-time-operation-filter-input.md) input

#### `modifiedBy` · [`DesWorkspaceUserFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-workspace-user-filter-input.md) input Platform

#### `modifiedById` · [`GridFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/grid-filter-input.md) input

#### `name` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

#### `or` · [`[RsaMotorStudioProjectFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-project-filter-input.md) list input
