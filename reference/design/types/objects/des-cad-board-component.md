---
title: "DesCadBoardComponent"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-component"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesCadBoardComponent

Information about a CAD board component.

### Member Of

[`DesCadBoardComponentType`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-component-type.md) object

```graphql
type DesCadBoardComponent {
  boardRegionName: String
  deepening: Int!
  designator: String
  free3DBodyRotationX: Float!
  free3DBodyRotationY: Float!
  free3DBodyRotationZ: Float!
  free3DBodyStandoffHeight: Int!
  id: String
  innerBodyRelativeToBoardTransform: DesCadBodyTransformation
  isFree3DBody: Boolean!
  isLocked: Boolean!
  isMcadUsesOwn3DBody: Boolean!
  location: DesCadPoint!
  modelInComponentTransform: DesCadBodyTransformation
  objectType: DesCadBoardObjectType!
  placement: DesCadBoardComponentPlacement!
  rotation: Float!
  variantName: String
}
```

### Fields

#### `DesCadBoardComponent.boardRegionName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Board region names for CAD board component.

#### `DesCadBoardComponent.deepening` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Deepening of CAD board component.

#### `DesCadBoardComponent.designator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Object designator.

#### `DesCadBoardComponent.free3DBodyRotationX` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

CAD board component free 3D body rotation (X).

#### `DesCadBoardComponent.free3DBodyRotationY` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

CAD board component free 3D body rotation (Y).

#### `DesCadBoardComponent.free3DBodyRotationZ` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

CAD board component free 3D body rotation (Z).

#### `DesCadBoardComponent.free3DBodyStandoffHeight` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

CAD board component free 3D body standoff height.

#### `DesCadBoardComponent.id` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Identifier for CAD board component.

#### `DesCadBoardComponent.innerBodyRelativeToBoardTransform` · [`DesCadBodyTransformation`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-body-transformation.md) object design

In case the component contains a single 3D body AND no conversion was performed when exporting to a 3D model, the 3D model's position relative to board is stored here.

#### `DesCadBoardComponent.isFree3DBody` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

True if CAD board component is a free 3D body.

#### `DesCadBoardComponent.isLocked` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

True if CAD board component is locked.

#### `DesCadBoardComponent.isMcadUsesOwn3DBody` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

True if CAD board component MCAD uses its own 3D body.

#### `DesCadBoardComponent.location` · [`DesCadPoint!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-point.md) non-null object design

Board object location.

#### `DesCadBoardComponent.modelInComponentTransform` · [`DesCadBodyTransformation`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-body-transformation.md) object design

In case component contains single 3D body, the body's position relative to the component's origin point is stored here.

#### `DesCadBoardComponent.objectType` · [`DesCadBoardObjectType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-object-type.md) non-null enum design

Board object type.

#### `DesCadBoardComponent.placement` · [`DesCadBoardComponentPlacement!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-component-placement.md) non-null enum design

Placement of CAD board component.

#### `DesCadBoardComponent.rotation` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

Board object rotation.

#### `DesCadBoardComponent.variantName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Variant name for CAD board component.
