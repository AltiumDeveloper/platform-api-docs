---
title: "SupEvalKitParameterInfoInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-parameter-info-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitParameterInfoInput

Identifies a parameter by its title.

### Member Of

[`SupEvalKitParameterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-parameter-input.md) input · [`SupEvalKitPatchParametersInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-patch-parameters-input.md) input

```graphql
input SupEvalKitParameterInfoInput {
  title: String!
}
```

### Fields

#### `title` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The title of the parameter (case-sensitive).
