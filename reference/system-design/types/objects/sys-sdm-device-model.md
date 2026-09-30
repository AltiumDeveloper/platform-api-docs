---
title: "SysSdmDeviceModel"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-device-model"
bounded_context: "System Design"
kind: "objects"
experimental: true
deprecated: false
---

# SysSdmDeviceModel

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Common Data Model

- [Device Model](https://altiumdeveloper.github.io/cdm/classes/sys_SdmDeviceModel/) — Represents a device model within the system design.

### Member Of

[`SysSdmSystemModelVersion`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-system-model-version.md) object

```graphql
type SysSdmDeviceModel {
  boardName: String
  id: String!
  mpn: String!
  peripherals: [SysSdmPeripheral!]
  ports: [SysSdmDmPort!]
}
```

### Fields

#### `SysSdmDeviceModel.boardName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SysSdmDeviceModel.id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SysSdmDeviceModel.mpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SysSdmDeviceModel.peripherals` · [`[SysSdmPeripheral!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-peripheral.md) list object system-design

#### `SysSdmDeviceModel.ports` · [`[SysSdmDmPort!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-dm-port.md) list object system-design
