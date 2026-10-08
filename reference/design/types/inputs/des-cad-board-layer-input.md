---
title: "DesCadBoardLayerInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-layer-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCadBoardLayerInput

Input for CAD board layer.

### Member Of

[`DesCadBoardRegionInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-region-input.md) input · [`DesCadDesignInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-design-input.md) input

```graphql
input DesCadBoardLayerInput {
  layerCategory: DesCadBoardLayerCategory
  layerComponentPlacement: DesCadBoardLayerComponentPlacement
  layerDielectricType: DesCadBoardLayerDielectricType
  layerPhysicalCategory: DesCadBoardLayerPhysicalCategory
  layerPosition: DesCadBoardLayerPosition
  layerType: DesCadBoardLayerType
  name: String
  platformLayerId: Int
  thickness: Int
}
```

### Fields

#### `layerCategory` · [`DesCadBoardLayerCategory`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-layer-category.md) enum

CAD board layer category.

#### `layerComponentPlacement` · [`DesCadBoardLayerComponentPlacement`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-layer-component-placement.md) enum

CAD board layer component placement.

#### `layerDielectricType` · [`DesCadBoardLayerDielectricType`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-layer-dielectric-type.md) enum

CAD board layer dielectric type.

#### `layerPhysicalCategory` · [`DesCadBoardLayerPhysicalCategory`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-layer-physical-category.md) enum

CAD board layer physical category.

#### `layerPosition` · [`DesCadBoardLayerPosition`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-layer-position.md) enum

CAD board layer position.

#### `layerType` · [`DesCadBoardLayerType`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-layer-type.md) enum

CAD board layer type.

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD board layer name.

#### `platformLayerId` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

CAD board layer platform layer identifier.

#### `thickness` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

CAD board layer thickness.
