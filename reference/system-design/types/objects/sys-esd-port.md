---
title: "SysEsdPort"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-port"
bounded_context: "System Design"
kind: "objects"
experimental: false
deprecated: false
---

# SysEsdPort

### Member Of

[`SysEsdFunctionalBlock`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-functional-block.md) object

```graphql
type SysEsdPort {
  associationId: String
  id: String!
  name: String
  parameters: [SysEsdParameter!]
}
```

### Fields

#### `associationId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `parameters` · [`[SysEsdParameter!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-parameter.md) list object
