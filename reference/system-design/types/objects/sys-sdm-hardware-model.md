---
title: "SysSdmHardwareModel"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-hardware-model"
bounded_context: "System Design"
kind: "objects"
experimental: true
deprecated: false
---

# SysSdmHardwareModel

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Common Data Model

- [Hardware Model](https://altiumdeveloper.github.io/cdm/classes/sys_SdmHardwareModel/) — Captures the hardware components and their interactions within the system design.

### Member Of

[`SysSdmSystemModelVersion`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-system-model-version.md) object

```graphql
type SysSdmHardwareModel {
  functionalBlockIds: [String!]
  hardwareComponents: [SysSdmHardwareComponent!]
  id: String!
  implementedBy: String
  name: String
  sdmReferenceDesignator: String!
}
```

### Fields

#### `SysSdmHardwareModel.functionalBlockIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

#### `SysSdmHardwareModel.hardwareComponents` · [`[SysSdmHardwareComponent!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-hardware-component.md) list object system-design

#### `SysSdmHardwareModel.id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SysSdmHardwareModel.implementedBy` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SysSdmHardwareModel.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SysSdmHardwareModel.sdmReferenceDesignator` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common
