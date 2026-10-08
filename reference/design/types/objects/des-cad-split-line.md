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

#### `endPoint` · [`DesCadPoint!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-point.md) non-null object

Line ending point.

#### `leftRegionName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD split line region name (left).

#### `rightRegionName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD split line region name (right).

#### `shapeJson` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

JSON serialized \*ComplexShape\*.

#### `startPoint` · [`DesCadPoint!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-point.md) non-null object

Line starting point.
