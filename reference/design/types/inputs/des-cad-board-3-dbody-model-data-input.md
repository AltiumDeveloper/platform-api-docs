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

#### `DesCadBoard3DBodyModelDataInput.color` · [`Long`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/long.md) scalar common

Model color.

#### `DesCadBoard3DBodyModelDataInput.isEcadProvidesRaw3DModel` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

True if ECAD provides the raw 3D model.

#### `DesCadBoard3DBodyModelDataInput.localTestFileName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Local test file name.

#### `DesCadBoard3DBodyModelDataInput.modelDisplayName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Model display name.

#### `DesCadBoard3DBodyModelDataInput.modelFileExtension` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Model file extension.

#### `DesCadBoard3DBodyModelDataInput.modelFileHash` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

File hash for model.

#### `DesCadBoard3DBodyModelDataInput.modelFilePath` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

File path for model.

#### `DesCadBoard3DBodyModelDataInput.modelIdOnServer` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Unique identifier for model on server.

#### `DesCadBoard3DBodyModelDataInput.modelNetName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Model net name.

#### `DesCadBoard3DBodyModelDataInput.modelPartName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Model part name.

#### `DesCadBoard3DBodyModelDataInput.opacity` · [`Float`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) scalar common

Model opacity.
