---
title: "DesSupplierPart"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-supplier-part"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesSupplierPart

Information about supplier and part offers.

### Member Of

[`DesManufacturerPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-manufacturer-part.md) object

```graphql
type DesSupplierPart {
  companyName: String!
  partNumber: String!
  prices: [DesSupplierPrice!]
  stocks: [DesSupplierStock!]
}
```

### Fields

#### `DesSupplierPart.companyName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The supplier company name.

#### `DesSupplierPart.partNumber` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The part number (SKU).

#### `DesSupplierPart.prices` · [`[DesSupplierPrice!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-supplier-price.md) list object library-management

Use `prices` and `stocks` with library components only, e.g. `DesLibrary.components`, `desComponentById`.

#### `DesSupplierPart.stocks` · [`[DesSupplierStock!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-supplier-stock.md) list object library-management

Use `prices` and `stocks` with library components only, e.g. `DesLibrary.components`, `desComponentById`.
