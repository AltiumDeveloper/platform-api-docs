---
title: "BomCreateBomItemElementAttributeValueInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-item-element-attribute-value-input"
bounded_context: "Procurement"
kind: "inputs"
experimental: false
deprecated: false
---

# BomCreateBomItemElementAttributeValueInput

BOM item element attribute's value.

### Member Of

[`BomCreateBomItemElementAttributeInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-item-element-attribute-input.md) input

```graphql
input BomCreateBomItemElementAttributeValueInput {
  floatValue: Float
  integerValue: Long
  stringValue: String
}
```

### Fields

#### `floatValue` · [`Float`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) scalar

Floating-point value of a BOM element attribute.

#### `integerValue` · [`Long`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/long.md) scalar

Integer value of a BOM element attribute.

#### `stringValue` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

String value of a BOM element attribute.
