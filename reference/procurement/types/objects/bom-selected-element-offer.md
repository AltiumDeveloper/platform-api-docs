---
title: "BomSelectedElementOffer"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-selected-element-offer"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomSelectedElementOffer

Selected element offer.

### Member Of

[`BomItemAlternate`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-alternate.md) object · [`BomItemElement`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-item-element.md) interface · [`BomItemSubstitute`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-substitute.md) object

```graphql
type BomSelectedElementOffer {
  items: [BomSelectedElementOfferItem!]!
  surplus: Int!
  totalOrderQuantity: Int!
  totalPrice: Decimal!
}
```

### Fields

#### `items` · [`[BomSelectedElementOfferItem!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-selected-element-offer-item.md) non-null object

Parts of the selected offer.

#### `surplus` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

A surplus, if Total Order Quantity is higher than the required Total Quantity.

#### `totalOrderQuantity` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Total order quantity of the selected offer.

#### `totalPrice` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar

The total price of the selected offer.
