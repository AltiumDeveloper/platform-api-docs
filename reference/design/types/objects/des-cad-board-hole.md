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

#### `associatedComponentDesignator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD board cut abstruct associated component designator.

#### `counterAngle` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar

CAD board hole counter angle.

#### `counterDepth` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

CAD board hole counter depth.

#### `counterSize` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

CAD board counter size.

#### `counterType` · [`DesCadCounterType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-counter-type.md) non-null enum

CAD board hole counter type.

#### `designator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Object designator.

#### `diameter` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

CAD board hole diameter.

#### `holeType` · [`DesCadHoleType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-hole-type.md) non-null enum

CAD board hole type.

#### `isPlated` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

True if CAD board hole is plated.

#### `location` · [`DesCadPoint!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-point.md) non-null object

Board object location.

#### `objectType` · [`DesCadBoardObjectType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-object-type.md) non-null enum

Board object type.

#### `originalDesignator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Original designator of CAD board cut abstruct.

#### `rotation` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar

Board object rotation.

#### `size` · [`DesCadPoint!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-point.md) non-null object

CAD board hole size.

#### `uniqueId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD board cut abstruct unique identifier.
