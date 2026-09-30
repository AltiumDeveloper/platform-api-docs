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

#### `DesPartCustomPartSellerInput.currency` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The currency code.

#### `DesPartCustomPartSellerInput.prices` · [`[DesPartCustomPartPricePointInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-custom-part-price-point-input.md) non-null input library-management

A collection of price points.

#### `DesPartCustomPartSellerInput.sellerName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The display name of the seller.

#### `DesPartCustomPartSellerInput.sellerUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The URL for the seller.

#### `DesPartCustomPartSellerInput.sku` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The stock keeping unit.

#### `DesPartCustomPartSellerInput.specs` · [`[DesPartCustomPartSellerSpecInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-custom-part-seller-spec-input.md) non-null input library-management

A collection of seller specifications.

#### `DesPartCustomPartSellerInput.stock` · [`[DesPartCustomPartStockItemInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-custom-part-stock-item-input.md) non-null input library-management

A collection of stock items.

#### `DesPartCustomPartSellerInput.updatedAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar common

The last update time.
