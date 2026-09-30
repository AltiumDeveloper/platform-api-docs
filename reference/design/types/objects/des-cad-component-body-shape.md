---
title: "DesCadComponentBodyShape"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-component-body-shape"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesCadComponentBodyShape

Information about the body shape of a CAD board component.

### Member Of

[`DesCadBoardComponentType`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-component-type.md) object

```graphql
type DesCadComponentBodyShape {
  height: Int!
  isBodylessOnEcad: Boolean!
  isHidden: Boolean!
  modelData: DesCadBoard3DBodyModelData
  shapeJson: String
}
```

### Fields

#### `DesCadComponentBodyShape.height` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

CAD component body height.

#### `DesCadComponentBodyShape.isBodylessOnEcad` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

True if CAD component is bodyless on ECAD.

#### `DesCadComponentBodyShape.isHidden` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

True if CAD component body is hidden.

#### `DesCadComponentBodyShape.modelData` · [`DesCadBoard3DBodyModelData`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-3-dbody-model-data.md) object design

CAD component model data.

#### `DesCadComponentBodyShape.shapeJson` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

JSON serialized \*GeometricShape\*.
