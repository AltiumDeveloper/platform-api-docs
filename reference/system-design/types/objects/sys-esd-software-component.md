---
title: "SysEsdSoftwareComponent"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-software-component"
bounded_context: "System Design"
kind: "objects"
experimental: false
deprecated: false
---

# SysEsdSoftwareComponent

### Member Of

[`SysEsdFunctionalBlock`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-functional-block.md) object

```graphql
type SysEsdSoftwareComponent {
  id: String!
  name: String
  parameters: [SysEsdParameter!]
  parentKeyComponentId: String!
  portsAssociationsIds: [String!]
}
```

### Fields

#### `id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `parameters` · [`[SysEsdParameter!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-parameter.md) list object

#### `parentKeyComponentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `portsAssociationsIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar
