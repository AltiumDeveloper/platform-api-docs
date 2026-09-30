---
title: "DesCadComponentVariation"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-component-variation"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesCadComponentVariation

Information about a variation of a CAD board component.

### Member Of

[`DesCadBoardVariant`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-variant.md) object

```graphql
type DesCadComponentVariation {
  componentTypeId: String
  designator: String
  location: DesCadPoint!
  modelInComponentTransform: DesCadBodyTransformation
  placement: DesCadBoardComponentPlacement!
  rotation: Float!
  variantKind: DesCadComponentVariationKind!
}
```

### Fields

#### `DesCadComponentVariation.componentTypeId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD component type identifier.

#### `DesCadComponentVariation.designator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD component variation designator.

#### `DesCadComponentVariation.location` · [`DesCadPoint!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-point.md) non-null object design

CAD component variation location.

#### `DesCadComponentVariation.modelInComponentTransform` · [`DesCadBodyTransformation`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-body-transformation.md) object design

In case the component contains a single 3D body, the body's position relative to the component's origin point is stored here.

#### `DesCadComponentVariation.placement` · [`DesCadBoardComponentPlacement!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-component-placement.md) non-null enum design

CAD component variation placement.

#### `DesCadComponentVariation.rotation` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar common

CAD component variation rotation.

#### `DesCadComponentVariation.variantKind` · [`DesCadComponentVariationKind!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-component-variation-kind.md) non-null enum design

CAD component variant kind.
