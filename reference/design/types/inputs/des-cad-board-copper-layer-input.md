---
title: "DesCadBoardCopperLayerInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-copper-layer-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCadBoardCopperLayerInput

Input for CAD board copper layout.

### Member Of

[`DesCadDesignInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-design-input.md) input

```graphql
input DesCadBoardCopperLayerInput {
  isPadAndViaBarrelsSpecialLayer: Boolean
  models: [DesCadBoard3DBodyModelDataInput!]
  name: String
  platformLayerId: Int
  thickness: Int
}
```

### Fields

#### `DesCadBoardCopperLayerInput.isPadAndViaBarrelsSpecialLayer` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Whether CAD board copper layout is a pad and via barrels special layer.

#### `DesCadBoardCopperLayerInput.models` · [`[DesCadBoard3DBodyModelDataInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-3-dbody-model-data-input.md) list input design

CAD board copper layout models.

#### `DesCadBoardCopperLayerInput.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board copper layout name.

#### `DesCadBoardCopperLayerInput.platformLayerId` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

CAD board copper layout platform layer identifier.

#### `DesCadBoardCopperLayerInput.thickness` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

CAD board copper layout thickness.
