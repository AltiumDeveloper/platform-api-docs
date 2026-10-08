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

#### `currency` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The currency code.

#### `prices` · [`[DesPartCustomPartPricePoint!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part-price-point.md) non-null object

A collection of price points.

#### `sellerName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The display name of the seller.

#### `sellerUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The URL for the seller.

#### `sku` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The stock keeping unit.

#### `specs` · [`[DesPartCustomPartSellerSpec!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part-seller-spec.md) non-null object

A collection of seller specifications.

#### `stock` · [`[DesPartCustomPartStockItem!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part-stock-item.md) non-null object

A collection of stock items.

#### `updatedAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

The last update time.
