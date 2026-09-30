---
title: "DesPartCompanyOffer"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-company-offer"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartCompanyOffer

Represents a company offer.

### Member Of

[`DesPartSellerWithOffers`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-seller-with-offers.md) object

```graphql
type DesPartCompanyOffer {
  clickUrl: String
  eligibleRegion: String
  factoryLeadDays: Int
  inventoryLevel: Int
  moq: Int
  offerId: String!
  orderMultiple: Int
  packaging: String
  prices: [DesPartPricePoint!]!
  sku: String!
  updated: DateTime
}
```

### Fields

#### `DesPartCompanyOffer.clickUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The URL to the offer.

#### `DesPartCompanyOffer.eligibleRegion` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The eligible region for the offer.

#### `DesPartCompanyOffer.factoryLeadDays` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

The number of days to acquire parts from the factory.

#### `DesPartCompanyOffer.inventoryLevel` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

The number of units available to be shipped (e.g., stock, quantity).

#### `DesPartCompanyOffer.moq` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

The Minimum Order Quantity (MOQ): the smallest number of parts that can be purchased.

#### `DesPartCompanyOffer.offerId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The identifier of the offer.

#### `DesPartCompanyOffer.orderMultiple` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

The number of items that must be ordered together.

#### `DesPartCompanyOffer.packaging` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The packaging of parts (e.g., Tape, Reel).

#### `DesPartCompanyOffer.prices` · [`[DesPartPricePoint!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-price-point.md) non-null object library-management

A collection of price points for the offer, sorted by minimum order quantity.

#### `DesPartCompanyOffer.sku` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The stock keeping unit used by the internal distributor.

#### `DesPartCompanyOffer.updated` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar common

The last update date.
