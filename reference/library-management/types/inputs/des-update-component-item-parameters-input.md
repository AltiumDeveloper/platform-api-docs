---
title: "DesUpdateComponentItemParametersInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-update-component-item-parameters-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUpdateComponentItemParametersInput

Input for updating component item parameters.

### Member Of

[`desUpdateComponentItemParameters`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-update-component-item-parameters.md) mutation

```graphql
input DesUpdateComponentItemParametersInput {
  componentId: ID!
  parameters: [DesComponentItemParameterInput!]!
  replaceExisting: Boolean
}
```

### Fields

#### `DesUpdateComponentItemParametersInput.componentId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Component identifier.

#### `DesUpdateComponentItemParametersInput.parameters` · [`[DesComponentItemParameterInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-component-item-parameter-input.md) non-null input library-management

Parameters to describe the component item.

#### `DesUpdateComponentItemParametersInput.replaceExisting` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Tells to replace all existing parameters. By default parameters are added to existing.
