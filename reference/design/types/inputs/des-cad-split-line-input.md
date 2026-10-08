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

#### `endPoint` · [`DesCadBoardPointInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-point-input.md) input

End point for CAD split line.

#### `leftRegionName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Left region name for CAD split line.

#### `rightRegionName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Right region name for CAD split line.

#### `shapeJson` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

JSON serialized \*ComplexShape\*.

#### `startPoint` · [`DesCadBoardPointInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-board-point-input.md) input

Start point for CAD split line.
