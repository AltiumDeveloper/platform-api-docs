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

#### `DesCadBoardVia.copperDiameter` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

CAD board via copper diameter.

#### `DesCadBoardVia.endLayerName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board via end layer name.

#### `DesCadBoardVia.holeDiameter` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

CAD board via hole diameter.

#### `DesCadBoardVia.location` · [`DesCadPoint!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-point.md) non-null object design

CAD board hole location.

#### `DesCadBoardVia.startLayerName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board via start layer name.
