---
title: "SysSdmSoftwareSpecification"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-software-specification"
bounded_context: "System Design"
kind: "objects"
experimental: true
deprecated: false
---

# SysSdmSoftwareSpecification

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Common Data Model

- [Software Specification](https://altiumdeveloper.github.io/cdm/classes/sys_SdmSoftwareSpecification/) — The "blueprint" for a software component. Captures the identity and classification of the software independently of any specific instance.

### Member Of

[`SysSdmSoftwareStackInstance`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-software-stack-instance.md) object

```graphql
type SysSdmSoftwareSpecification {
  category: SysSdmSoftwareComponentCategory
  ecosystem: String
  name: String
  vendor: String
  version: String
}
```

### Fields

#### `SysSdmSoftwareSpecification.category` · [`SysSdmSoftwareComponentCategory`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/enums/sys-sdm-software-component-category.md) enum system-design

#### `SysSdmSoftwareSpecification.ecosystem` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SysSdmSoftwareSpecification.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SysSdmSoftwareSpecification.vendor` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SysSdmSoftwareSpecification.version` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common
