---
title: "DesCadBodyTransformation"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-body-transformation"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesCadBodyTransformation

Information about a transformation of the CAD board.

### Member Of

[`DesCadBoardComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-component.md) object · [`DesCadComponentVariation`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-component-variation.md) object

```graphql
type DesCadBodyTransformation {
  rotationX: Float!
  rotationY: Float!
  rotationZ: Float!
  scaleX: Float!
  scaleY: Float!
  scaleZ: Float!
  translationX: Float!
  translationY: Float!
  translationZ: Float!
}
```

### Fields

#### `DesCadBodyTransformation.rotationX` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

The rotation around the X axis in degrees.

#### `DesCadBodyTransformation.rotationY` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

The rotation around the Y axis in degrees.

#### `DesCadBodyTransformation.rotationZ` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

The rotation around the Z axis in degrees.

#### `DesCadBodyTransformation.scaleX` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

The scaling factor along the X axis.

#### `DesCadBodyTransformation.scaleY` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

The scaling factor along the Y axis.

#### `DesCadBodyTransformation.scaleZ` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

The scaling factor along the Z axis.

#### `DesCadBodyTransformation.translationX` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

The translation along the X axis.

#### `DesCadBodyTransformation.translationY` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

The translation along the Y axis.

#### `DesCadBodyTransformation.translationZ` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

The translation along the Z axis.
