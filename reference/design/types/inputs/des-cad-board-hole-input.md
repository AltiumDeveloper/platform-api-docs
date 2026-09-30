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

#### `DesCadBoardHoleInput.associatedComponentDesignator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board hole associated component designator.

#### `DesCadBoardHoleInput.counterAngle` · [`Float`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) scalar common

CAD board counter angle.

#### `DesCadBoardHoleInput.counterDepth` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

CAD board hole counter depth.

#### `DesCadBoardHoleInput.counterSize` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

CAD board hole counter size.

#### `DesCadBoardHoleInput.counterType` · [`DesCadCounterType`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-counter-type.md) enum design

CAD board hole counter type.

#### `DesCadBoardHoleInput.designator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board hole designator.

#### `DesCadBoardHoleInput.diameter` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

CAD board hole diameter.

#### `DesCadBoardHoleInput.holeType` · [`DesCadHoleType`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-hole-type.md) enum design

CAD board hole type.

#### `DesCadBoardHoleInput.isPlated` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Whether the CAD board hole is plated or not.

#### `DesCadBoardHoleInput.location` · [`DesCadBoardPointInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-point-input.md) input design

CAD board hole location.

#### `DesCadBoardHoleInput.originalDesignator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board hole original designator.

#### `DesCadBoardHoleInput.rotation` · [`Float`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) scalar common

CAD board hole rotation.

#### `DesCadBoardHoleInput.size` · [`DesCadBoardPointInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-point-input.md) input design

CAD board hole size.

#### `DesCadBoardHoleInput.uniqueId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Unique identifier for CAD board hole.
