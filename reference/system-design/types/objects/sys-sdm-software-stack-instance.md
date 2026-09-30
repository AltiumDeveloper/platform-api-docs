---
title: "SysSdmSoftwareStackInstance"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-software-stack-instance"
bounded_context: "System Design"
kind: "objects"
experimental: true
deprecated: false
---

# SysSdmSoftwareStackInstance

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Common Data Model

- [Software Stack Instance](https://altiumdeveloper.github.io/cdm/classes/sys_SdmSoftwareStackInstance/) — Represents a software stack instance and its dependencies.

### Member Of

[`SysSdmSoftwareModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-software-model.md) object

```graphql
type SysSdmSoftwareStackInstance {
  dependencyIds: [String!]!
  id: String!
  name: String
  parameters: [SysSdmParameter!]
  peripheralInstanceId: String
  specification: SysSdmSoftwareSpecification!
}
```

### Fields

#### `SysSdmSoftwareStackInstance.dependencyIds` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SysSdmSoftwareStackInstance.id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SysSdmSoftwareStackInstance.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SysSdmSoftwareStackInstance.parameters` · [`[SysSdmParameter!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-parameter.md) list object system-design

#### `SysSdmSoftwareStackInstance.peripheralInstanceId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SysSdmSoftwareStackInstance.specification` · [`SysSdmSoftwareSpecification!`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-software-specification.md) non-null object system-design
