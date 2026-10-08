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

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `evalKitId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

#### `flowType` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `folderId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `parameterBundle` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `runScaffolding` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

#### `sharedWith` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

#### `solutionFolderName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `solutionTemplateId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

#### Deprecated

#### `createSolutionFolder` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) **DEPRECATED** scalar

> **Deprecated:** The field is being removed as it is no longer required and does not serve any functional purpose in the current API design. To create solution folder use SolutionFolderName field.

#### `previewUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** scalar

> **Deprecated:** The field is being removed as it is no longer required and does not serve any functional purpose in the current API design.
