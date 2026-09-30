---
title: "SupSolutionTemplateCreateParameterValueInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-create-parameter-value-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateCreateParameterValueInput

### Member Of

[`SupSolutionTemplateApplicationCreateParameterBundleInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-application-create-parameter-bundle-input.md) input · [`SupSolutionTemplateApplicationUpdateParameterBundleInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-application-update-parameter-bundle-input.md) input

```graphql
input SupSolutionTemplateCreateParameterValueInput {
  info: SupSolutionTemplateCreateParameterInfoInput
  name: String!
  value: String!
}
```

### Fields

#### `SupSolutionTemplateCreateParameterValueInput.info` · [`SupSolutionTemplateCreateParameterInfoInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-create-parameter-info-input.md) input supply

The parameter info identifier by parameter's title.

#### `SupSolutionTemplateCreateParameterValueInput.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of this parameter value.

#### `SupSolutionTemplateCreateParameterValueInput.value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The value of this parameter value.
