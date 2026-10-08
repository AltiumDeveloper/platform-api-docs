---
title: "DesPartPricePoint"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-price-point"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartPricePoint

The price points of the offer, sorted by minimum order quantity.

### Member Of

[`DesPartCompanyOffer`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-company-offer.md) object · [`DesPartProviderPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-provider-part.md) object

```graphql
type DesPartPricePoint {
  currency: String!
  price: Float!
  quantity: Int!
}
```

### Fields

#### `currency` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Currency for price.

#### `price` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar

Price in currency.

#### `quantity` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Minimum purchase quantity to get this price (aka price break).
