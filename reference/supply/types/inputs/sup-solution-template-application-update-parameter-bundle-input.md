---
title: "SupSolutionTemplateApplicationUpdateParameterBundleInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-application-update-parameter-bundle-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateApplicationUpdateParameterBundleInput

### Member Of

[`SupSolutionTemplateUpdateSolutionTemplateApplicationInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-update-solution-template-application-input.md) input

```graphql
input SupSolutionTemplateApplicationUpdateParameterBundleInput {
  newValues: [SupSolutionTemplateCreateParameterValueInput!]
  order: Int
  parameter: SupSolutionTemplateUpdateParameterInput!
  question: String!
  required: Boolean
}
```

### Fields

#### `newValues` · [`[SupSolutionTemplateCreateParameterValueInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-create-parameter-value-input.md) list input

Replace the parameter values with these ones.

#### `order` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

The order of the parameter in the bundle.

#### `parameter` · [`SupSolutionTemplateUpdateParameterInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-update-parameter-input.md) non-null input

The parameter info identifier by parameter's title.

#### `question` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `required` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Indicates whether the parameter bundle is required.
