---
title: "SolUpdateSolutionInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/sol-update-solution-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# SolUpdateSolutionInput

### Member Of

[`solUpdateSolution`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/sol-update-solution.md) mutation

```graphql
input SolUpdateSolutionInput {
  description: String
  evalKitId: ID
  flowType: String
  id: ID!
  name: String
  parameterBundle: String
  previewUrl: String @deprecated
  runScaffolding: Boolean
  solutionTemplateId: ID
}
```

### Fields

#### `SolUpdateSolutionInput.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SolUpdateSolutionInput.evalKitId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

#### `SolUpdateSolutionInput.flowType` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SolUpdateSolutionInput.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

#### `SolUpdateSolutionInput.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SolUpdateSolutionInput.parameterBundle` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SolUpdateSolutionInput.runScaffolding` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

#### `SolUpdateSolutionInput.solutionTemplateId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

#### Deprecated

#### `SolUpdateSolutionInput.previewUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** scalar common

> **Deprecated:** The field is being removed as it is no longer required and does not serve any functional purpose in the current API design.
