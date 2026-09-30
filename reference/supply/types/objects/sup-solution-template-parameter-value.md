---
title: "SupSolutionTemplateParameterValue"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-parameter-value"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateParameterValue

### Member Of

[`SupSolutionTemplateApplicationParameterBundle`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-application-parameter-bundle.md) object · [`SupSolutionTemplateParameterBundle`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-parameter-bundle.md) object

```graphql
type SupSolutionTemplateParameterValue {
  info: SupSolutionTemplateParameterInfo
  name: String!
  value: String!
}
```

### Fields

#### `SupSolutionTemplateParameterValue.info` · [`SupSolutionTemplateParameterInfo`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-parameter-info.md) object supply

Details about the parameter.

#### `SupSolutionTemplateParameterValue.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of this parameter value.

#### `SupSolutionTemplateParameterValue.value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The value of this parameter value.
