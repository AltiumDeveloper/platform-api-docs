---
title: "DesCadBoardHoleInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-hole-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCadBoardHoleInput

Input for CAD board hole.

### Member Of

[`DesCadDesignInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-design-input.md) input

```graphql
input DesCadBoardHoleInput {
  associatedComponentDesignator: String
  counterAngle: Float
  counterDepth: Int
  counterSize: Int
  counterType: DesCadCounterType
  designator: String
  diameter: Int
  holeType: DesCadHoleType
  isPlated: Boolean
  location: DesCadBoardPointInput
  originalDesignator: String
  rotation: Float
  size: DesCadBoardPointInput
  uniqueId: String
}
```

### Fields

#### `associatedComponentDesignator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD board hole associated component designator.

#### `counterAngle` · [`Float`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) scalar

CAD board counter angle.

#### `counterDepth` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

CAD board hole counter depth.

#### `counterSize` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

CAD board hole counter size.

#### `counterType` · [`DesCadCounterType`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-counter-type.md) enum

CAD board hole counter type.

#### `designator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD board hole designator.

#### `diameter` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

CAD board hole diameter.

#### `holeType` · [`DesCadHoleType`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-hole-type.md) enum

CAD board hole type.

#### `isPlated` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Whether the CAD board hole is plated or not.

#### `location` · [`DesCadBoardPointInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-point-input.md) input

CAD board hole location.

#### `originalDesignator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD board hole original designator.

#### `rotation` · [`Float`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) scalar

CAD board hole rotation.

#### `size` · [`DesCadBoardPointInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-point-input.md) input

CAD board hole size.

#### `uniqueId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Unique identifier for CAD board hole.
