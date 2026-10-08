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

#### `boardRegionName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Board region names for CAD board component.

#### `deepening` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Deepening of CAD board component.

#### `designator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Object designator.

#### `free3DBodyRotationX` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar

CAD board component free 3D body rotation (X).

#### `free3DBodyRotationY` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar

CAD board component free 3D body rotation (Y).

#### `free3DBodyRotationZ` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar

CAD board component free 3D body rotation (Z).

#### `free3DBodyStandoffHeight` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

CAD board component free 3D body standoff height.

#### `id` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Identifier for CAD board component.

#### `innerBodyRelativeToBoardTransform` · [`DesCadBodyTransformation`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-body-transformation.md) object

In case the component contains a single 3D body AND no conversion was performed when exporting to a 3D model, the 3D model's position relative to board is stored here.

#### `isFree3DBody` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

True if CAD board component is a free 3D body.

#### `isLocked` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

True if CAD board component is locked.

#### `isMcadUsesOwn3DBody` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

True if CAD board component MCAD uses its own 3D body.

#### `location` · [`DesCadPoint!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-point.md) non-null object

Board object location.

#### `modelInComponentTransform` · [`DesCadBodyTransformation`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-body-transformation.md) object

In case component contains single 3D body, the body's position relative to the component's origin point is stored here.

#### `objectType` · [`DesCadBoardObjectType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-object-type.md) non-null enum

Board object type.

#### `placement` · [`DesCadBoardComponentPlacement!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-component-placement.md) non-null enum

Placement of CAD board component.

#### `rotation` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar

Board object rotation.

#### `variantName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Variant name for CAD board component.
