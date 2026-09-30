---
title: "DesCadComponentBodyShapeInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-component-body-shape-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCadComponentBodyShapeInput

Input for CAD component body shape.

### Member Of

[`DesCadBoardComponentTypeInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-component-type-input.md) input

```graphql
input DesCadComponentBodyShapeInput {
  height: Int
  isBodylessOnEcad: Boolean
  isHidden: Boolean
  modelData: DesCadBoard3DBodyModelDataInput
  shapeJson: String
}
```

### Fields

#### `DesCadComponentBodyShapeInput.height` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Height of CAD component body shape.

#### `DesCadComponentBodyShapeInput.isBodylessOnEcad` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Whether CAD component body shape is bodyless on ECAD.

#### `DesCadComponentBodyShapeInput.isHidden` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Whether CAD component body shape is hidden or not.

#### `DesCadComponentBodyShapeInput.modelData` · [`DesCadBoard3DBodyModelDataInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-3-dbody-model-data-input.md) input design

Model data for CAD component body shape.

#### `DesCadComponentBodyShapeInput.shapeJson` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

JSON serialized \*GeometricShape\*.
