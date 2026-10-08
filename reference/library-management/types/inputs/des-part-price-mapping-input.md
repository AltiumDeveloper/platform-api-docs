---
title: "DesPartPriceMappingInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-price-mapping-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartPriceMappingInput

Maps the price of a fixed break quantity to a file column.

### Member Of

[`DesPartSellerMappingInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-seller-mapping-input.md) input

```graphql
input DesPartPriceMappingInput {
  priceColumn: String!
  quantity: Int!
}
```

### Fields

#### `priceColumn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Column header for the price at this quantity.

#### `quantity` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Break quantity of the price tier.
