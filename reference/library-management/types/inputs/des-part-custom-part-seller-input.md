---
title: "DesPartCustomPartSellerInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-custom-part-seller-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartCustomPartSellerInput

Represents a seller for a custom part.

### Member Of

[`DesPartCustomPartDataInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-custom-part-data-input.md) input

```graphql
input DesPartCustomPartSellerInput {
  currency: String
  prices: [DesPartCustomPartPricePointInput!]!
  sellerName: String!
  sellerUrl: String
  sku: String
  specs: [DesPartCustomPartSellerSpecInput!]!
  stock: [DesPartCustomPartStockItemInput!]!
  updatedAt: DateTime
}
```

### Fields

#### `currency` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The currency code.

#### `prices` · [`[DesPartCustomPartPricePointInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-custom-part-price-point-input.md) non-null input

A collection of price points.

#### `sellerName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The display name of the seller.

#### `sellerUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The URL for the seller.

#### `sku` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The stock keeping unit.

#### `specs` · [`[DesPartCustomPartSellerSpecInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-custom-part-seller-spec-input.md) non-null input

A collection of seller specifications.

#### `stock` · [`[DesPartCustomPartStockItemInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-custom-part-stock-item-input.md) non-null input

A collection of stock items.

#### `updatedAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

The last update time.
