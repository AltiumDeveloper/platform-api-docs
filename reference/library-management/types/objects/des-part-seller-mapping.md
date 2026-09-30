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

#### `DesPartSellerMapping.currencyColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Column header for the seller currency.

#### `DesPartSellerMapping.nameColumn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Column header for the seller name.

#### `DesPartSellerMapping.prices` · [`[DesPartPriceMapping!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-price-mapping.md) list object library-management

Price tier mappings.

#### `DesPartSellerMapping.skuColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Column header for the seller SKU.

#### `DesPartSellerMapping.stocks` · [`[DesPartStockMapping!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-stock-mapping.md) list object library-management

Stock mappings.

#### `DesPartSellerMapping.urlColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Column header for the seller URL.
