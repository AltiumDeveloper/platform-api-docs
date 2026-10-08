---
title: "DesCadBoardArea"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-area"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesCadBoardArea

Information about the board area.

### Member Of

[`DesCadDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-design.md) object

```graphql
type DesCadBoardArea {
  comment: String
  designator: String
  location: DesCadPoint!
  objectType: DesCadBoardObjectType!
  placement: DesCadBoardComponentPlacement!
  restrictsCopper: Boolean!
  restrictsSMDPad: Boolean!
  restrictsTHPad: Boolean!
  restrictsTrack: Boolean!
  restrictsVia: Boolean!
  rotation: Float!
  shapeJson: String
  uniqueId: String
}
```

### Fields

#### `comment` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Comment for CAD board area.

#### `designator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Object designator.

#### `location` · [`DesCadPoint!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-point.md) non-null object

Board object location.

#### `objectType` · [`DesCadBoardObjectType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-object-type.md) non-null enum

Board object type.

#### `placement` · [`DesCadBoardComponentPlacement!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-component-placement.md) non-null enum

CAD board area placement.

#### `restrictsCopper` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

True if CAD board area restricts copper.

#### `restrictsSMDPad` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

True if CAD board area restricts SMD pad.

#### `restrictsTHPad` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

True if CAD board area restricts TH pad.

#### `restrictsTrack` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

True if CAD board area restricts track.

#### `restrictsVia` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

True if CAD board area restricts via.

#### `rotation` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar

Board object rotation.

#### `shapeJson` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

JSON serialized \*GeometricShape\*.

#### `uniqueId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Unique identifier for CAD board area.
