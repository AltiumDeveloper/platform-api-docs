---
title: "DesCadPoint"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-point"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesCadPoint

Information about a CAD board point.

### Member Of

[`DesCadBendingLine`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-bending-line.md) object · [`DesCadBoardArea`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-area.md) object · [`DesCadBoardComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-component.md) object · [`DesCadBoardCutout`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-cutout.md) object · [`DesCadBoardHole`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-hole.md) object · [`DesCadBoardRegion`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-region.md) object · [`DesCadBoardTrack`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-track.md) object · [`DesCadBoardVia`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-via.md) object · [`DesCadComponentVariation`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-component-variation.md) object · [`DesCadDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-design.md) object · [`DesCadSplitLine`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-split-line.md) object

```graphql
type DesCadPoint {
  x: Int!
  y: Int!
  z: Int!
}
```

### Fields

#### `DesCadPoint.x` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

CAD point coordinate (X).

#### `DesCadPoint.y` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

CAD point coordinate (Y).

#### `DesCadPoint.z` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

CAD point coordinate (Z).
