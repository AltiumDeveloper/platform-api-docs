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

#### `locationName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Region that this inventory level applies to.

#### `quantity` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar

Stock level value.
