---
title: "DesCadBoardCopperLayer"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-copper-layer"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesCadBoardCopperLayer

Information about a copper layer on the CAD board.

### Member Of

[`DesCadDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-design.md) object

```graphql
type DesCadBoardCopperLayer {
  isPadAndViaBarrelsSpecialLayer: Boolean!
  models: [DesCadBoard3DBodyModelData!]
  name: String
  platformLayerId: Int!
  thickness: Int!
}
```

### Fields

#### `DesCadBoardCopperLayer.isPadAndViaBarrelsSpecialLayer` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

True if CAD board copper layer is pad and via barrels special layer.

#### `DesCadBoardCopperLayer.models` · [`[DesCadBoard3DBodyModelData!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-3-dbody-model-data.md) list object design

CAD board copper layer models.

#### `DesCadBoardCopperLayer.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board copper layer name.

#### `DesCadBoardCopperLayer.platformLayerId` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

CAD board copper layer platform layer identifier.

#### `DesCadBoardCopperLayer.thickness` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

CAD board copper layer thickness.
