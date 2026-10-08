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

- [Memory](https://w3id.org/altium/cdm/deviceModel/Memory) — A memory entry within an address block.
  - IRI: [`https://w3id.org/altium/cdm/deviceModel/Memory`](https://w3id.org/altium/cdm/deviceModel/Memory)

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

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Memory name.

#### `sizeHex` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Size formatted as hex (0x...).

#### `type` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Memory type.
