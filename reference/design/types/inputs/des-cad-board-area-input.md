---
title: "DesCadBoardAreaInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-area-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCadBoardAreaInput

Input for CAD board area.

### Member Of

[`DesCadDesignInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-design-input.md) input

```graphql
input DesCadBoardAreaInput {
  comment: String
  designator: String
  location: DesCadBoardPointInput
  placement: DesCadBoardComponentPlacement
  restrictsCopper: Boolean
  restrictsSMDPad: Boolean
  restrictsTHPad: Boolean
  restrictsTrack: Boolean
  restrictsVia: Boolean
  rotation: Float
  shapeJson: String
  uniqueId: String
}
```

### Fields

#### `DesCadBoardAreaInput.comment` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board area comment.

#### `DesCadBoardAreaInput.designator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board area designator.

#### `DesCadBoardAreaInput.location` · [`DesCadBoardPointInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-point-input.md) input design

CAD board area location.

#### `DesCadBoardAreaInput.placement` · [`DesCadBoardComponentPlacement`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-component-placement.md) enum design

CAD board area placement.

#### `DesCadBoardAreaInput.restrictsCopper` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Whether the CAD board area restricts copper.

#### `DesCadBoardAreaInput.restrictsSMDPad` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Whether the CAD board area restricts a SMD pad.

#### `DesCadBoardAreaInput.restrictsTHPad` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Whether the CAD board area restricts TH pad.

#### `DesCadBoardAreaInput.restrictsTrack` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Whether the CAD board area restricts a track.

#### `DesCadBoardAreaInput.restrictsVia` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Whether the CAD board area restricts a via.

#### `DesCadBoardAreaInput.rotation` · [`Float`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) scalar common

CAD board area rotation.

#### `DesCadBoardAreaInput.shapeJson` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

JSON serialized \*GeometricShape\*.

#### `DesCadBoardAreaInput.uniqueId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board area unique identifier.
