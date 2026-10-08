---
title: "DesCadBoardRegion"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-region"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesCadBoardRegion

Information about a CAD board region.

### Member Of

[`DesCadDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-design.md) object

```graphql
type DesCadBoardRegion {
  color: Long!
  internalPoint: DesCadPoint!
  isFlex: Boolean!
  isLocked3D: Boolean!
  layers: [DesCadBoardLayer!]
  name: String
  regionLayerZBottom: Int!
  regionLayerZTop: Int!
  shapeJson: String
}
```

### Fields

#### `color` · [`Long!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/long.md) non-null scalar

CAD board region color.

#### `internalPoint` · [`DesCadPoint!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-point.md) non-null object

CAD board region internal point.

#### `isFlex` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

True if CAD board region is flexible.

#### `isLocked3D` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

True if CAD board region is locked 3D.

#### `layers` · [`[DesCadBoardLayer!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-layer.md) list object

CAD board region layers.

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD board region name.

#### `regionLayerZBottom` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

CAD board region layer bottom coordinate (Z).

#### `regionLayerZTop` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

CAD board region layer top coordinate (Z).

#### `shapeJson` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

JSON serialized \*ComplexShape\*.
