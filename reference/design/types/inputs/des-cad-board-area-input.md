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

#### `comment` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD board area comment.

#### `designator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD board area designator.

#### `location` · [`DesCadBoardPointInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-point-input.md) input

CAD board area location.

#### `placement` · [`DesCadBoardComponentPlacement`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-component-placement.md) enum

CAD board area placement.

#### `restrictsCopper` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Whether the CAD board area restricts copper.

#### `restrictsSMDPad` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Whether the CAD board area restricts a SMD pad.

#### `restrictsTHPad` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Whether the CAD board area restricts TH pad.

#### `restrictsTrack` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Whether the CAD board area restricts a track.

#### `restrictsVia` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Whether the CAD board area restricts a via.

#### `rotation` · [`Float`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) scalar

CAD board area rotation.

#### `shapeJson` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

JSON serialized \*GeometricShape\*.

#### `uniqueId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD board area unique identifier.
