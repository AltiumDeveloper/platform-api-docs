---
title: "DesCadBoardLayer"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-layer"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesCadBoardLayer

Information about a layer on the CAD board component.

### Member Of

[`DesCadBoardRegion`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-region.md) object · [`DesCadDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-design.md) object

```graphql
type DesCadBoardLayer {
  layerCategory: DesCadBoardLayerCategory!
  layerComponentPlacement: DesCadBoardLayerComponentPlacement!
  layerDielectricType: DesCadBoardLayerDielectricType!
  layerPhysicalCategory: DesCadBoardLayerPhysicalCategory!
  layerPosition: DesCadBoardLayerPosition!
  layerType: DesCadBoardLayerType!
  name: String
  platformLayerId: Int!
  thickness: Int!
}
```

### Fields

#### `layerCategory` · [`DesCadBoardLayerCategory!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-layer-category.md) non-null enum

CAD board layer category.

#### `layerComponentPlacement` · [`DesCadBoardLayerComponentPlacement!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-layer-component-placement.md) non-null enum

CAD board layer component placement.

#### `layerDielectricType` · [`DesCadBoardLayerDielectricType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-layer-dielectric-type.md) non-null enum

CAD board layer dielectric type.

#### `layerPhysicalCategory` · [`DesCadBoardLayerPhysicalCategory!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-layer-physical-category.md) non-null enum

CAD board layer physical category.

#### `layerPosition` · [`DesCadBoardLayerPosition!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-layer-position.md) non-null enum

CAD board layer position.

#### `layerType` · [`DesCadBoardLayerType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-layer-type.md) non-null enum

CAD board layer type.

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD board layer name.

#### `platformLayerId` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

CAD board platform layer identifier.

#### `thickness` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

CAD board layer thickness.
