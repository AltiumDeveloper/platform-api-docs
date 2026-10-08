---
title: "DesProjectParameterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-project-parameter-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesProjectParameterInput

Input for the parametric details of a project.

### Member Of

[`DesUpdateProjectParametersInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-update-project-parameters-input.md) input

```graphql
input DesProjectParameterInput {
  name: String!
  value: String!
}
```

### Fields

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Project parameter name.

#### `value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Project parameter value.
