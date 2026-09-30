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

#### `DesSize2D.x` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

X value.

#### `DesSize2D.xMils` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar common

X value in mils. Mils are one thousandth of an inch.

#### `DesSize2D.xMm` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar common

X value in mm.

#### `DesSize2D.y` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Y value.

#### `DesSize2D.yMils` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar common

Y value in mils. Mils are one thousandth of an inch.

#### `DesSize2D.yMm` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar common

Y value in mm.
