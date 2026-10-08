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

- [FieldEnum](https://w3id.org/altium/cdm/deviceModel/FieldEnum) — An enumerated value for a register field.
  - IRI: [`https://w3id.org/altium/cdm/deviceModel/FieldEnum`](https://w3id.org/altium/cdm/deviceModel/FieldEnum)

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

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Enumeration description.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Enumeration name.

#### `value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Enumeration value.
