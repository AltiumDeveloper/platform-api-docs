---
title: "SolBldImportSoftwareProjectsInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/sol-bld-import-software-projects-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# SolBldImportSoftwareProjectsInput

### Member Of

[`solBldImportSoftwareProjects`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/sol-bld-import-software-projects.md) mutation

```graphql
input SolBldImportSoftwareProjectsInput {
  evalKitId: ID!
  softwareProjectIds: [ID!]!
  solutionId: ID!
}
```

### Fields

#### `SolBldImportSoftwareProjectsInput.evalKitId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

#### `SolBldImportSoftwareProjectsInput.softwareProjectIds` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

#### `SolBldImportSoftwareProjectsInput.solutionId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common
