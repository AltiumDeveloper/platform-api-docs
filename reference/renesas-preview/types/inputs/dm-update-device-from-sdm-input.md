---
title: "DmUpdateDeviceFromSdmInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/dm-update-device-from-sdm-input"
bounded_context: "Renesas (preview)"
kind: "inputs"
experimental: true
deprecated: false
---

# DmUpdateDeviceFromSdmInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`dmUpdateDeviceFromSdm`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/mutations/dm-update-device-from-sdm.md) mutation

```graphql
input DmUpdateDeviceFromSdmInput {
  deviceModelId: String!
  fileId: String!
  includeDiagnostics: Boolean
  requiredPeripherals: [DmRequiredPeripheralPayloadInput!]!
}
```

### Fields

#### `DmUpdateDeviceFromSdmInput.deviceModelId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `DmUpdateDeviceFromSdmInput.fileId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `DmUpdateDeviceFromSdmInput.includeDiagnostics` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

#### `DmUpdateDeviceFromSdmInput.requiredPeripherals` · [`[DmRequiredPeripheralPayloadInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/dm-required-peripheral-payload-input.md) non-null input renesas-preview
