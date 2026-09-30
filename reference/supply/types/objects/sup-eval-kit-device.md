---
title: "SupEvalKitDevice"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-device"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupEvalKitDevice

### Member Of

[`SupEvalKit`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit.md) object

```graphql
type SupEvalKitDevice {
  designProject: SupRefDesign!
  deviceMpn: String!
  refDesignId: ID! @deprecated
}
```

### Fields

#### `SupEvalKitDevice.designProject` · [`SupRefDesign!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design.md) non-null object supply

The reference design associated with device.

#### `SupEvalKitDevice.deviceMpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Device part number.

#### Deprecated

#### `SupEvalKitDevice.refDesignId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** non-null scalar common

> **Deprecated:** Fields play a technical role for schema stitching purposes.
