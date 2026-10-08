---
title: "DesCadBendingLine"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-bending-line"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesCadBendingLine

Lines in your board where the design is folded at assembly.

### Member Of

[`DesCadDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-design.md) object

```graphql
type DesCadBendingLine {
  affectedRegions: [String!]
  angle: Float!
  endPoint: DesCadPoint!
  foldIndex: Int!
  radius: Int!
  startPoint: DesCadPoint!
}
```

### Fields

#### `affectedRegions` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

The regions affected by the bend.

#### `angle` · [`Float!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) non-null scalar

The angle in degrees that the surface of the flex region is to bend.

#### `endPoint` · [`DesCadPoint!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-point.md) non-null object

Line ending point.

#### `foldIndex` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Defines the sequence that the bends are folded in at assembly.

#### `radius` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The distance away from the bend surface that the bending center point is located.

#### `startPoint` · [`DesCadPoint!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-point.md) non-null object

Line starting point.
