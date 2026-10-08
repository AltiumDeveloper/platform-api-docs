---
title: "supEvalKitPatchParameters"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-eval-kit-patch-parameters"
bounded_context: "Supply"
kind: "mutations"
experimental: false
deprecated: false
---

# supEvalKitPatchParameters

Add or remove parameters on an evaluation kit. Replaces values of existing parameters.

### Type

#### [`SupEvalKitPatchParametersPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-patch-parameters-payload.md) object

Payload returned after patching parameters on an evaluation kit.

```graphql
supEvalKitPatchParameters(
  input: SupEvalKitPatchParametersInput!
): SupEvalKitPatchParametersPayload!
```

### Arguments

#### `input` · [`SupEvalKitPatchParametersInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-patch-parameters-input.md) non-null input
