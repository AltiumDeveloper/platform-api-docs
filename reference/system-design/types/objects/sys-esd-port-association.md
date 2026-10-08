---
title: "SysEsdPortAssociation"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-port-association"
bounded_context: "System Design"
kind: "objects"
experimental: false
deprecated: false
---

# SysEsdPortAssociation

### Member Of

[`SysEsdFunctionalBlock`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-functional-block.md) object

```graphql
type SysEsdPortAssociation {
  id: String!
  portId: String!
  portLibraryName: String!
  softwareComponentId: String!
}
```

### Fields

#### `id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `portId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `portLibraryName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `softwareComponentId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
