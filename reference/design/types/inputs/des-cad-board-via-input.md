---
title: "DesCadBoardViaInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-via-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCadBoardViaInput

Input for CAD board via.

### Member Of

[`DesCadDesignInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-design-input.md) input

```graphql
input DesCadBoardViaInput {
  copperDiameter: Int
  endLayerName: String
  holeDiameter: Int
  location: DesCadBoardPointInput
  startLayerName: String
}
```

### Fields

#### `DesCadBoardViaInput.copperDiameter` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

CAD board via copper diameter.

#### `DesCadBoardViaInput.endLayerName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

End layer name for CAD board via.

#### `DesCadBoardViaInput.holeDiameter` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

CAD board via hole diameter.

#### `DesCadBoardViaInput.location` · [`DesCadBoardPointInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-point-input.md) input design

CAD board via location.

#### `DesCadBoardViaInput.startLayerName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Start layer name for CAD board via.
