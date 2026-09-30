---
title: "SolCreateSolutionInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/sol-create-solution-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# SolCreateSolutionInput

### Member Of

[`solCreateSolution`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/sol-create-solution.md) mutation

```graphql
input SolCreateSolutionInput {
  createSolutionFolder: Boolean @deprecated
  description: String
  evalKitId: ID
  flowType: String
  folderId: String!
  name: String!
  parameterBundle: String
  previewUrl: String @deprecated
  runScaffolding: Boolean
  sharedWith: [String!]
  solutionFolderName: String
  solutionTemplateId: ID
}
```

### Fields

#### `SolCreateSolutionInput.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SolCreateSolutionInput.evalKitId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

#### `SolCreateSolutionInput.flowType` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SolCreateSolutionInput.folderId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SolCreateSolutionInput.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SolCreateSolutionInput.parameterBundle` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SolCreateSolutionInput.runScaffolding` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

#### `SolCreateSolutionInput.sharedWith` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

#### `SolCreateSolutionInput.solutionFolderName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SolCreateSolutionInput.solutionTemplateId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

#### Deprecated

#### `SolCreateSolutionInput.createSolutionFolder` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) **DEPRECATED** scalar common

> **Deprecated:** The field is being removed as it is no longer required and does not serve any functional purpose in the current API design. To create solution folder use SolutionFolderName field.

#### `SolCreateSolutionInput.previewUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** scalar common

> **Deprecated:** The field is being removed as it is no longer required and does not serve any functional purpose in the current API design.
