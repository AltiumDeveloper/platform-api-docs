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

#### `componentId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Component identifier.

#### `parameters` · [`[DesComponentItemParameterInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-component-item-parameter-input.md) non-null input

Parameters to describe the component item.

#### `replaceExisting` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Tells to replace all existing parameters. By default parameters are added to existing.
