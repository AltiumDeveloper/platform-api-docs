---
title: "DesCadSplitLine"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-split-line"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesCadSplitLine

Information about a CAD split line.

### Member Of

[`DesCadDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-design.md) object

```graphql
type DesCadSplitLine {
  endPoint: DesCadPoint!
  leftRegionName: String
  rightRegionName: String
  shapeJson: String
  startPoint: DesCadPoint!
}
```

### Fields

#### `DesCadSplitLine.endPoint` · [`DesCadPoint!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-point.md) non-null object design

Line ending point.

#### `DesCadSplitLine.leftRegionName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD split line region name (left).

#### `DesCadSplitLine.rightRegionName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

CAD split line region name (right).

#### `DesCadSplitLine.shapeJson` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

JSON serialized \*ComplexShape\*.

#### `DesCadSplitLine.startPoint` · [`DesCadPoint!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-point.md) non-null object design

Line starting point.
