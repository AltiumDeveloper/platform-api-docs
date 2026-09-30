---
title: "DesCadBoardComponentInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-component-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCadBoardComponentInput

Input for CAD board component.

### Member Of

[`DesCadBoardComponentTypeInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-component-type-input.md) input

```graphql
input DesCadBoardComponentInput {
  boardRegionName: String
  deepening: Int
  designator: String
  free3DBodyRotationX: Float
  free3DBodyRotationY: Float
  free3DBodyRotationZ: Float
  free3DBodyStandoffHeight: Int
  id: String
  innerBodyRelativeToBoardTransform: DesCadBodyTransformationInput
  isFree3DBody: Boolean
  isLocked: Boolean
  isMcadUsesOwn3DBody: Boolean
  location: DesCadBoardPointInput
  modelInComponentTransform: DesCadBodyTransformationInput
  placement: DesCadBoardComponentPlacement
  rotation: Float
  variantName: String
}
```

### Fields

#### `DesCadBoardComponentInput.boardRegionName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board component board region name.

#### `DesCadBoardComponentInput.deepening` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

CAD board component deepening value.

#### `DesCadBoardComponentInput.designator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board component designator.

#### `DesCadBoardComponentInput.free3DBodyRotationX` · [`Float`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) scalar common

CAD board component free 3D body rotation (X direction).

#### `DesCadBoardComponentInput.free3DBodyRotationY` · [`Float`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) scalar common

CAD board component free 3D body rotation (Y direction).

#### `DesCadBoardComponentInput.free3DBodyRotationZ` · [`Float`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) scalar common

CAD board component free 3D body rotation (Z direction).

#### `DesCadBoardComponentInput.free3DBodyStandoffHeight` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

CAD board component free 3D body standoff height.

#### `DesCadBoardComponentInput.id` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board component unique identifier.

#### `DesCadBoardComponentInput.innerBodyRelativeToBoardTransform` · [`DesCadBodyTransformationInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-body-transformation-input.md) input design

In case the component contains a single 3D body AND no conversion was performed when exporting to a 3D model, the 3D model's position relative to board is stored here.

#### `DesCadBoardComponentInput.isFree3DBody` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Whether the CAD board component is a free 3D body or not.

#### `DesCadBoardComponentInput.isLocked` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Whether the CAD board component is locked or not.

#### `DesCadBoardComponentInput.isMcadUsesOwn3DBody` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Whether MCAD uses its own 3D body for CAD board component.

#### `DesCadBoardComponentInput.location` · [`DesCadBoardPointInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-point-input.md) input design

CAD board component location.

#### `DesCadBoardComponentInput.modelInComponentTransform` · [`DesCadBodyTransformationInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-body-transformation-input.md) input design

In case component contains single 3D body, the body's position relative to the component's origin point is stored here.

#### `DesCadBoardComponentInput.placement` · [`DesCadBoardComponentPlacement`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-component-placement.md) enum design

CAD board component placement.

#### `DesCadBoardComponentInput.rotation` · [`Float`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) scalar common

CAD board component rotation.

#### `DesCadBoardComponentInput.variantName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board component variant name.
