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

#### `DesCadComponentVariationInput.componentTypeId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD component variation component type identifier.

#### `DesCadComponentVariationInput.designator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD component variation designator.

#### `DesCadComponentVariationInput.location` · [`DesCadBoardPointInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-point-input.md) input design

CAD component variation location.

#### `DesCadComponentVariationInput.modelInComponentTransform` · [`DesCadBodyTransformationInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-body-transformation-input.md) input design

In case the component variation contains a single 3D body, the body's position relative to the component's origin point is stored here.

#### `DesCadComponentVariationInput.placement` · [`DesCadBoardComponentPlacement`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-component-placement.md) enum design

CAD component variation placement.

#### `DesCadComponentVariationInput.rotation` · [`Float`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) scalar common

CAD component variation rotation.

#### `DesCadComponentVariationInput.variantKind` · [`DesCadComponentVariationKind`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-component-variation-kind.md) enum design

CAD component variant kind.
