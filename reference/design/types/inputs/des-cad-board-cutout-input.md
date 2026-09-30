---
title: "DesCadBoardCutoutInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-cutout-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCadBoardCutoutInput

Input for CAD board cutout.

### Member Of

[`DesCadDesignInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-design-input.md) input

```graphql
input DesCadBoardCutoutInput {
  associatedComponentDesignator: String
  designator: String
  location: DesCadBoardPointInput
  originalDesignator: String
  rotation: Float
  shapeJson: String
  uniqueId: String
}
```

### Fields

#### `DesCadBoardCutoutInput.associatedComponentDesignator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board cutout associated component designator.

#### `DesCadBoardCutoutInput.designator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board cutout designator.

#### `DesCadBoardCutoutInput.location` · [`DesCadBoardPointInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-point-input.md) input design

CAD board cutout location.

#### `DesCadBoardCutoutInput.originalDesignator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board cutout original designator.

#### `DesCadBoardCutoutInput.rotation` · [`Float`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) scalar common

CAD board cutout rotation.

#### `DesCadBoardCutoutInput.shapeJson` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

JSON serialized \*GeometricShape\*.

#### `DesCadBoardCutoutInput.uniqueId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Unique identifier for CAD board cutout.
