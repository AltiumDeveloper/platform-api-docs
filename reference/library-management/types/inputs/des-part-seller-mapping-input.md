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

#### `currencyColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Column header for the seller currency.

#### `nameColumn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Column header for the seller name.

#### `prices` · [`[DesPartPriceMappingInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-price-mapping-input.md) list input

Price tier mappings.

#### `skuColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Column header for the seller SKU.

#### `stocks` · [`[DesPartStockMappingInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-stock-mapping-input.md) list input

Stock mappings.

#### `urlColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Column header for the seller URL.
