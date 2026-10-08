---
title: "DesPartSellerMapping"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-seller-mapping"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartSellerMapping

Maps file columns to a seller and its prices/stocks.

### Member Of

[`DesPartUploadLibraryPartsColumnMapping`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-library-parts-column-mapping.md) object

```graphql
type DesPartSellerMapping {
  currencyColumn: String
  nameColumn: String!
  prices: [DesPartPriceMapping!]
  skuColumn: String
  stocks: [DesPartStockMapping!]
  urlColumn: String
}
```

### Fields

#### `currencyColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Column header for the seller currency.

#### `nameColumn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Column header for the seller name.

#### `prices` · [`[DesPartPriceMapping!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-price-mapping.md) list object

Price tier mappings.

#### `skuColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Column header for the seller SKU.

#### `stocks` · [`[DesPartStockMapping!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-stock-mapping.md) list object

Stock mappings.

#### `urlColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Column header for the seller URL.
