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

#### `order` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The display order of the parameter bundle.

#### `parameter` · [`SupSolutionTemplateParameter!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-parameter.md) non-null object

Details about the parameter of the parameter bundle.

#### `question` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The content of the question associated with this parameter bundle.

#### `required` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Indicates whether the parameter bundle is mandatory.

#### `values` · [`[SupSolutionTemplateParameterValue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-parameter-value.md) non-null object

The parameter's list of values.
