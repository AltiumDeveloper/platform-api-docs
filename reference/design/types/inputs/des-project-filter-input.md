---
title: "DesProjectFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-project-filter-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesProjectFilterInput

A project manages all development stages of the PCB/PCA product lifecycle.

### Member Of

[`DesProjectFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-project-filter-input.md) input · [`desProjects`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-projects.md) query

```graphql
input DesProjectFilterInput {
  and: [DesProjectFilterInput!]
  createdAt: DateTimeOperationFilterInput
  description: StringOperationFilterInput
  name: StringOperationFilterInput
  or: [DesProjectFilterInput!]
  projectId: StringOperationFilterInput
  projectType: DesProjectTypeOperationFilterInput
  updatedAt: DateTimeOperationFilterInput
  url: StringOperationFilterInput
  workspaceUrl: StringOperationFilterInput
}
```

### Fields

#### `DesProjectFilterInput.and` · [`[DesProjectFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-project-filter-input.md) list input design

#### `DesProjectFilterInput.createdAt` · [`DateTimeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/date-time-operation-filter-input.md) input common

The `DateTime` when this project was created.

#### `DesProjectFilterInput.description` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input common

The summary of this project content or purpose.

#### `DesProjectFilterInput.name` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input common

The assigned name for this project.

#### `DesProjectFilterInput.or` · [`[DesProjectFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-project-filter-input.md) list input design

#### `DesProjectFilterInput.projectId` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input common

The reference identifier for this project.

#### `DesProjectFilterInput.projectType` · [`DesProjectTypeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-project-type-operation-filter-input.md) input design

The project type.

#### `DesProjectFilterInput.updatedAt` · [`DateTimeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/date-time-operation-filter-input.md) input common

The `DateTime` when this project was last modified.

#### `DesProjectFilterInput.url` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input common

The Altium 365 web address.

#### `DesProjectFilterInput.workspaceUrl` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input common

The Altium 365 workspace URL.
