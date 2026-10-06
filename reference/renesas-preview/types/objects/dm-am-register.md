---
title: "DmAmRegister"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-am-register"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmAmRegister

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Register entry within an address block.

### Common Data Model

- [Register](https://altiumdeveloper.github.io/cdm/classes/dm_Register/) — A hardware register within an address block.

### Member Of

[`DmAddressBlock`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-address-block.md) object

```graphql
type DmAmRegister {
  access: String!
  addressOffset: Long!
  addressOffsetHex: String!
  description: String!
  fields: [DmAmRegisterField!]!
  name: String!
  resetMask: String!
  resetValue: String!
  size: Long!
  sizeHex: String!
}
```

### Fields

#### `DmAmRegister.access` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Access type (e.g., read-only, read-write).

#### `DmAmRegister.addressOffset` · [`Long!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/long.md) non-null scalar common

Address offset in bytes from the block start.

#### `DmAmRegister.addressOffsetHex` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Address offset formatted as hex (0x...).

#### `DmAmRegister.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Register description.

#### `DmAmRegister.fields` · [`[DmAmRegisterField!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-am-register-field.md) non-null object renesas-preview

Bit fields within this register.

#### `DmAmRegister.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Register name.

#### `DmAmRegister.resetMask` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Register reset mask.

#### `DmAmRegister.resetValue` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Register reset value.

#### `DmAmRegister.size` · [`Long!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/long.md) non-null scalar common

Register size in bytes.

#### `DmAmRegister.sizeHex` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Register size formatted as hex (0x...).
