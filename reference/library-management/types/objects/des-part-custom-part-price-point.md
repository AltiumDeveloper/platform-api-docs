---
title: "DesPartCustomPartPricePoint"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part-price-point"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartCustomPartPricePoint

Represents a price point.

### Member Of

[`DesPartCustomPartSeller`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part-seller.md) object

```graphql
type DesPartCustomPartPricePoint {
  price: Decimal!
  quantity: Int!
}
```

### Fields

#### `price` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar

The price value.

#### `quantity` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The price break quantity.
