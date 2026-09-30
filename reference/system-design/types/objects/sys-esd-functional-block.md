---
title: "SysEsdFunctionalBlock"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-functional-block"
bounded_context: "System Design"
kind: "objects"
experimental: false
deprecated: false
---

# SysEsdFunctionalBlock

### Member Of

[`SysEsdCompiledMetadata`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-compiled-metadata.md) object

```graphql
type SysEsdFunctionalBlock {
  id: String!
  keyComponents: [SysEsdKeyComponent!]
  name: String
  parameters: [SysEsdParameter!]
  ports: [SysEsdPort!]
  portsAssociations: [SysEsdPortAssociation!]
  softwareComponents: [SysEsdSoftwareComponent!]
}
```

### Fields

#### `SysEsdFunctionalBlock.id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SysEsdFunctionalBlock.keyComponents` · [`[SysEsdKeyComponent!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-key-component.md) list object system-design

#### `SysEsdFunctionalBlock.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SysEsdFunctionalBlock.parameters` · [`[SysEsdParameter!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-parameter.md) list object system-design

#### `SysEsdFunctionalBlock.ports` · [`[SysEsdPort!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-port.md) list object system-design

#### `SysEsdFunctionalBlock.portsAssociations` · [`[SysEsdPortAssociation!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-port-association.md) list object system-design

#### `SysEsdFunctionalBlock.softwareComponents` · [`[SysEsdSoftwareComponent!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-software-component.md) list object system-design
