---
title: "DesUpdateProjectParametersInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-update-project-parameters-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUpdateProjectParametersInput

Input for updating project parameters.

### Member Of

[`desUpdateProjectParameters`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/mutations/des-update-project-parameters.md) mutation

```graphql
input DesUpdateProjectParametersInput {
  parameters: [DesProjectParameterInput!]!
  projectId: ID!
  replaceExisting: Boolean
}
```

### Fields

#### `DesUpdateProjectParametersInput.parameters` · [`[DesProjectParameterInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-project-parameter-input.md) non-null input design

Parameters to describe the project.

#### `DesUpdateProjectParametersInput.projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Project identifier.

#### `DesUpdateProjectParametersInput.replaceExisting` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Replace all existing user-specific project parameters. By default parameters are appended to the existing list.
