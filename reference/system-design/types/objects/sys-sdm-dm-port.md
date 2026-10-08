---
title: "SysSdmDmPort"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-dm-port"
bounded_context: "System Design"
kind: "objects"
experimental: true
deprecated: false
---

# SysSdmDmPort

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`SysSdmDeviceModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-device-model.md) object

```graphql
type SysSdmDmPort {
  configurations: [SysSdmDmPortConfiguration!]
  connections: [SysSdmDmPortConnection!]
  description: String
  functions: [SysSdmDmPortFunction!]
  id: String!
  name: String
  pin: String
  symbolicName: String
}
```

### Fields

#### `configurations` · [`[SysSdmDmPortConfiguration!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-dm-port-configuration.md) list object

#### `connections` · [`[SysSdmDmPortConnection!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-dm-port-connection.md) list object

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `functions` · [`[SysSdmDmPortFunction!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-dm-port-function.md) list object

#### `id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `pin` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `symbolicName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar
