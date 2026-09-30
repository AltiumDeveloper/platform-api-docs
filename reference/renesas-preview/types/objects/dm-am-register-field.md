---
title: "DmAmRegisterField"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-am-register-field"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmAmRegisterField

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Bit field within a register.

### Member Of

[`DmAmRegister`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-am-register.md) object

```graphql
type DmAmRegisterField {
  access: String!
  description: String!
  enums: [DmAmFieldEnum!]!
  lsb: Int!
  msb: Int!
  name: String!
}
```

### Fields

#### `DmAmRegisterField.access` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Access type of the field (e.g., RO, RW).

#### `DmAmRegisterField.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Field description.

#### `DmAmRegisterField.enums` · [`[DmAmFieldEnum!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-am-field-enum.md) non-null object renesas-preview

Enumerated values for the field.

#### `DmAmRegisterField.lsb` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Least significant bit index of the field.

#### `DmAmRegisterField.msb` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Most significant bit index of the field.

#### `DmAmRegisterField.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Field name.
