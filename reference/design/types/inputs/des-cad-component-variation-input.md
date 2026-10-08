---
title: "DesCadComponentVariationInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-component-variation-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCadComponentVariationInput

Input for CAD component variation.

### Member Of

[`DesCadBoardVariantInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-variant-input.md) input

```graphql
input DesCadComponentVariationInput {
  componentTypeId: String
  designator: String
  location: DesCadBoardPointInput
  modelInComponentTransform: DesCadBodyTransformationInput
  placement: DesCadBoardComponentPlacement
  rotation: Float
  variantKind: DesCadComponentVariationKind
}
```

### Fields

#### `componentTypeId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD component variation component type identifier.

#### `designator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD component variation designator.

#### `location` · [`DesCadBoardPointInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-point-input.md) input

CAD component variation location.

#### `modelInComponentTransform` · [`DesCadBodyTransformationInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-body-transformation-input.md) input

In case the component variation contains a single 3D body, the body's position relative to the component's origin point is stored here.

#### `placement` · [`DesCadBoardComponentPlacement`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-component-placement.md) enum

CAD component variation placement.

#### `rotation` · [`Float`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) scalar

CAD component variation rotation.

#### `variantKind` · [`DesCadComponentVariationKind`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-component-variation-kind.md) enum

CAD component variant kind.
