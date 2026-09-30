---
title: "SysLibSoftwareComponent"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-lib-software-component"
bounded_context: "System Design"
kind: "objects"
experimental: true
deprecated: false
---

# SysLibSoftwareComponent

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Returned By

[`sysLibSoftwareComponentById`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/queries/sys-lib-software-component-by-id.md) query · [`sysLibSoftwareComponents`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/queries/sys-lib-software-components.md) query

### Member Of

[`SysLibUploadSoftwareLibraryPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-lib-upload-software-library-payload.md) object

```graphql
type SysLibSoftwareComponent {
  category: String!
  id: ID!
  name: String!
  specifications: [SysLibSoftwareComponentSpecification!]!
}
```

### Fields

#### `SysLibSoftwareComponent.category` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SysLibSoftwareComponent.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

#### `SysLibSoftwareComponent.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SysLibSoftwareComponent.specifications` · [`[SysLibSoftwareComponentSpecification!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-lib-software-component-specification.md) non-null object system-design
