---
title: "DesCadBendingLineInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-bending-line-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCadBendingLineInput

Input for CAD bending line.

### Member Of

[`DesCadDesignInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-design-input.md) input

```graphql
input DesCadBendingLineInput {
  affectedRegions: [String!]
  angle: Float
  endPoint: DesCadBoardPointInput
  foldIndex: Int
  radius: Int
  startPoint: DesCadBoardPointInput
}
```

### Fields

#### `affectedRegions` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Regions that are affected by the CAD bending line.

#### `angle` · [`Float`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) scalar

CAD bending line angle.

#### `endPoint` · [`DesCadBoardPointInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-point-input.md) input

CAD bending line end point.

#### `foldIndex` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

CAD bending line fold index required to define the sequence that the bends are folded.

#### `radius` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

CAD bending line radius.

#### `startPoint` · [`DesCadBoardPointInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-point-input.md) input

CAD bending line start point.
