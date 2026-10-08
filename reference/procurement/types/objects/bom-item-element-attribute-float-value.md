---
title: "BomItemElementAttributeFloatValue"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-element-attribute-float-value"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomItemElementAttributeFloatValue

Floating-point value of a BOM element attribute.

### Interfaces

#### [`BomItemElementAttributeValue`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-item-element-attribute-value.md) interface

Base type of a BOM element attribute value.

```graphql
type BomItemElementAttributeFloatValue implements BomItemElementAttributeValue {
  attribute: BomItemElementAttribute!
  displayValue: String!
  floatValue: Float!
}
```

### Fields

#### `attribute` · [`BomItemElementAttribute!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-element-attribute.md) non-null object

The attribute the value belongs to.

#### `displayValue` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Display value of the attribute.

#### `floatValue` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar

The specified floating-point value.
