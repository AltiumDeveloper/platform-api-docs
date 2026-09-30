---
title: "SysEsdParameter"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-parameter"
bounded_context: "System Design"
kind: "objects"
experimental: false
deprecated: false
---

# SysEsdParameter

### Member Of

[`SysEsdCompiledMetadata`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-compiled-metadata.md) object · [`SysEsdFunctionalBlock`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-functional-block.md) object · [`SysEsdKeyComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-key-component.md) object · [`SysEsdPort`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-port.md) object · [`SysEsdSoftwareComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-software-component.md) object

```graphql
type SysEsdParameter {
  id: String!
  name: String
  value: String!
}
```

### Fields

#### `SysEsdParameter.id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SysEsdParameter.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SysEsdParameter.value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common
