---
title: "DesSize2D"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-size-2-d"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesSize2D

2D size in mm and mils.

### Member Of

[`DesPad`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pad.md) object · [`DesPcb`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pcb.md) object

```graphql
type DesSize2D {
  x: Int!
  xMils: Decimal!
  xMm: Decimal!
  y: Int!
  yMils: Decimal!
  yMm: Decimal!
}
```

### Fields

#### `x` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

X value.

#### `xMils` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar

X value in mils. Mils are one thousandth of an inch.

#### `xMm` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar

X value in mm.

#### `y` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Y value.

#### `yMils` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar

Y value in mils. Mils are one thousandth of an inch.

#### `yMm` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar

Y value in mm.
