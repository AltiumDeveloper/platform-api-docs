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

#### `componentTypeId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD component type identifier.

#### `designator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD component variation designator.

#### `location` · [`DesCadPoint!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-point.md) non-null object

CAD component variation location.

#### `modelInComponentTransform` · [`DesCadBodyTransformation`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-body-transformation.md) object

In case the component contains a single 3D body, the body's position relative to the component's origin point is stored here.

#### `placement` · [`DesCadBoardComponentPlacement!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-board-component-placement.md) non-null enum

CAD component variation placement.

#### `rotation` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar

CAD component variation rotation.

#### `variantKind` · [`DesCadComponentVariationKind!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-component-variation-kind.md) non-null enum

CAD component variant kind.
