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

### Common Data Model

- [RegisterField](https://w3id.org/altium/cdm/deviceModel/RegisterField) — A bit field within a register.
  - IRI: [`https://w3id.org/altium/cdm/deviceModel/RegisterField`](https://w3id.org/altium/cdm/deviceModel/RegisterField)

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

#### `access` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Access type of the field (e.g., RO, RW).

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Field description.

#### `enums` · [`[DmAmFieldEnum!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-am-field-enum.md) non-null object

Enumerated values for the field.

#### `lsb` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Least significant bit index of the field.

#### `msb` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Most significant bit index of the field.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Field name.
