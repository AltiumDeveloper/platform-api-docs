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

#### `id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `keyComponents` · [`[SysEsdKeyComponent!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-key-component.md) list object

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `parameters` · [`[SysEsdParameter!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-parameter.md) list object

#### `ports` · [`[SysEsdPort!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-port.md) list object

#### `portsAssociations` · [`[SysEsdPortAssociation!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-port-association.md) list object

#### `softwareComponents` · [`[SysEsdSoftwareComponent!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-software-component.md) list object
