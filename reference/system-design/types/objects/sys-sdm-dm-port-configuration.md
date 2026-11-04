---
title: "SysSdmDmPortConfiguration"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-dm-port-configuration"
bounded_context: "System Design"
kind: "objects"
experimental: false
deprecated: false
---

# SysSdmDmPortConfiguration

### Member Of

[`SysSdmDmPort`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-dm-port.md) object

```graphql
type SysSdmDmPortConfiguration {
  enumValues: [SysSdmDmPortConfigurationEnumValue!]
  id: ID!
  name: String
}
```

### Fields

#### `enumValues` · [`[SysSdmDmPortConfigurationEnumValue!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-dm-port-configuration-enum-value.md) list object

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar
