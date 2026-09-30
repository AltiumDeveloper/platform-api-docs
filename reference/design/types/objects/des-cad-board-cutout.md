---
title: "DesCadBoardCutout"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-cutout"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesCadBoardCutout

Information about a cutout on the CAD board.

### Member Of

[`DesCadDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-design.md) object

```graphql
type DesCadBoardCutout {
  associatedComponentDesignator: String
  designator: String
  location: DesCadPoint!
  objectType: DesCadBoardObjectType!
  originalDesignator: String
  rotation: Float!
  shapeJson: String
  uniqueId: String
}
```

### Fields

#### `DesCadBoardCutout.associatedComponentDesignator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board cut abstruct associated component designator.

#### `DesCadBoardCutout.designator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Object designator.

#### `DesCadBoardCutout.location` · [`DesCadPoint!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-point.md) non-null object design

Board object location.

#### `DesCadBoardCutout.objectType` · [`DesCadBoardObjectType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-object-type.md) non-null enum design

Board object type.

#### `DesCadBoardCutout.originalDesignator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Original designator of CAD board cut abstruct.

#### `DesCadBoardCutout.rotation` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

Board object rotation.

#### `DesCadBoardCutout.shapeJson` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

JSON serialized \*GeometricShape\*.

#### `DesCadBoardCutout.uniqueId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board cut abstruct unique identifier.
