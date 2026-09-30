---
title: "SupEvalKitAddDevicesInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-add-devices-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitAddDevicesInput

Input for adding devices to an evaluation kit.

### Member Of

[`supEvalKitAddDevices`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-eval-kit-add-devices.md) mutation

```graphql
input SupEvalKitAddDevicesInput {
  devices: [SupEvalKitDeviceInput!]!
  evalKitId: ID!
}
```

### Fields

#### `SupEvalKitAddDevicesInput.devices` · [`[SupEvalKitDeviceInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-device-input.md) non-null input supply

The list of devices to add.

#### `SupEvalKitAddDevicesInput.evalKitId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The unique identifier of the evaluation kit.
