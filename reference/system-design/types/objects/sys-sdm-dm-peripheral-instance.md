---
title: "SysSdmDmPeripheralInstance"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-dm-peripheral-instance"
bounded_context: "System Design"
kind: "objects"
experimental: false
deprecated: false
---

# SysSdmDmPeripheralInstance

### Member Of

[`SysSdmPeripheral`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-peripheral.md) object

```graphql
type SysSdmDmPeripheralInstance {
  id: ID!
  interfaceType: String
  modes: [SysSdmDmPeripheralMode!]
  name: String
  unit: String
  virtualization: SysSdmDmPeripheralVirtualization
}
```

### Fields

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `interfaceType` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `modes` · [`[SysSdmDmPeripheralMode!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-dm-peripheral-mode.md) list object

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `unit` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `virtualization` · [`SysSdmDmPeripheralVirtualization`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/enums/sys-sdm-dm-peripheral-virtualization.md) enum
