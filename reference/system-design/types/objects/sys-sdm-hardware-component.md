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

- [Hardware Component](https://w3id.org/altium/cdm/system/SdmHardwareComponent) — Represents a hardware component / part.
  - IRI: [`https://w3id.org/altium/cdm/system/SdmHardwareComponent`](https://w3id.org/altium/cdm/system/SdmHardwareComponent)

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

#### `deviceModelId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `parameters` · [`[SysSdmParameter!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-parameter.md) list object

#### `sdmReferenceDesignator` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
