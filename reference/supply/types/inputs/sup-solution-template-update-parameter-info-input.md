---
title: "SupSolutionTemplateUpdateParameterInfoInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-update-parameter-info-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateUpdateParameterInfoInput

### Member Of

[`SupSolutionTemplateUpdateParameterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-update-parameter-input.md) input

```graphql
input SupSolutionTemplateUpdateParameterInfoInput {
  description: String!
  imageUrl: String
  summary: String
}
```

### Fields

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A detailed explanation of the parameter.

#### `imageUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The URL of the image associated with this parameter.

#### `summary` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

A brief summary of the parameter.
