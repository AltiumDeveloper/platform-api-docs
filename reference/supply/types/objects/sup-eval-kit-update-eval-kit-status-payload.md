---
title: "SupEvalKitUpdateEvalKitStatusPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-update-eval-kit-status-payload"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupEvalKitUpdateEvalKitStatusPayload

Payload associated with updating the status of an evaluation kit.

### Returned By

[`supEvalKitUpdateEvalKitStatus`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-eval-kit-update-eval-kit-status.md) mutation

```graphql
type SupEvalKitUpdateEvalKitStatusPayload {
  errors: [SupEvalKitUpdateEvalKitStatusError!]
}
```

### Fields

#### `errors` · [`[SupEvalKitUpdateEvalKitStatusError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-eval-kit-update-eval-kit-status-error.md) list union
