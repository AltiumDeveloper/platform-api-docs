---
title: "DesComponentItemParameterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-component-item-parameter-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesComponentItemParameterInput

Input for the parametric details of a component.

### Member Of

[`DesUpdateComponentItemParametersInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-update-component-item-parameters-input.md) input

```graphql
input DesComponentItemParameterInput {
  name: String!
  realValue: String
  type: DesParameterType
  value: String!
}
```

### Fields

#### `DesComponentItemParameterInput.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Component item parameter name.

#### `DesComponentItemParameterInput.realValue` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Component item parameter real value in scientific notation.

#### `DesComponentItemParameterInput.type` · [`DesParameterType`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/enums/des-parameter-type.md) enum library-management

Component item parameter type. Defaults to text if omitted.

#### `DesComponentItemParameterInput.value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Component item parameter value.
