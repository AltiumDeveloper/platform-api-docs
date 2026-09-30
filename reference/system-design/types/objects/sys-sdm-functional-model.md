---
title: "SysSdmFunctionalModel"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-functional-model"
bounded_context: "System Design"
kind: "objects"
experimental: true
deprecated: false
---

# SysSdmFunctionalModel

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Common Data Model

- [Functional Model](https://altiumdeveloper.github.io/cdm/classes/sys_SdmFunctionalModel/) — Captures the functional aspects of the system design, focusing on the behavior and interactions of functional blocks.

### Member Of

[`SysSdmSystemModelVersion`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-system-model-version.md) object

```graphql
type SysSdmFunctionalModel {
  connections: [SysSdmConnection!]
  functionalBlocks: [SysSdmFunctionalBlock!]
  id: String!
  implementedBy: String
  name: String
}
```

### Fields

#### `SysSdmFunctionalModel.connections` · [`[SysSdmConnection!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-connection.md) list object system-design

#### `SysSdmFunctionalModel.functionalBlocks` · [`[SysSdmFunctionalBlock!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-functional-block.md) list object system-design

#### `SysSdmFunctionalModel.id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SysSdmFunctionalModel.implementedBy` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SysSdmFunctionalModel.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common
