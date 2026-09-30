---
title: "DesRectangleInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-rectangle-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesRectangleInput

Rectangle positional information.

### Member Of

[`DesCreateCommentThreadInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/inputs/des-create-comment-thread-input.md) input

```graphql
input DesRectangleInput {
  pos1: DesPosition2DInput!
  pos2: DesPosition2DInput!
}
```

### Fields

#### `DesRectangleInput.pos1` · [`DesPosition2DInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-position-2-dinput.md) non-null input design

Rectangle corner point 1.

#### `DesRectangleInput.pos2` · [`DesPosition2DInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-position-2-dinput.md) non-null input design

Rectangle corner point 2.
