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

#### `offerId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Identifier of the offer.

#### `offerReference` · [`BomOfferReference`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/unions/bom-offer-reference.md) union

A reference to the offer.

#### `orderQuantity` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The order quantity of this offer.

#### `sku` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

SKU of the offer.

#### `subtotalPrice` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar

The price of this offer.

#### `supplierName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Name of the supplier.

#### `supplierOfferUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The URL to the offer.
