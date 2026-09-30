---
title: "SupEvalKitUnsetMainRefDesignPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-unset-main-ref-design-payload"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupEvalKitUnsetMainRefDesignPayload

Payload returned after unsetting the main reference design of an evaluation kit.

### Returned By

[`supEvalKitUnsetMainRefDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-eval-kit-unset-main-ref-design.md) mutation

```graphql
type SupEvalKitUnsetMainRefDesignPayload {
  errors: [SupEvalKitUnsetMainRefDesignError!]
  success: Boolean
}
```

### Fields

#### `SupEvalKitUnsetMainRefDesignPayload.errors` · [`[SupEvalKitUnsetMainRefDesignError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-eval-kit-unset-main-ref-design-error.md) list union supply

#### `SupEvalKitUnsetMainRefDesignPayload.success` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Return true if operation succeeded.
