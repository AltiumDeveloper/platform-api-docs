---
title: "SupSolutionTemplateParameterBundle"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-parameter-bundle"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateParameterBundle

The parameter bundle's list of values.

### Member Of

[`SupSolutionTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template.md) object · [`SupSolutionTemplateCompatibleEvalKit`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-compatible-eval-kit.md) object

```graphql
type SupSolutionTemplateParameterBundle {
  parameter: SupSolutionTemplateParameter!
  values: [SupSolutionTemplateParameterValue!]!
}
```

### Fields

#### `SupSolutionTemplateParameterBundle.parameter` · [`SupSolutionTemplateParameter!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-parameter.md) non-null object supply

Details about the parameter of the parameter bundle.

#### `SupSolutionTemplateParameterBundle.values` · [`[SupSolutionTemplateParameterValue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-parameter-value.md) non-null object supply
