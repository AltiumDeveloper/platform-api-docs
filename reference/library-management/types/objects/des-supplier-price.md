---
title: "DesSupplierPrice"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-supplier-price"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesSupplierPrice

Price information from supplier.

### Member Of

[`DesSupplierPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-supplier-part.md) object

```graphql
type DesSupplierPrice {
  breakQuantity: Int!
  currency: String!
  price: Decimal!
}
```

### Fields

#### `DesSupplierPrice.breakQuantity` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Supplier offer price break. A price break is when the cost per item is decreased when larger quantities are ordered.

#### `DesSupplierPrice.currency` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Currency of offer.

#### `DesSupplierPrice.price` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar common

Supplier offer price.
