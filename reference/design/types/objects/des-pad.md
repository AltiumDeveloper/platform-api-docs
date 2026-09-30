---
title: "DesPad"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pad"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesPad

Pad information.

### Member Of

[`DesDesignItem`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design-item.md) object · [`DesNet`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-net.md) object · [`DesPcb`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pcb.md) object

```graphql
type DesPad {
  designator: String
  globalDesignator: String
  holeSize: DesSize!
  isPlated: Boolean
  layer: DesLayer
  net: DesNet
  padType: DesPadType!
  position: DesPosition2D!
  radius: Int
  rotation: Decimal
  shape: DesPrimitiveShape
  size: DesSize2D!
}
```

### Fields

#### `DesPad.designator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The designator associated with this pad.

#### `DesPad.globalDesignator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The global designator associated with this pad.

#### `DesPad.holeSize` · [`DesSize!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-size.md) non-null object design

The hole size of this pad.

#### `DesPad.isPlated` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

The plated status of this pad.

#### `DesPad.layer` · [`DesLayer`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-layer.md) object design

The layer associated with this pad.

#### `DesPad.net` · [`DesNet`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-net.md) object design

The net associated with this pad.

#### `DesPad.padType` · [`DesPadType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-pad-type.md) non-null enum design

The type of this pad.

#### `DesPad.position` · [`DesPosition2D!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-position-2-d.md) non-null object design

The position of this pad.

#### `DesPad.radius` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

The radius of this pad.

#### `DesPad.rotation` · [`Decimal`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) scalar common

The rotation of this pad.

#### `DesPad.shape` · [`DesPrimitiveShape`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-primitive-shape.md) enum design

The shape of this pad.

#### `DesPad.size` · [`DesSize2D!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-size-2-d.md) non-null object design

The size of this pad.
