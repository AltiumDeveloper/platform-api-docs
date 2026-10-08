---
title: "DesRectangle"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-rectangle"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesRectangle

Rectangle positional information.

### Member Of

[`DesCommentContext`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-comment-context.md) object · [`DesDesignItem`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design-item.md) object

```graphql
type DesRectangle {
  pos1: DesPosition2D!
  pos2: DesPosition2D!
}
```

### Fields

#### `pos1` · [`DesPosition2D!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-position-2-d.md) non-null object

Rectangle corner point 1.

#### `pos2` · [`DesPosition2D!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-position-2-d.md) non-null object

Rectangle corner point 2.
