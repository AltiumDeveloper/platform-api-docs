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

#### `isPadAndViaBarrelsSpecialLayer` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Whether CAD board copper layout is a pad and via barrels special layer.

#### `models` · [`[DesCadBoard3DBodyModelDataInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-3-dbody-model-data-input.md) list input

CAD board copper layout models.

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD board copper layout name.

#### `platformLayerId` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

CAD board copper layout platform layer identifier.

#### `thickness` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

CAD board copper layout thickness.
