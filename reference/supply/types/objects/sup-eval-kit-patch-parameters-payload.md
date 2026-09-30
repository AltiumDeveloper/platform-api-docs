---
title: "SupEvalKitPatchParametersPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-patch-parameters-payload"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupEvalKitPatchParametersPayload

Payload returned after patching parameters on an evaluation kit.

### Returned By

[`supEvalKitPatchParameters`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-eval-kit-patch-parameters.md) mutation

```graphql
type SupEvalKitPatchParametersPayload {
  errors: [SupEvalKitPatchParametersError!]
  success: Boolean
}
```

### Fields

#### `SupEvalKitPatchParametersPayload.errors` · [`[SupEvalKitPatchParametersError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-eval-kit-patch-parameters-error.md) list union supply

#### `SupEvalKitPatchParametersPayload.success` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Return true if operation succeeded.
