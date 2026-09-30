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

#### `SupEvalKitParameterInput.parameter` · [`SupEvalKitParameterInfoInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-parameter-info-input.md) non-null input supply

Identifies the parameter by its title (case-sensitive).

#### `SupEvalKitParameterInput.values` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The values for this parameter.
