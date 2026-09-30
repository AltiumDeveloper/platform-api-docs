---
title: "SupSolutionTemplateCreateParameterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-create-parameter-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateCreateParameterInput

### Member Of

[`SupSolutionTemplateApplicationCreateParameterBundleInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-application-create-parameter-bundle-input.md) input

```graphql
input SupSolutionTemplateCreateParameterInput {
  info: SupSolutionTemplateCreateParameterInfoInput
  title: String!
}
```

### Fields

#### `SupSolutionTemplateCreateParameterInput.info` · [`SupSolutionTemplateCreateParameterInfoInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-create-parameter-info-input.md) input supply

The parameter info identifier by parameter's title.

#### `SupSolutionTemplateCreateParameterInput.title` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The parameter title.
