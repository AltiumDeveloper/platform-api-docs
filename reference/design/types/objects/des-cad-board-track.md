---
title: "DesCadBoardTrack"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-track"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesCadBoardTrack

Information about a track on the CAD board.

### Member Of

[`DesCadDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-design.md) object

```graphql
type DesCadBoardTrack {
  layerName: String
  netName: String
  points: [DesCadPoint!]!
  width: Int!
}
```

### Fields

#### `layerName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD board track layer name.

#### `netName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD board track net name.

#### `points` · [`[DesCadPoint!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-point.md) non-null object

CAD board track points.

#### `width` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

CAD board track width.
