---
title: "DesCadBoardTrackInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-track-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCadBoardTrackInput

CAD board track input.

### Member Of

[`DesCadDesignInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-design-input.md) input

```graphql
input DesCadBoardTrackInput {
  layerName: String
  netName: String
  points: [DesCadBoardPointInput!]
  width: Int
}
```

### Fields

#### `DesCadBoardTrackInput.layerName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board track layer name.

#### `DesCadBoardTrackInput.netName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD board track net name.

#### `DesCadBoardTrackInput.points` · [`[DesCadBoardPointInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-point-input.md) list input design

CAD board track points.

#### `DesCadBoardTrackInput.width` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

CAD board track width.
