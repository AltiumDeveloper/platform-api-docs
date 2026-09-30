---
title: "SysSdmFunctionalBlock"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-functional-block"
bounded_context: "System Design"
kind: "objects"
experimental: true
deprecated: false
---

# SysSdmFunctionalBlock

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Common Data Model

- [Functional Block](https://altiumdeveloper.github.io/cdm/classes/sys_SdmFunctionalBlock/) — Represents a logical block within a system functional model.

### Member Of

[`SysSdmFunctionalModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-functional-model.md) object

```graphql
type SysSdmFunctionalBlock {
  hardwareComponentIds: [String!]
  id: String!
  name: String
  parameters: [SysSdmParameter!]
  ports: [SysSdmPort!]
  sdmReferenceDesignator: String!
}
```

### Fields

#### `SysSdmFunctionalBlock.hardwareComponentIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

#### `SysSdmFunctionalBlock.id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SysSdmFunctionalBlock.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SysSdmFunctionalBlock.parameters` · [`[SysSdmParameter!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-parameter.md) list object system-design

#### `SysSdmFunctionalBlock.ports` · [`[SysSdmPort!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-port.md) list object system-design

#### `SysSdmFunctionalBlock.sdmReferenceDesignator` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common
