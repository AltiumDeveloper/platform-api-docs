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

#### `DesCadBoardLayerInput.layerCategory` · [`DesCadBoardLayerCategory`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-layer-category.md) enum design

CAD board layer category.

#### `DesCadBoardLayerInput.layerComponentPlacement` · [`DesCadBoardLayerComponentPlacement`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-layer-component-placement.md) enum design

CAD board layer component placement.

#### `DesCadBoardLayerInput.layerDielectricType` · [`DesCadBoardLayerDielectricType`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-layer-dielectric-type.md) enum design

CAD board layer dielectric type.

#### `DesCadBoardLayerInput.layerPhysicalCategory` · [`DesCadBoardLayerPhysicalCategory`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-layer-physical-category.md) enum design

CAD board layer physical category.

#### `DesCadBoardLayerInput.layerPosition` · [`DesCadBoardLayerPosition`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-layer-position.md) enum design

CAD board layer position.

#### `DesCadBoardLayerInput.layerType` · [`DesCadBoardLayerType`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-layer-type.md) enum design

CAD board layer type.

#### `DesCadBoardLayerInput.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board layer name.

#### `DesCadBoardLayerInput.platformLayerId` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

CAD board layer platform layer identifier.

#### `DesCadBoardLayerInput.thickness` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

CAD board layer thickness.
