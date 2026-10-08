---
title: "SysSdmSoftwareComponent"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-software-component"
bounded_context: "System Design"
kind: "objects"
experimental: true
deprecated: false
---

# SysSdmSoftwareComponent

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Common Data Model

- [Software Component](https://w3id.org/altium/cdm/system/SdmSoftwareComponent) — Represents a software component instance and its dependencies.
  - IRI: [`https://w3id.org/altium/cdm/system/SdmSoftwareComponent`](https://w3id.org/altium/cdm/system/SdmSoftwareComponent)

### Member Of

[`SysSdmSoftwareModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-software-model.md) object

```graphql
type SysSdmSoftwareComponent {
  id: String!
  implementedBy: [String!]
  libraryComponentId: String
  name: String
  parameters: [SysSdmParameter!]
  sdmReferenceDesignator: String!
}
```

### Fields

#### `id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `implementedBy` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

#### `libraryComponentId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `parameters` · [`[SysSdmParameter!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-parameter.md) list object

#### `sdmReferenceDesignator` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
