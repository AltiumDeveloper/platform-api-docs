---
title: "DesRevisionParameterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-revision-parameter-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesRevisionParameterInput

Input for revision parameter.

### Member Of

[`DesCreateFootprintInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-create-footprint-input.md) input · [`DesReleaseComponentInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-release-component-input.md) input · [`DesReleaseComponentTemplateInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-release-component-template-input.md) input · [`DesUpdateComponentRevisionParametersInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-update-component-revision-parameters-input.md) input

```graphql
input DesRevisionParameterInput {
  name: String!
  realValue: String
  type: DesParameterType
  value: String!
}
```

### Fields

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Revision parameter name.

#### `realValue` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Revision parameter real value in scientific notation.

#### `type` · [`DesParameterType`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/enums/des-parameter-type.md) enum

Revision parameter type. Defaults to text if omitted.

#### `value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Revision parameter value.
