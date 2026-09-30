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

#### `DesCadBoardLayer.layerCategory` · [`DesCadBoardLayerCategory!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-layer-category.md) non-null enum design

CAD board layer category.

#### `DesCadBoardLayer.layerComponentPlacement` · [`DesCadBoardLayerComponentPlacement!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-layer-component-placement.md) non-null enum design

CAD board layer component placement.

#### `DesCadBoardLayer.layerDielectricType` · [`DesCadBoardLayerDielectricType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-layer-dielectric-type.md) non-null enum design

CAD board layer dielectric type.

#### `DesCadBoardLayer.layerPhysicalCategory` · [`DesCadBoardLayerPhysicalCategory!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-layer-physical-category.md) non-null enum design

CAD board layer physical category.

#### `DesCadBoardLayer.layerPosition` · [`DesCadBoardLayerPosition!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-layer-position.md) non-null enum design

CAD board layer position.

#### `DesCadBoardLayer.layerType` · [`DesCadBoardLayerType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-layer-type.md) non-null enum design

CAD board layer type.

#### `DesCadBoardLayer.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board layer name.

#### `DesCadBoardLayer.platformLayerId` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

CAD board platform layer identifier.

#### `DesCadBoardLayer.thickness` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

CAD board layer thickness.
