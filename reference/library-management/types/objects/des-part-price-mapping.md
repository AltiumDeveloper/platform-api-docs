---
title: "DesPartPriceMapping"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-price-mapping"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartPriceMapping

Maps the price of a fixed break quantity to a file column.

### Member Of

[`DesPartSellerMapping`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-seller-mapping.md) object

```graphql
type DesPartPriceMapping {
  priceColumn: String!
  quantity: Int!
}
```

### Fields

#### `priceColumn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Column header for the price at this quantity.

#### `quantity` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Break quantity of the price tier.
