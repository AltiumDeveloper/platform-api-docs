---
title: "DesCadBoard3DBodyModelData"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-3-dbody-model-data"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesCadBoard3DBodyModelData

An item instance containing information a 3D model.

### Member Of

[`DesCadBoardCopperLayer`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-copper-layer.md) object · [`DesCadComponentBodyShape`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-component-body-shape.md) object

```graphql
type DesCadBoard3DBodyModelData {
  color: Long
  downloadToken: String
  isEcadProvidesRaw3DModel: Boolean!
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

#### `DesCadBoard3DBodyModelData.color` · [`Long`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/long.md) scalar common

3D model color.

#### `DesCadBoard3DBodyModelData.downloadToken` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The token for getting URL by `DesLibrary.downloadUrlsByTokens`.

#### `DesCadBoard3DBodyModelData.isEcadProvidesRaw3DModel` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

True if ECAD provides the raw 3D model.

#### `DesCadBoard3DBodyModelData.localTestFileName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Local test file name for 3D model.

#### `DesCadBoard3DBodyModelData.modelDisplayName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Display name for 3D model.

#### `DesCadBoard3DBodyModelData.modelFileExtension` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

3D model file extension.

#### `DesCadBoard3DBodyModelData.modelFileHash` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

File hash for 3D model.

#### `DesCadBoard3DBodyModelData.modelFilePath` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

File path for 3D model.

#### `DesCadBoard3DBodyModelData.modelIdOnServer` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Identifier on server for 3D model.

#### `DesCadBoard3DBodyModelData.modelNetName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

File path net name.

#### `DesCadBoard3DBodyModelData.modelPartName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Part name for 3D model.

#### `DesCadBoard3DBodyModelData.opacity` · [`Float`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) scalar common

3D model opacity.
