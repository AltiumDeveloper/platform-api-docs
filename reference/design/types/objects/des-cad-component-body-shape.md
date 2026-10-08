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

#### `height` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

CAD component body height.

#### `isBodylessOnEcad` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

True if CAD component is bodyless on ECAD.

#### `isHidden` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

True if CAD component body is hidden.

#### `modelData` · [`DesCadBoard3DBodyModelData`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-3-dbody-model-data.md) object

CAD component model data.

#### `shapeJson` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

JSON serialized \*GeometricShape\*.
