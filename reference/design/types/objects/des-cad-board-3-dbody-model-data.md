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

#### `color` · [`Long`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/long.md) scalar

3D model color.

#### `downloadToken` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The token for getting URL by `DesLibrary.downloadUrlsByTokens`.

#### `isEcadProvidesRaw3DModel` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

True if ECAD provides the raw 3D model.

#### `localTestFileName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Local test file name for 3D model.

#### `modelDisplayName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Display name for 3D model.

#### `modelFileExtension` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

3D model file extension.

#### `modelFileHash` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

File hash for 3D model.

#### `modelFilePath` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

File path for 3D model.

#### `modelIdOnServer` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Identifier on server for 3D model.

#### `modelNetName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

File path net name.

#### `modelPartName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Part name for 3D model.

#### `opacity` · [`Float`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) scalar

3D model opacity.
