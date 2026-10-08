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

#### `rotationX` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar

CAD body rotation in X direction.

#### `rotationY` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar

CAD body rotation in Y direction.

#### `rotationZ` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar

CAD body rotation in Z direction.

#### `scaleX` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar

CAD body scale in X direction.

#### `scaleY` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar

CAD body scale in Y direction.

#### `scaleZ` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar

CAD body scale in Z direction.

#### `translationX` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar

CAD body translation in X direction.

#### `translationY` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar

CAD body translation in Y direction.

#### `translationZ` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar

CAD body translation in Z direction.
