---
title: "DmAmFieldEnum"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-am-field-enum"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmAmFieldEnum

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Enumerated value for a register field.

### Common Data Model

- [FieldEnum](https://altiumdeveloper.github.io/cdm/classes/dm_FieldEnum/) — An enumerated value for a register field.

### Member Of

[`DmAmRegisterField`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-am-register-field.md) object

```graphql
type DmAmFieldEnum {
  description: String!
  name: String!
  value: String!
}
```

### Fields

#### `DmAmFieldEnum.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Enumeration description.

#### `DmAmFieldEnum.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Enumeration name.

#### `DmAmFieldEnum.value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Enumeration value.
