---
title: "SysSdmDmPeripheralInstance"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-dm-peripheral-instance"
bounded_context: "System Design"
kind: "objects"
experimental: true
deprecated: false
---

# SysSdmDmPeripheralInstance

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`SysSdmPeripheral`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-peripheral.md) object

```graphql
type SysSdmDmPeripheralInstance {
  id: String!
  interfaceType: String
  modes: [SysSdmDmPeripheralMode!]
  name: String
  unit: String
  virtualization: SysSdmDmPeripheralVirtualization
}
```

### Fields

#### `SysSdmDmPeripheralInstance.id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SysSdmDmPeripheralInstance.interfaceType` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SysSdmDmPeripheralInstance.modes` · [`[SysSdmDmPeripheralMode!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-dm-peripheral-mode.md) list object system-design

#### `SysSdmDmPeripheralInstance.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SysSdmDmPeripheralInstance.unit` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SysSdmDmPeripheralInstance.virtualization` · [`SysSdmDmPeripheralVirtualization`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/enums/sys-sdm-dm-peripheral-virtualization.md) enum system-design
