---
title: "SysSdmPort"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-port"
bounded_context: "System Design"
kind: "objects"
experimental: true
deprecated: false
---

# SysSdmPort

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Common Data Model

- [Port](https://altiumdeveloper.github.io/cdm/classes/sys_SdmPort/) — Represents a port within a system design.

### Member Of

[`SysSdmFunctionalBlock`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-functional-block.md) object

```graphql
type SysSdmPort {
  hardwareComponentId: String
  id: String!
  name: String
  parameters: [SysSdmParameter!]
  peripheralInstanceId: String
  portType: String
  sdmReferenceDesignator: String!
  softwareComponentId: String
}
```

### Fields

#### `SysSdmPort.hardwareComponentId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SysSdmPort.id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SysSdmPort.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SysSdmPort.parameters` · [`[SysSdmParameter!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-parameter.md) list object system-design

#### `SysSdmPort.peripheralInstanceId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SysSdmPort.portType` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SysSdmPort.sdmReferenceDesignator` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SysSdmPort.softwareComponentId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common
