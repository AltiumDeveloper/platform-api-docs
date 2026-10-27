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

- [Port](https://w3id.org/altium/cdm/system/SdmPort) — Represents a port within a system design. It is a logical interface of a functional block, distinct from dm\_Port, which is a physical port of a device.
  - IRI: [`https://w3id.org/altium/cdm/system/SdmPort`](https://w3id.org/altium/cdm/system/SdmPort)

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

#### `hardwareComponentId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `parameters` · [`[SysSdmParameter!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-parameter.md) list object

#### `peripheralInstanceId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `portType` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `sdmReferenceDesignator` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `softwareComponentId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar
