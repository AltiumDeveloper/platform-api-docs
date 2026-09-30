---
title: "SupEvalKitDeleteDevicesPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-delete-devices-payload"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupEvalKitDeleteDevicesPayload

Payload returned after deleting devices from an evaluation kit.

### Returned By

[`supEvalKitDeleteDevices`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-eval-kit-delete-devices.md) mutation

```graphql
type SupEvalKitDeleteDevicesPayload {
  errors: [SupEvalKitDeleteDevicesError!]
  success: Boolean
}
```

### Fields

#### `SupEvalKitDeleteDevicesPayload.errors` · [`[SupEvalKitDeleteDevicesError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-eval-kit-delete-devices-error.md) list union supply

#### `SupEvalKitDeleteDevicesPayload.success` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Return true if operation succeeded.
