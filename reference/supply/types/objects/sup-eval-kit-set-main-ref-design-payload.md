---
title: "SupEvalKitSetMainRefDesignPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-set-main-ref-design-payload"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupEvalKitSetMainRefDesignPayload

Payload returned after setting the main reference design of an evaluation kit.

### Returned By

[`supEvalKitSetMainRefDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-eval-kit-set-main-ref-design.md) mutation

```graphql
type SupEvalKitSetMainRefDesignPayload {
  errors: [SupEvalKitSetMainRefDesignError!]
  success: Boolean
}
```

### Fields

#### `errors` · [`[SupEvalKitSetMainRefDesignError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-eval-kit-set-main-ref-design-error.md) list union

#### `success` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Return true if operation succeeded.
