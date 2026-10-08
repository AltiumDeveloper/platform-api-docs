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

#### `holeShapesJson` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

JSON serialized array of \*GeometricShape\*.

#### `layerName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD board copper region layer name.

#### `outlineShapesJson` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

JSON serialized array of \*GeometricShape\*.
