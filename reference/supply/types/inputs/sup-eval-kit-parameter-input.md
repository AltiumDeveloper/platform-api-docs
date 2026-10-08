---
title: "SupEvalKitParameterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-parameter-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitParameterInput

A parameter and its values.

### Member Of

[`SupEvalKitPatchParametersInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-patch-parameters-input.md) input · [`SupEvalKitSetParametersInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-set-parameters-input.md) input

```graphql
input SupEvalKitParameterInput {
  parameter: SupEvalKitParameterInfoInput!
  values: [String!]!
}
```

### Fields

#### `parameter` · [`SupEvalKitParameterInfoInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-parameter-info-input.md) non-null input

Identifies the parameter by its title (case-sensitive).

#### `values` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The values for this parameter.
