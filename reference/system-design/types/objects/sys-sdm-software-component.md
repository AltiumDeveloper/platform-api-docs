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

- [Software Component](https://altiumdeveloper.github.io/cdm/classes/sys_SdmSoftwareComponent/) — Represents a software component instance and its dependencies.

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

#### `SysSdmSoftwareComponent.id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SysSdmSoftwareComponent.implementedBy` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

#### `SysSdmSoftwareComponent.libraryComponentId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SysSdmSoftwareComponent.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SysSdmSoftwareComponent.parameters` · [`[SysSdmParameter!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-parameter.md) list object system-design

#### `SysSdmSoftwareComponent.sdmReferenceDesignator` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common
