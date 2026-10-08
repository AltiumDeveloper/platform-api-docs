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

#### `and` · [`[DesProjectFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-project-filter-input.md) list input

#### `createdAt` · [`DateTimeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/date-time-operation-filter-input.md) input

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) when this project was created.

#### `description` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

The summary of this project content or purpose.

#### `name` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

The assigned name for this project.

#### `or` · [`[DesProjectFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-project-filter-input.md) list input

#### `projectId` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

The reference identifier for this project.

#### `projectType` · [`DesProjectTypeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-project-type-operation-filter-input.md) input

The project type.

#### `updatedAt` · [`DateTimeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/date-time-operation-filter-input.md) input

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) when this project was last modified.

#### `url` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

The Altium 365 web address.

#### `workspaceUrl` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

The Altium 365 workspace URL.
