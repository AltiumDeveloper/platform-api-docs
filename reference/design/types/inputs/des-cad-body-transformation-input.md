---
title: "DesCadBodyTransformationInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-body-transformation-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCadBodyTransformationInput

Input for CAD body transformation.

### Member Of

[`DesCadBoardComponentInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-component-input.md) input · [`DesCadComponentVariationInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-component-variation-input.md) input

```graphql
input DesCadBodyTransformationInput {
  rotationX: Float!
  rotationY: Float!
  rotationZ: Float!
  scaleX: Float!
  scaleY: Float!
  scaleZ: Float!
  translationX: Float!
  translationY: Float!
  translationZ: Float!
}
```

### Fields

#### `DesCadBodyTransformationInput.rotationX` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

CAD body rotation in X direction.

#### `DesCadBodyTransformationInput.rotationY` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

CAD body rotation in Y direction.

#### `DesCadBodyTransformationInput.rotationZ` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

CAD body rotation in Z direction.

#### `DesCadBodyTransformationInput.scaleX` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

CAD body scale in X direction.

#### `DesCadBodyTransformationInput.scaleY` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

CAD body scale in Y direction.

#### `DesCadBodyTransformationInput.scaleZ` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

CAD body scale in Z direction.

#### `DesCadBodyTransformationInput.translationX` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

CAD body translation in X direction.

#### `DesCadBodyTransformationInput.translationY` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

CAD body translation in Y direction.

#### `DesCadBodyTransformationInput.translationZ` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

CAD body translation in Z direction.
