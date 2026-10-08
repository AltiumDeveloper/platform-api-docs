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

#### `color` · [`Long`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/long.md) scalar

CAD board region color.

#### `internalPoint` · [`DesCadBoardPointInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-point-input.md) input

CAD board region internal point.

#### `isFlex` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Whether CAD board region is flex.

#### `isLocked3D` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Whether CAD board region is locked 3D.

#### `layers` · [`[DesCadBoardLayerInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-layer-input.md) list input

CAD board region layers.

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD board region name.

#### `regionLayerZBottom` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

CAD board region bottom layer Z value.

#### `regionLayerZTop` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

CAD board region top layer Z value.

#### `shapeJson` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

JSON serialized \*ComplexShape\*.
