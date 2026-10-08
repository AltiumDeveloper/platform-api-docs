---
title: "DesCadBoardPointInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-point-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCadBoardPointInput

Input for CAD board point.

### Member Of

[`DesCadBendingLineInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-bending-line-input.md) input · [`DesCadBoardAreaInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-area-input.md) input · [`DesCadBoardComponentInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-component-input.md) input · [`DesCadBoardCutoutInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-cutout-input.md) input · [`DesCadBoardHoleInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-hole-input.md) input · [`DesCadBoardRegionInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-region-input.md) input · [`DesCadBoardTrackInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-track-input.md) input · [`DesCadBoardViaInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-via-input.md) input · [`DesCadComponentVariationInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-component-variation-input.md) input · [`DesCadDesignInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-design-input.md) input · [`DesCadSplitLineInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-split-line-input.md) input

```graphql
input DesCadBoardPointInput {
  x: Int!
  y: Int!
  z: Int!
}
```

### Fields

#### `x` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

CAD board coordinate (X).

#### `y` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

CAD board coordinate (Y).

#### `z` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

CAD board coordinate (Z).
