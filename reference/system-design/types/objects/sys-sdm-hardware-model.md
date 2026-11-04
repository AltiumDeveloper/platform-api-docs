---
title: "SysSdmHardwareModel"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-hardware-model"
bounded_context: "System Design"
kind: "objects"
experimental: false
deprecated: false
---

# SysSdmHardwareModel

### Common Data Model

- [Hardware Model](https://w3id.org/altium/cdm/system/SdmHardwareModel) — Captures the hardware components and their interactions within the system design.
  - IRI: [`https://w3id.org/altium/cdm/system/SdmHardwareModel`](https://w3id.org/altium/cdm/system/SdmHardwareModel)

### Member Of

[`SysSdmSystemModelVersion`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-system-model-version.md) object

```graphql
type SysSdmHardwareModel {
  functionalBlockIds: [String!]
  hardwareComponents: [SysSdmHardwareComponent!]
  id: ID!
  implementedBy: String
  name: String
  sdmReferenceDesignator: String!
}
```

### Fields

#### `functionalBlockIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

#### `hardwareComponents` · [`[SysSdmHardwareComponent!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-hardware-component.md) list object

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `implementedBy` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `sdmReferenceDesignator` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
