---
title: "DesWeight"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-weight"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesWeight

Weight in grams and ounces.

### Member Of

[`DesLayer`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-layer.md) object

```graphql
type DesWeight {
  gram: Decimal!
  ounce: Decimal!
  x: Decimal!
}
```

### Fields

#### `DesWeight.gram` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar common

The weight value in grams.

#### `DesWeight.ounce` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar common

The weight value in ounces.

#### `DesWeight.x` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar common

The weight value in the base unit.
