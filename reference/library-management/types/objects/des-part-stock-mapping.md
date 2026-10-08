---
title: "DesPartStockMapping"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-stock-mapping"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartStockMapping

Maps a file column to a stock quantity and optional location.

### Member Of

[`DesPartSellerMapping`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-seller-mapping.md) object

```graphql
type DesPartStockMapping {
  locationColumn: String
  qtyColumn: String!
}
```

### Fields

#### `locationColumn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Column header for the location. When absent or unreadable, location is left empty.

#### `qtyColumn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Column header for the quantity.
