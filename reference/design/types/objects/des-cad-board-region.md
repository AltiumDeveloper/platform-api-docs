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

#### `DesCadBoardRegion.color` · [`Long!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/long.md) non-null scalar common

CAD board region color.

#### `DesCadBoardRegion.internalPoint` · [`DesCadPoint!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-point.md) non-null object design

CAD board region internal point.

#### `DesCadBoardRegion.isFlex` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

True if CAD board region is flexible.

#### `DesCadBoardRegion.isLocked3D` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

True if CAD board region is locked 3D.

#### `DesCadBoardRegion.layers` · [`[DesCadBoardLayer!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-layer.md) list object design

CAD board region layers.

#### `DesCadBoardRegion.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board region name.

#### `DesCadBoardRegion.regionLayerZBottom` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

CAD board region layer bottom coordinate (Z).

#### `DesCadBoardRegion.regionLayerZTop` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

CAD board region layer top coordinate (Z).

#### `DesCadBoardRegion.shapeJson` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

JSON serialized \*ComplexShape\*.
