---
title: "SupEvalKitSetParametersPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-set-parameters-payload"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupEvalKitSetParametersPayload

Payload returned after setting parameters on an evaluation kit.

### Returned By

[`supEvalKitSetParameters`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-eval-kit-set-parameters.md) mutation

```graphql
type SupEvalKitSetParametersPayload {
  errors: [SupEvalKitSetParametersError!]
  success: Boolean
}
```

### Fields

#### `SupEvalKitSetParametersPayload.errors` · [`[SupEvalKitSetParametersError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-eval-kit-set-parameters-error.md) list union supply

#### `SupEvalKitSetParametersPayload.success` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Return true if operation succeeded.
