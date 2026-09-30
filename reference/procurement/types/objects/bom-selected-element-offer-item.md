---
title: "BomSelectedElementOfferItem"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-selected-element-offer-item"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomSelectedElementOfferItem

Selected element offer's item.

### Member Of

[`BomSelectedElementOffer`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-selected-element-offer.md) object

```graphql
type BomSelectedElementOfferItem {
  offerId: String!
  offerReference: BomOfferReference
  orderQuantity: Int!
  sku: String
  subtotalPrice: Decimal!
  supplierName: String
  supplierOfferUrl: String
}
```

### Fields

#### `BomSelectedElementOfferItem.offerId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Identifier of the offer.

#### `BomSelectedElementOfferItem.offerReference` · [`BomOfferReference`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/unions/bom-offer-reference.md) union procurement

A reference to the offer.

#### `BomSelectedElementOfferItem.orderQuantity` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

The order quantity of this offer.

#### `BomSelectedElementOfferItem.sku` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

SKU of the offer.

#### `BomSelectedElementOfferItem.subtotalPrice` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar common

The price of this offer.

#### `BomSelectedElementOfferItem.supplierName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Name of the supplier.

#### `BomSelectedElementOfferItem.supplierOfferUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The URL to the offer.
