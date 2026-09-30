---
title: "DesCadBoardCopperRegionInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-copper-region-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCadBoardCopperRegionInput

Input for CAD board copper region.

### Member Of

[`DesCadDesignInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-design-input.md) input

```graphql
input DesCadBoardCopperRegionInput {
  holeShapesJson: String
  layerName: String
  outlineShapesJson: String
}
```

### Fields

#### `DesCadBoardCopperRegionInput.holeShapesJson` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

JSON serialized array of \*GeometricShape\*.

#### `DesCadBoardCopperRegionInput.layerName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board copper region layer name.

#### `DesCadBoardCopperRegionInput.outlineShapesJson` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

JSON serialized array of \*GeometricShape\*.
