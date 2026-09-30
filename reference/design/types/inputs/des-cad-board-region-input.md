---
title: "DesCadBoardRegionInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-region-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCadBoardRegionInput

Input for CAD board region.

### Member Of

[`DesCadDesignInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-design-input.md) input

```graphql
input DesCadBoardRegionInput {
  color: Long
  internalPoint: DesCadBoardPointInput
  isFlex: Boolean
  isLocked3D: Boolean
  layers: [DesCadBoardLayerInput!]
  name: String
  regionLayerZBottom: Int
  regionLayerZTop: Int
  shapeJson: String
}
```

### Fields

#### `DesCadBoardRegionInput.color` · [`Long`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/long.md) scalar common

CAD board region color.

#### `DesCadBoardRegionInput.internalPoint` · [`DesCadBoardPointInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-point-input.md) input design

CAD board region internal point.

#### `DesCadBoardRegionInput.isFlex` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Whether CAD board region is flex.

#### `DesCadBoardRegionInput.isLocked3D` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Whether CAD board region is locked 3D.

#### `DesCadBoardRegionInput.layers` · [`[DesCadBoardLayerInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-layer-input.md) list input design

CAD board region layers.

#### `DesCadBoardRegionInput.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board region name.

#### `DesCadBoardRegionInput.regionLayerZBottom` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

CAD board region bottom layer Z value.

#### `DesCadBoardRegionInput.regionLayerZTop` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

CAD board region top layer Z value.

#### `DesCadBoardRegionInput.shapeJson` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

JSON serialized \*ComplexShape\*.
