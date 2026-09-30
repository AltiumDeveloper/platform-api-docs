---
title: "DesCadBoardHole"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-hole"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesCadBoardHole

Information about a hole on the CAD board component.

### Member Of

[`DesCadDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-design.md) object

```graphql
type DesCadBoardHole {
  associatedComponentDesignator: String
  counterAngle: Float!
  counterDepth: Int!
  counterSize: Int!
  counterType: DesCadCounterType!
  designator: String
  diameter: Int!
  holeType: DesCadHoleType!
  isPlated: Boolean!
  location: DesCadPoint!
  objectType: DesCadBoardObjectType!
  originalDesignator: String
  rotation: Float!
  size: DesCadPoint!
  uniqueId: String
}
```

### Fields

#### `DesCadBoardHole.associatedComponentDesignator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board cut abstruct associated component designator.

#### `DesCadBoardHole.counterAngle` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

CAD board hole counter angle.

#### `DesCadBoardHole.counterDepth` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

CAD board hole counter depth.

#### `DesCadBoardHole.counterSize` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

CAD board counter size.

#### `DesCadBoardHole.counterType` · [`DesCadCounterType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-counter-type.md) non-null enum design

CAD board hole counter type.

#### `DesCadBoardHole.designator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Object designator.

#### `DesCadBoardHole.diameter` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

CAD board hole diameter.

#### `DesCadBoardHole.holeType` · [`DesCadHoleType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-hole-type.md) non-null enum design

CAD board hole type.

#### `DesCadBoardHole.isPlated` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

True if CAD board hole is plated.

#### `DesCadBoardHole.location` · [`DesCadPoint!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-point.md) non-null object design

Board object location.

#### `DesCadBoardHole.objectType` · [`DesCadBoardObjectType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-object-type.md) non-null enum design

Board object type.

#### `DesCadBoardHole.originalDesignator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Original designator of CAD board cut abstruct.

#### `DesCadBoardHole.rotation` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

Board object rotation.

#### `DesCadBoardHole.size` · [`DesCadPoint!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-point.md) non-null object design

CAD board hole size.

#### `DesCadBoardHole.uniqueId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board cut abstruct unique identifier.
