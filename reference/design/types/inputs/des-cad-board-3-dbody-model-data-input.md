---
title: "DesCadBoard3DBodyModelDataInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-3-dbody-model-data-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCadBoard3DBodyModelDataInput

Input for CAD Board 3D Body Model Data.

### Member Of

[`DesCadBoardCopperLayerInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-copper-layer-input.md) input · [`DesCadComponentBodyShapeInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-component-body-shape-input.md) input

```graphql
input DesCadBoard3DBodyModelDataInput {
  color: Long
  isEcadProvidesRaw3DModel: Boolean
  localTestFileName: String
  modelDisplayName: String
  modelFileExtension: String
  modelFileHash: String
  modelFilePath: String
  modelIdOnServer: String
  modelNetName: String
  modelPartName: String
  opacity: Float
}
```

### Fields

#### `color` · [`Long`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/long.md) scalar

Model color.

#### `isEcadProvidesRaw3DModel` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

True if ECAD provides the raw 3D model.

#### `localTestFileName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Local test file name.

#### `modelDisplayName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Model display name.

#### `modelFileExtension` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Model file extension.

#### `modelFileHash` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

File hash for model.

#### `modelFilePath` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

File path for model.

#### `modelIdOnServer` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Unique identifier for model on server.

#### `modelNetName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Model net name.

#### `modelPartName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Model part name.

#### `opacity` · [`Float`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) scalar

Model opacity.
