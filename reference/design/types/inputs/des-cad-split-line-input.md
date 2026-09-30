---
title: "DesCadSplitLineInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-split-line-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCadSplitLineInput

Input for CAD split line.

### Member Of

[`DesCadDesignInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-design-input.md) input

```graphql
input DesCadSplitLineInput {
  endPoint: DesCadBoardPointInput
  leftRegionName: String
  rightRegionName: String
  shapeJson: String
  startPoint: DesCadBoardPointInput
}
```

### Fields

#### `DesCadSplitLineInput.endPoint` · [`DesCadBoardPointInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-point-input.md) input design

End point for CAD split line.

#### `DesCadSplitLineInput.leftRegionName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Left region name for CAD split line.

#### `DesCadSplitLineInput.rightRegionName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Right region name for CAD split line.

#### `DesCadSplitLineInput.shapeJson` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

JSON serialized \*ComplexShape\*.

#### `DesCadSplitLineInput.startPoint` · [`DesCadBoardPointInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-point-input.md) input design

Start point for CAD split line.
