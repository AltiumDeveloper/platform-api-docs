---
title: "DmFspProvides"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-fsp-provides"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmFspProvides

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents an interface provided by an FSP module.

### Member Of

[`DmFspModule`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-fsp-module.md) object · [`DmRequiresProvidesMapping`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-requires-provides-mapping.md) object

```graphql
type DmFspProvides {
  external: Boolean!
  instances: [String!]!
  interface: String!
  interfaceBase: String!
}
```

### Fields

#### `DmFspProvides.external` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Indicates whether this provided interface is external to the device.

#### `DmFspProvides.instances` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

List of instance names for the provided interface.

#### `DmFspProvides.interface` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Fully qualified name of the provided interface.

#### `DmFspProvides.interfaceBase` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Base or canonical name of the provided interface.
