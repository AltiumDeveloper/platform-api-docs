---
title: "DesPartCustomPartStockItem"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part-stock-item"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartCustomPartStockItem

Represents a stock item.

### Member Of

[`DesPartCustomPartSeller`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part-seller.md) object

```graphql
type DesPartCustomPartStockItem {
  location: String!
  quantity: Int!
}
```

### Fields

#### `location` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The location.

#### `quantity` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The quantity.
