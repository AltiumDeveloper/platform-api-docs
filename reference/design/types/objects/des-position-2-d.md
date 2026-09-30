---
title: "DesPosition2D"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-position-2-d"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesPosition2D

2D positional information in mm and mils.

### Member Of

[`DesDesignItem`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design-item.md) object · [`DesPad`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pad.md) object · [`DesPcb`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pcb.md) object · [`DesPolygon`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-polygon.md) object · [`DesRectangle`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-rectangle.md) object · [`DesTrack`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-track.md) object · [`DesVia`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-via.md) object

```graphql
type DesPosition2D {
  x: Int!
  xMils: Decimal!
  xMm: Decimal!
  y: Int!
  yMils: Decimal!
  yMm: Decimal!
}
```

### Fields

#### `DesPosition2D.x` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Positional coordinate (X).

#### `DesPosition2D.xMils` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar common

X in mils. Mils are one thousandth of an inch.

#### `DesPosition2D.xMm` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar common

X in mm.

#### `DesPosition2D.y` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Positional coordinate (Y).

#### `DesPosition2D.yMils` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar common

Y in mils. Mils are one thousandth of an inch.

#### `DesPosition2D.yMm` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar common

Y in mm.
