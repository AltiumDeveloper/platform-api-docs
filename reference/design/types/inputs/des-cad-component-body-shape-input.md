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

#### `height` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Height of CAD component body shape.

#### `isBodylessOnEcad` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Whether CAD component body shape is bodyless on ECAD.

#### `isHidden` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Whether CAD component body shape is hidden or not.

#### `modelData` · [`DesCadBoard3DBodyModelDataInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-3-dbody-model-data-input.md) input

Model data for CAD component body shape.

#### `shapeJson` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

JSON serialized \*GeometricShape\*.
