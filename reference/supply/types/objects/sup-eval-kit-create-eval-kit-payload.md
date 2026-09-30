---
title: "SupEvalKitCreateEvalKitPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-create-eval-kit-payload"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupEvalKitCreateEvalKitPayload

Payload associated with creating a evaluation kit.

### Returned By

[`supEvalKitCreateEvalKit`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-eval-kit-create-eval-kit.md) mutation

```graphql
type SupEvalKitCreateEvalKitPayload {
  errors: [SupEvalKitCreateEvalKitError!]
  id: ID
}
```

### Fields

#### `SupEvalKitCreateEvalKitPayload.errors` · [`[SupEvalKitCreateEvalKitError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-eval-kit-create-eval-kit-error.md) list union supply

#### `SupEvalKitCreateEvalKitPayload.id` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

Evaluation kit identifier.
