---
title: "SysSdmHardwareComponent"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-hardware-component"
bounded_context: "System Design"
kind: "objects"
experimental: true
deprecated: false
---

# SysSdmHardwareComponent

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Common Data Model

- [Hardware Component](https://altiumdeveloper.github.io/cdm/classes/sys_SdmHardwareComponent/) — Represents a hardware component / part.

### Member Of

[`SysSdmHardwareModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-hardware-model.md) object

```graphql
type SysSdmHardwareComponent {
  deviceModelId: String
  id: String!
  name: String
  parameters: [SysSdmParameter!]
  sdmReferenceDesignator: String!
}
```

### Fields

#### `SysSdmHardwareComponent.deviceModelId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SysSdmHardwareComponent.id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SysSdmHardwareComponent.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SysSdmHardwareComponent.parameters` · [`[SysSdmParameter!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-parameter.md) list object system-design

#### `SysSdmHardwareComponent.sdmReferenceDesignator` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common
