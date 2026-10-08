---
title: "SupEvalKitAddDevicesPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-add-devices-payload"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupEvalKitAddDevicesPayload

Payload returned after adding devices to the evaluation kit.

### Returned By

[`supEvalKitAddDevices`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-eval-kit-add-devices.md) mutation

```graphql
type SupEvalKitAddDevicesPayload {
  errors: [SupEvalKitAddDevicesError!]
  success: Boolean
}
```

### Fields

#### `errors` · [`[SupEvalKitAddDevicesError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-eval-kit-add-devices-error.md) list union

#### `success` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Return true if operation succeeded.
