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

- [Software Stack Instance](https://w3id.org/altium/cdm/system/SdmSoftwareStackInstance) — Represents a software stack instance and its dependencies.
  - IRI: [`https://w3id.org/altium/cdm/system/SdmSoftwareStackInstance`](https://w3id.org/altium/cdm/system/SdmSoftwareStackInstance)

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

#### `dependencyIds` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `parameters` · [`[SysSdmParameter!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-parameter.md) list object

#### `peripheralInstanceId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `specification` · [`SysSdmSoftwareSpecification!`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-software-specification.md) non-null object
