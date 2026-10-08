---
title: "DesPartCustomPartPricePointInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-custom-part-price-point-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartCustomPartPricePointInput

Represents a price point.

### Member Of

[`DesPartCustomPartSellerInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-custom-part-seller-input.md) input

```graphql
input DesPartCustomPartPricePointInput {
  price: Decimal!
  quantity: Int!
}
```

### Fields

#### `price` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar

The price value.

#### `quantity` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The price break quantity.
