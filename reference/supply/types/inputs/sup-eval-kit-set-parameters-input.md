---
title: "SupEvalKitSetParametersInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-set-parameters-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitSetParametersInput

Input for replacing all parameters on an evaluation kit.

### Member Of

[`supEvalKitSetParameters`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-eval-kit-set-parameters.md) mutation

```graphql
input SupEvalKitSetParametersInput {
  evaluationKitId: ID!
  parameters: [SupEvalKitParameterInput!]
}
```

### Fields

#### `evaluationKitId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifier of the evaluation kit.

#### `parameters` · [`[SupEvalKitParameterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-parameter-input.md) list input

The complete new set of parameters. Deletes all existing parameters and values, then inserts these.
