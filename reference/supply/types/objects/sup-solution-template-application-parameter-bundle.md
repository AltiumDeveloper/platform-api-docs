---
title: "SupSolutionTemplateApplicationParameterBundle"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-application-parameter-bundle"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateApplicationParameterBundle

### Member Of

[`SupSolutionTemplateApplication`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-application.md) object

```graphql
type SupSolutionTemplateApplicationParameterBundle {
  order: Int!
  parameter: SupSolutionTemplateParameter!
  question: String!
  required: Boolean!
  values: [SupSolutionTemplateParameterValue!]!
}
```

### Fields

#### `SupSolutionTemplateApplicationParameterBundle.order` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

The display order of the parameter bundle.

#### `SupSolutionTemplateApplicationParameterBundle.parameter` · [`SupSolutionTemplateParameter!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-parameter.md) non-null object supply

Details about the parameter of the parameter bundle.

#### `SupSolutionTemplateApplicationParameterBundle.question` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The content of the question associated with this parameter bundle.

#### `SupSolutionTemplateApplicationParameterBundle.required` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Indicates whether the parameter bundle is mandatory.

#### `SupSolutionTemplateApplicationParameterBundle.values` · [`[SupSolutionTemplateParameterValue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-parameter-value.md) non-null object supply

The parameter's list of values.
