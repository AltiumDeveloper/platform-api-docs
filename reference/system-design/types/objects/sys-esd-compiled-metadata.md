---
title: "SysEsdCompiledMetadata"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-compiled-metadata"
bounded_context: "System Design"
kind: "objects"
experimental: false
deprecated: false
---

# SysEsdCompiledMetadata

### Member Of

[`SysEsdDocument`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-document.md) object

```graphql
type SysEsdCompiledMetadata {
  connections: [SysEsdConnection!]
  functionalBlocks: [SysEsdFunctionalBlock!]
  parameters: [SysEsdParameter!]
}
```

### Fields

#### `connections` · [`[SysEsdConnection!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-connection.md) list object

#### `functionalBlocks` · [`[SysEsdFunctionalBlock!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-functional-block.md) list object

#### `parameters` · [`[SysEsdParameter!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-parameter.md) list object
