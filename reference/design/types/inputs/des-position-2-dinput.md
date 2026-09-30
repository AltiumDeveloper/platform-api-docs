---
title: "DesPosition2DInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-position-2-dinput"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPosition2DInput

2D positional information in mm and mils.

### Member Of

[`DesRectangleInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-rectangle-input.md) input

```graphql
input DesPosition2DInput {
  x: Int!
  y: Int!
}
```

### Fields

#### `DesPosition2DInput.x` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Positional coordinate (X).

#### `DesPosition2DInput.y` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Positional coordinate (Y).
