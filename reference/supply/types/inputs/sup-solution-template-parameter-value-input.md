---
title: "SupSolutionTemplateParameterValueInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-parameter-value-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateParameterValueInput

### Member Of

[`SupSolutionTemplateParameterBundleInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-parameter-bundle-input.md) input

```graphql
input SupSolutionTemplateParameterValueInput {
  name: String!
  value: String!
}
```

### Fields

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier used to look up the parameter value by its pair of name and value.

#### `value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier used to look up the parameter value by its pair of name and value.
