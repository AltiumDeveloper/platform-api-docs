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

- [Register](https://w3id.org/altium/cdm/deviceModel/Register) — A hardware register within an address block.
  - IRI: [`https://w3id.org/altium/cdm/deviceModel/Register`](https://w3id.org/altium/cdm/deviceModel/Register)

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

#### `access` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Access type (e.g., read-only, read-write).

#### `addressOffset` · [`Long!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/long.md) non-null scalar

Address offset in bytes from the block start.

#### `addressOffsetHex` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Address offset formatted as hex (0x...).

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Register description.

#### `fields` · [`[DmAmRegisterField!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-am-register-field.md) non-null object

Bit fields within this register.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Register name.

#### `resetMask` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Register reset mask.

#### `resetValue` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Register reset value.

#### `size` · [`Long!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/long.md) non-null scalar

Register size in bytes.

#### `sizeHex` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Register size formatted as hex (0x...).
