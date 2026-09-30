---
title: "SupSolutionTemplateApplicationCreateParameterBundleInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-application-create-parameter-bundle-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateApplicationCreateParameterBundleInput

### Member Of

[`SupSolutionTemplateCreateSolutionTemplateApplicationInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-create-solution-template-application-input.md) input · [`SupSolutionTemplateUpdateSolutionTemplateApplicationInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-update-solution-template-application-input.md) input

```graphql
input SupSolutionTemplateApplicationCreateParameterBundleInput {
  order: Int!
  parameter: SupSolutionTemplateCreateParameterInput!
  question: String!
  required: Boolean!
  values: [SupSolutionTemplateCreateParameterValueInput!]!
}
```

### Fields

#### `SupSolutionTemplateApplicationCreateParameterBundleInput.order` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

The display order of the parameter bundle.

#### `SupSolutionTemplateApplicationCreateParameterBundleInput.parameter` · [`SupSolutionTemplateCreateParameterInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-create-parameter-input.md) non-null input supply

The parameter associated with the bundle.

#### `SupSolutionTemplateApplicationCreateParameterBundleInput.question` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SupSolutionTemplateApplicationCreateParameterBundleInput.required` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Indicates whether the parameter bundle is required.

#### `SupSolutionTemplateApplicationCreateParameterBundleInput.values` · [`[SupSolutionTemplateCreateParameterValueInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-create-parameter-value-input.md) non-null input supply

The list of values for the parameter.
