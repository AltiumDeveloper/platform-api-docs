---
title: "SysSdmPeripheral"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-peripheral"
bounded_context: "System Design"
kind: "objects"
experimental: false
deprecated: false
---

# SysSdmPeripheral

### Member Of

[`SysSdmDeviceModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-device-model.md) object

```graphql
type SysSdmPeripheral {
  id: ID!
  instances: [SysSdmDmPeripheralInstance!]
  name: String
}
```

### Fields

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `instances` · [`[SysSdmDmPeripheralInstance!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-dm-peripheral-instance.md) list object

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar
