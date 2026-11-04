---
title: "SysSdmDmPortConfigurationEnumValue"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-dm-port-configuration-enum-value"
bounded_context: "System Design"
kind: "objects"
experimental: false
deprecated: false
---

# SysSdmDmPortConfigurationEnumValue

### Member Of

[`SysSdmDmPortConfiguration`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-dm-port-configuration.md) object

```graphql
type SysSdmDmPortConfigurationEnumValue {
  dependencies: [SysSdmDmPortConfigurationDependency!]
  id: ID!
  name: String
}
```

### Fields

#### `dependencies` · [`[SysSdmDmPortConfigurationDependency!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-dm-port-configuration-dependency.md) list object

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar
