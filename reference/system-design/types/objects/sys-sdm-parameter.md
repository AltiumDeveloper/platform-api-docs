---
title: "SysSdmParameter"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-parameter"
bounded_context: "System Design"
kind: "objects"
experimental: true
deprecated: false
---

# SysSdmParameter

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`SysSdmConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-connection.md) object · [`SysSdmFunctionalBlock`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-functional-block.md) object · [`SysSdmHardwareComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-hardware-component.md) object · [`SysSdmPort`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-port.md) object · [`SysSdmSoftwareComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-software-component.md) object · [`SysSdmSoftwareStackInstance`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-software-stack-instance.md) object

```graphql
type SysSdmParameter {
  id: String!
  name: String
  value: String!
}
```

### Fields

#### `SysSdmParameter.id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SysSdmParameter.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SysSdmParameter.value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common
