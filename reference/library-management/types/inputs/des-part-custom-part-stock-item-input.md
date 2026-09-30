---
title: "DesPartCustomPartStockItemInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-custom-part-stock-item-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartCustomPartStockItemInput

Represents a stock item.

### Member Of

[`DesPartCustomPartSellerInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-custom-part-seller-input.md) input

```graphql
input DesPartCustomPartStockItemInput {
  location: String!
  quantity: Int!
}
```

### Fields

#### `DesPartCustomPartStockItemInput.location` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The location.

#### `DesPartCustomPartStockItemInput.quantity` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

The quantity.
