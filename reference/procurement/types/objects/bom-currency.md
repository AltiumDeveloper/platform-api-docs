---
title: "BomCurrency"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-currency"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomCurrency

Information about a currency.

### Member Of

[`BomItemElementAttributeMoneyValue`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-element-attribute-money-value.md) object · [`BomSettings`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-settings.md) object

```graphql
type BomCurrency {
  code: String!
  unit: String!
}
```

### Fields

#### `BomCurrency.code` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Currency code (e.g., 'USD').

#### `BomCurrency.unit` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Unit of the currency (e.g., '$').
