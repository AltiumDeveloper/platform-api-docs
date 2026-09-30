---
title: "DesArea"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-area"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesArea

Area in mm^2 and mils^2. Mils are one thousandth of an inch.

### Member Of

[`DesLayer`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-layer.md) object · [`DesPcb`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pcb.md) object

```graphql
type DesArea {
  x: Float!
  xMils2: Decimal!
  xMm2: Decimal!
}
```

### Fields

#### `DesArea.x` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

Area value.

#### `DesArea.xMils2` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar common

Area in mm^2 and mils^2. Mils are one thousandth of an inch.

#### `DesArea.xMm2` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar common

Area in mm^2.
