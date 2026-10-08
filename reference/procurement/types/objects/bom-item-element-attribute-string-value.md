---
title: "BomItemElementAttributeStringValue"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-element-attribute-string-value"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomItemElementAttributeStringValue

String value of a BOM element attribute.

### Interfaces

#### [`BomItemElementAttributeValue`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-item-element-attribute-value.md) interface

Base type of a BOM element attribute value.

```graphql
type BomItemElementAttributeStringValue implements BomItemElementAttributeValue {
  attribute: BomItemElementAttribute!
  displayValue: String!
  stringValue: String!
}
```

### Fields

#### `attribute` · [`BomItemElementAttribute!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-element-attribute.md) non-null object

The attribute the value belongs to.

#### `displayValue` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Display value of the attribute.

#### `stringValue` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The specified string value.
