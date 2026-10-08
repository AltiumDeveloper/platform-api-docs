---
title: "DesCadBoardVia"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-via"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesCadBoardVia

Information about a via on the CAD board.

### Member Of

[`DesCadDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-design.md) object

```graphql
type DesCadBoardVia {
  copperDiameter: Int!
  endLayerName: String
  holeDiameter: Int!
  location: DesCadPoint!
  startLayerName: String
}
```

### Fields

#### `copperDiameter` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

CAD board via copper diameter.

#### `endLayerName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD board via end layer name.

#### `holeDiameter` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

CAD board via hole diameter.

#### `location` · [`DesCadPoint!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-point.md) non-null object

CAD board hole location.

#### `startLayerName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD board via start layer name.
