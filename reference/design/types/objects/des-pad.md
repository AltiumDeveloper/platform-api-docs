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

#### `designator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The designator associated with this pad.

#### `globalDesignator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The global designator associated with this pad.

#### `holeSize` · [`DesSize!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-size.md) non-null object

The hole size of this pad.

#### `isPlated` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

The plated status of this pad.

#### `layer` · [`DesLayer`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-layer.md) object

The layer associated with this pad.

#### `net` · [`DesNet`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-net.md) object

The net associated with this pad.

#### `padType` · [`DesPadType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-pad-type.md) non-null enum

The type of this pad.

#### `position` · [`DesPosition2D!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-position-2-d.md) non-null object

The position of this pad.

#### `radius` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

The radius of this pad.

#### `rotation` · [`Decimal`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/decimal.md) scalar

The rotation of this pad.

#### `shape` · [`DesPrimitiveShape`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-primitive-shape.md) enum

The shape of this pad.

#### `size` · [`DesSize2D!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-size-2-d.md) non-null object

The size of this pad.
