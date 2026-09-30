---
title: "DesPartCustomPartSeller"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part-seller"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartCustomPartSeller

Represents a seller for a custom part.

### Member Of

[`DesPartCustomPartData`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part-data.md) object

```graphql
type DesPartCustomPartSeller {
  currency: String
  prices: [DesPartCustomPartPricePoint!]!
  sellerName: String!
  sellerUrl: String
  sku: String
  specs: [DesPartCustomPartSellerSpec!]!
  stock: [DesPartCustomPartStockItem!]!
  updatedAt: DateTime
}
```

### Fields

#### `DesPartCustomPartSeller.currency` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The currency code.

#### `DesPartCustomPartSeller.prices` · [`[DesPartCustomPartPricePoint!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part-price-point.md) non-null object library-management

A collection of price points.

#### `DesPartCustomPartSeller.sellerName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The display name of the seller.

#### `DesPartCustomPartSeller.sellerUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The URL for the seller.

#### `DesPartCustomPartSeller.sku` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The stock keeping unit.

#### `DesPartCustomPartSeller.specs` · [`[DesPartCustomPartSellerSpec!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part-seller-spec.md) non-null object library-management

A collection of seller specifications.

#### `DesPartCustomPartSeller.stock` · [`[DesPartCustomPartStockItem!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part-stock-item.md) non-null object library-management

A collection of stock items.

#### `DesPartCustomPartSeller.updatedAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar common

The last update time.
