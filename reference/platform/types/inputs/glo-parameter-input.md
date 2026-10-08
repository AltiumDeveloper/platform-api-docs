---
title: "GloParameterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-parameter-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloParameterInput

### Member Of

[`GloCreateUserInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-create-user-input.md) input

```graphql
input GloParameterInput {
  name: String
  parameterId: String
  value: String
}
```

### Fields

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Parameter name.

#### `parameterId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Parameter identifier.

#### `value` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Parameter value.
