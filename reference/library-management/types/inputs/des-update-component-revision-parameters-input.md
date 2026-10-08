---
title: "DesUpdateComponentRevisionParametersInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-update-component-revision-parameters-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUpdateComponentRevisionParametersInput

Input for updating component revision parameters.

### Member Of

[`desUpdateComponentRevisionParameters`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-update-component-revision-parameters.md) mutation

```graphql
input DesUpdateComponentRevisionParametersInput {
  componentId: ID!
  componentRevisionNamingSchemeId: String
  parameters: [DesRevisionParameterInput!]!
  releaseNote: String
  replaceExisting: Boolean
}
```

### Fields

#### `componentId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Component identifier.

#### `componentRevisionNamingSchemeId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Component revision naming scheme identifier.

#### `parameters` · [`[DesRevisionParameterInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-revision-parameter-input.md) non-null input

Parameters to update.

#### `releaseNote` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Release note to go alongside update.

#### `replaceExisting` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

If set to `true`, all existing parameters are overwritten. By default, parameters are added as new parameters.
