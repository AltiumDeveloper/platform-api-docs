---
title: "DesPartSellerMappingInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-seller-mapping-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartSellerMappingInput

Maps file columns to a seller and its prices/stocks.

### Member Of

[`DesPartUploadLibraryPartsColumnMappingInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-upload-library-parts-column-mapping-input.md) input

```graphql
input DesPartSellerMappingInput {
  currencyColumn: String
  nameColumn: String!
  prices: [DesPartPriceMappingInput!]
  skuColumn: String
  stocks: [DesPartStockMappingInput!]
  urlColumn: String
}
```

### Fields

#### `DesPartSellerMappingInput.currencyColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Column header for the seller currency.

#### `DesPartSellerMappingInput.nameColumn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Column header for the seller name.

#### `DesPartSellerMappingInput.prices` · [`[DesPartPriceMappingInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-price-mapping-input.md) list input library-management

Price tier mappings.

#### `DesPartSellerMappingInput.skuColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Column header for the seller SKU.

#### `DesPartSellerMappingInput.stocks` · [`[DesPartStockMappingInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-stock-mapping-input.md) list input library-management

Stock mappings.

#### `DesPartSellerMappingInput.urlColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Column header for the seller URL.
