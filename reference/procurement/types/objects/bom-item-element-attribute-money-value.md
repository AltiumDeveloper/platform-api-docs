---
title: "BomItemElementAttributeMoneyValue"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-element-attribute-money-value"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomItemElementAttributeMoneyValue

Money value of a BOM element attribute.

### Interfaces

#### [`BomItemElementAttributeValue`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-item-element-attribute-value.md) interface

Base type of a BOM element attribute value.

```graphql
type BomItemElementAttributeMoneyValue implements BomItemElementAttributeValue {
  amount: Float!
  attribute: BomItemElementAttribute!
  currency: BomCurrency!
  displayValue: String!
}
```

### Fields

#### `amount` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar

The specified amount.

#### `attribute` · [`BomItemElementAttribute!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-element-attribute.md) non-null object

The attribute the value belongs to.

#### `currency` · [`BomCurrency!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-currency.md) non-null object

Currency of the specified amount.

#### `displayValue` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Display value of the attribute.
