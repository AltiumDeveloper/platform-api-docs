---
title: "SupSolutionTemplateCreateParameterInfoInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-create-parameter-info-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateCreateParameterInfoInput

### Member Of

[`SupSolutionTemplateCreateParameterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-create-parameter-input.md) input · [`SupSolutionTemplateCreateParameterValueInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-create-parameter-value-input.md) input

```graphql
input SupSolutionTemplateCreateParameterInfoInput {
  description: String!
  imageUrl: String
  summary: String
}
```

### Fields

#### `SupSolutionTemplateCreateParameterInfoInput.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

A detailed explanation of the parameter.

#### `SupSolutionTemplateCreateParameterInfoInput.imageUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The URL of the image associated with this parameter.

#### `SupSolutionTemplateCreateParameterInfoInput.summary` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

A brief summary of the parameter.
