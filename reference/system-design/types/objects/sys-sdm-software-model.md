---
title: "SysSdmSoftwareModel"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-software-model"
bounded_context: "System Design"
kind: "objects"
experimental: true
deprecated: false
---

# SysSdmSoftwareModel

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Common Data Model

- [Software Model](https://w3id.org/altium/cdm/system/SdmSoftwareModel) — Captures the software components and their interactions within the system design.
  - IRI: [`https://w3id.org/altium/cdm/system/SdmSoftwareModel`](https://w3id.org/altium/cdm/system/SdmSoftwareModel)

### Member Of

[`SysSdmSystemModelVersion`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-system-model-version.md) object

```graphql
type SysSdmSoftwareModel {
  deviceModelId: String
  id: String!
  implementedBy: String
  name: String
  sdmReferenceDesignator: String!
  softwareComponents: [SysSdmSoftwareComponent!]
  softwareStackInstances: [SysSdmSoftwareStackInstance!]
}
```

### Fields

#### `deviceModelId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `implementedBy` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `sdmReferenceDesignator` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `softwareComponents` · [`[SysSdmSoftwareComponent!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-software-component.md) list object

#### `softwareStackInstances` · [`[SysSdmSoftwareStackInstance!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-software-stack-instance.md) list object
