---
title: "SupEvalKitDeviceInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-device-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitDeviceInput

Input type for device mutation.

### Member Of

[`SupEvalKitAddDevicesInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-add-devices-input.md) input · [`SupEvalKitDeleteDevicesInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-delete-devices-input.md) input

```graphql
input SupEvalKitDeviceInput {
  deviceMpn: String!
  refDesignId: ID!
}
```

### Fields

#### `SupEvalKitDeviceInput.deviceMpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The manufacturer part number of the device.

#### `SupEvalKitDeviceInput.refDesignId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The unique identifier of the reference design.
