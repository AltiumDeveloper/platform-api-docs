---
title: "SysSdmDeviceModel"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-device-model"
bounded_context: "System Design"
kind: "objects"
experimental: false
deprecated: false
---

# SysSdmDeviceModel

### Common Data Model

- [Device Model](https://w3id.org/altium/cdm/system/SdmDeviceModel) — Represents a device model within the system design.
  - IRI: [`https://w3id.org/altium/cdm/system/SdmDeviceModel`](https://w3id.org/altium/cdm/system/SdmDeviceModel)

### Member Of

[`SysSdmSystemModelVersion`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-system-model-version.md) object

```graphql
type SysSdmDeviceModel {
  boardName: String
  id: ID!
  mpn: String!
  peripherals: [SysSdmPeripheral!]
  ports: [SysSdmDmPort!]
}
```

### Fields

#### `boardName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `mpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `peripherals` · [`[SysSdmPeripheral!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-peripheral.md) list object

#### `ports` · [`[SysSdmDmPort!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-dm-port.md) list object
