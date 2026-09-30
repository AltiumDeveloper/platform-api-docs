---
title: "DesSupplierStock"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-supplier-stock"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesSupplierStock

Supplier inventory level.

### Member Of

[`DesSupplierPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-supplier-part.md) object

```graphql
type DesSupplierStock {
  locationName: String!
  quantity: Decimal!
}
```

### Fields

#### `DesSupplierStock.locationName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Region that this inventory level applies to.

#### `DesSupplierStock.quantity` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar common

Stock level value.
