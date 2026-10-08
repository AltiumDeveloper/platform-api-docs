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

#### `holeShapesJson` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

JSON serialized array of \*GeometricShape\*.

#### `layerName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD board copper region layer name.

#### `outlineShapesJson` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

JSON serialized array of \*GeometricShape\*.

#### `regionType` · [`DesCadBoardCopperRegionType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-copper-region-type.md) non-null enum

CAD board copper region type.
