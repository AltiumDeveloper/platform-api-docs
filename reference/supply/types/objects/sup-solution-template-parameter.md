---
title: "SupSolutionTemplateParameter"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-parameter"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateParameter

### Member Of

[`SupSolutionTemplateApplicationParameterBundle`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-application-parameter-bundle.md) object · [`SupSolutionTemplateParameterBundle`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-parameter-bundle.md) object

```graphql
type SupSolutionTemplateParameter {
  info: SupSolutionTemplateParameterInfo
  title: String!
}
```

### Fields

#### `SupSolutionTemplateParameter.info` · [`SupSolutionTemplateParameterInfo`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-parameter-info.md) object supply

Details about the parameter.

#### `SupSolutionTemplateParameter.title` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The parameter title.
