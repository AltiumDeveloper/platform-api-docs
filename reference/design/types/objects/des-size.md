---
title: "DesSize"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-size"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesSize

Size in mm and mils.

### Member Of

[`DesLayer`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-layer.md) object · [`DesLayerProperty`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-layer-property.md) object · [`DesNet`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-net.md) object · [`DesPad`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pad.md) object · [`DesTrack`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-track.md) object · [`DesVia`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-via.md) object

```graphql
type DesSize {
  x: Decimal!
  xMils: Decimal!
  xMm: Decimal!
}
```

### Fields

#### `DesSize.x` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar common

X value.

#### `DesSize.xMils` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar common

Size in mils. Mils are one thousandth of an inch.

#### `DesSize.xMm` · [`Decimal!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) non-null scalar common

Size in mm.
