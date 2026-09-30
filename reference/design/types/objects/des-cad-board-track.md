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

#### `DesCadBoardTrack.layerName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board track layer name.

#### `DesCadBoardTrack.netName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board track net name.

#### `DesCadBoardTrack.points` · [`[DesCadPoint!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-point.md) non-null object design

CAD board track points.

#### `DesCadBoardTrack.width` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

CAD board track width.
