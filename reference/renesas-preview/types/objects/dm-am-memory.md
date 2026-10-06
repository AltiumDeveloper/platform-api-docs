---
title: "DmAmMemory"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-am-memory"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmAmMemory

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Memory entry with name, size and type.

### Common Data Model

- [Memory](https://altiumdeveloper.github.io/cdm/classes/dm_Memory/) — A memory entry within an address block.

### Member Of

[`DmAddressBlock`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-address-block.md) object

```graphql
type DmAmMemory {
  name: String!
  sizeHex: String!
  type: String!
}
```

### Fields

#### `DmAmMemory.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Memory name.

#### `DmAmMemory.sizeHex` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Size formatted as hex (0x...).

#### `DmAmMemory.type` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Memory type.
