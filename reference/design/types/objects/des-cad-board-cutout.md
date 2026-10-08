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

#### `associatedComponentDesignator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD board cut abstruct associated component designator.

#### `designator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Object designator.

#### `location` · [`DesCadPoint!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-point.md) non-null object

Board object location.

#### `objectType` · [`DesCadBoardObjectType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-object-type.md) non-null enum

Board object type.

#### `originalDesignator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Original designator of CAD board cut abstruct.

#### `rotation` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar

Board object rotation.

#### `shapeJson` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

JSON serialized \*GeometricShape\*.

#### `uniqueId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD board cut abstruct unique identifier.
