---
title: "SysEsdKeyComponent"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-key-component"
bounded_context: "System Design"
kind: "objects"
experimental: false
deprecated: false
---

# SysEsdKeyComponent

### Member Of

[`SysEsdFunctionalBlock`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-functional-block.md) object

```graphql
type SysEsdKeyComponent {
  childSoftwareComponentsIds: [String!]
  id: String!
  name: String
  parameters: [SysEsdParameter!]
}
```

### Fields

#### `SysEsdKeyComponent.childSoftwareComponentsIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

#### `SysEsdKeyComponent.id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SysEsdKeyComponent.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SysEsdKeyComponent.parameters` · [`[SysEsdParameter!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-parameter.md) list object system-design
