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

#### `DesCadBoardArea.comment` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Comment for CAD board area.

#### `DesCadBoardArea.designator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Object designator.

#### `DesCadBoardArea.location` · [`DesCadPoint!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-point.md) non-null object design

Board object location.

#### `DesCadBoardArea.objectType` · [`DesCadBoardObjectType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-object-type.md) non-null enum design

Board object type.

#### `DesCadBoardArea.placement` · [`DesCadBoardComponentPlacement!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-component-placement.md) non-null enum design

CAD board area placement.

#### `DesCadBoardArea.restrictsCopper` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

True if CAD board area restricts copper.

#### `DesCadBoardArea.restrictsSMDPad` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

True if CAD board area restricts SMD pad.

#### `DesCadBoardArea.restrictsTHPad` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

True if CAD board area restricts TH pad.

#### `DesCadBoardArea.restrictsTrack` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

True if CAD board area restricts track.

#### `DesCadBoardArea.restrictsVia` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

True if CAD board area restricts via.

#### `DesCadBoardArea.rotation` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

Board object rotation.

#### `DesCadBoardArea.shapeJson` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

JSON serialized \*GeometricShape\*.

#### `DesCadBoardArea.uniqueId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Unique identifier for CAD board area.
