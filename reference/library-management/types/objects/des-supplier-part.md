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

#### `companyName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The supplier company name.

#### `partNumber` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The part number (SKU).

#### `prices` · [`[DesSupplierPrice!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-supplier-price.md) list object

Use `prices` and `stocks` with library components only, e.g. `DesLibrary.components`, [`desComponentById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-component-by-id.md).

#### `stocks` · [`[DesSupplierStock!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-supplier-stock.md) list object

Use `prices` and `stocks` with library components only, e.g. `DesLibrary.components`, [`desComponentById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-component-by-id.md).
