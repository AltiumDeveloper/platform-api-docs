---
title: "SupEvalKitDeleteDevicesInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-delete-devices-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitDeleteDevicesInput

Input for deleting devices from an evaluation kit.

### Member Of

[`supEvalKitDeleteDevices`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-eval-kit-delete-devices.md) mutation

```graphql
input SupEvalKitDeleteDevicesInput {
  devices: [SupEvalKitDeviceInput!]!
  evalKitId: ID!
}
```

### Fields

#### `SupEvalKitDeleteDevicesInput.devices` · [`[SupEvalKitDeviceInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-device-input.md) non-null input supply

The list of devices to remove.

#### `SupEvalKitDeleteDevicesInput.evalKitId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The unique identifier of the evaluation kit.
