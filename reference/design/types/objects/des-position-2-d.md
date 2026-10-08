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

#### `x` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Positional coordinate (X).

#### `xMils` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar

X in mils. Mils are one thousandth of an inch.

#### `xMm` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar

X in mm.

#### `y` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Positional coordinate (Y).

#### `yMils` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar

Y in mils. Mils are one thousandth of an inch.

#### `yMm` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar

Y in mm.
