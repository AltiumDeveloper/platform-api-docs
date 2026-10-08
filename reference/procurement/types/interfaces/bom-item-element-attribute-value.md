---
title: "BomItemElementAttributeValue"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-item-element-attribute-value"
bounded_context: "Procurement"
kind: "interfaces"
experimental: false
deprecated: false
---

# BomItemElementAttributeValue

Base type of a BOM element attribute value.

### Member Of

[`BomItemAlternate`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-alternate.md) object · [`BomItemElement`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-item-element.md) interface · [`BomItemSubstitute`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-substitute.md) object

### Implemented By

[`BomItemElementAttributeFloatValue`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-element-attribute-float-value.md) object · [`BomItemElementAttributeIntegerValue`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-element-attribute-integer-value.md) object · [`BomItemElementAttributeMoneyValue`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-element-attribute-money-value.md) object · [`BomItemElementAttributePercentValue`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-element-attribute-percent-value.md) object · [`BomItemElementAttributeStringValue`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-element-attribute-string-value.md) object

```graphql
interface BomItemElementAttributeValue {
  attribute: BomItemElementAttribute!
  displayValue: String!
}
```

### Fields

#### `attribute` · [`BomItemElementAttribute!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-element-attribute.md) non-null object

The attribute the value belongs to.

#### `displayValue` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Display value of the attribute.
