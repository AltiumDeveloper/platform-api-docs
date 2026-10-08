---
title: "DesPartStockMappingInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-stock-mapping-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartStockMappingInput

Maps a file column to a stock quantity and optional location.

### Member Of

[`DesPartSellerMappingInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-seller-mapping-input.md) input

```graphql
input DesPartStockMappingInput {
  locationColumn: String
  qtyColumn: String!
}
```

### Fields

#### `locationColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Column header for the location. When absent or unreadable, location is left empty.

#### `qtyColumn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Column header for the quantity.
