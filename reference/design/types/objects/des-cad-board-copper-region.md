---
title: "DesCadBoardCopperRegion"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-copper-region"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesCadBoardCopperRegion

Information about a copper layer region on the CAD board.

### Member Of

[`DesCadDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-design.md) object

```graphql
type DesCadBoardCopperRegion {
  holeShapesJson: String
  layerName: String
  outlineShapesJson: String
  regionType: DesCadBoardCopperRegionType!
}
```

### Fields

#### `DesCadBoardCopperRegion.holeShapesJson` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

JSON serialized array of \*GeometricShape\*.

#### `DesCadBoardCopperRegion.layerName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board copper region layer name.

#### `DesCadBoardCopperRegion.outlineShapesJson` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

JSON serialized array of \*GeometricShape\*.

#### `DesCadBoardCopperRegion.regionType` · [`DesCadBoardCopperRegionType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-copper-region-type.md) non-null enum design

CAD board copper region type.
