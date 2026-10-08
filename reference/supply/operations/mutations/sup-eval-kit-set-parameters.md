---
title: "supEvalKitSetParameters"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-eval-kit-set-parameters"
bounded_context: "Supply"
kind: "mutations"
experimental: false
deprecated: false
---

# supEvalKitSetParameters

Replace all parameters on an evaluation kit. Deletes all existing parameters and values, then inserts the new ones.

### Type

#### [`SupEvalKitSetParametersPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-set-parameters-payload.md) object

Payload returned after setting parameters on an evaluation kit.

```graphql
supEvalKitSetParameters(
  input: SupEvalKitSetParametersInput!
): SupEvalKitSetParametersPayload!
```

### Arguments

#### `input` · [`SupEvalKitSetParametersInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-set-parameters-input.md) non-null input
