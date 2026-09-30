---
title: "SupEvalKitPatchParametersInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-patch-parameters-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitPatchParametersInput

Input for patching parameters on an evaluation kit.

### Member Of

[`supEvalKitPatchParameters`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-eval-kit-patch-parameters.md) mutation

```graphql
input SupEvalKitPatchParametersInput {
  addParameters: [SupEvalKitParameterInput!]
  evaluationKitId: ID!
  removeParameters: [SupEvalKitParameterInfoInput!]
}
```

### Fields

#### `SupEvalKitPatchParametersInput.addParameters` · [`[SupEvalKitParameterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-parameter-input.md) list input supply

Parameters to add or update. Creates the parameter if new, replaces its values if it already exists.

#### `SupEvalKitPatchParametersInput.evaluationKitId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The unique identifier of the evaluation kit.

#### `SupEvalKitPatchParametersInput.removeParameters` · [`[SupEvalKitParameterInfoInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-parameter-info-input.md) list input supply

Titles of parameters to remove entirely from this evaluation kit.
