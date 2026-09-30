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

#### [`BomItemElementAttributeValue`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-item-element-attribute-value.md) interface procurement

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

#### `BomItemElementAttributeMoneyValue.amount` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

The specified amount.

#### `BomItemElementAttributeMoneyValue.attribute` · [`BomItemElementAttribute!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-element-attribute.md) non-null object procurement

The attribute the value belongs to.

#### `BomItemElementAttributeMoneyValue.currency` · [`BomCurrency!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-currency.md) non-null object procurement

Currency of the specified amount.

#### `BomItemElementAttributeMoneyValue.displayValue` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Display value of the attribute.
