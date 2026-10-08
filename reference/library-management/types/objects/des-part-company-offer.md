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

#### `clickUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The URL to the offer.

#### `eligibleRegion` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The eligible region for the offer.

#### `factoryLeadDays` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

The number of days to acquire parts from the factory.

#### `inventoryLevel` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

The number of units available to be shipped (e.g., stock, quantity).

#### `moq` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

The Minimum Order Quantity (MOQ): the smallest number of parts that can be purchased.

#### `offerId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of the offer.

#### `orderMultiple` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

The number of items that must be ordered together.

#### `packaging` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The packaging of parts (e.g., Tape, Reel).

#### `prices` · [`[DesPartPricePoint!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-price-point.md) non-null object

A collection of price points for the offer, sorted by minimum order quantity.

#### `sku` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The stock keeping unit used by the internal distributor.

#### `updated` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

The last update date.
