---
title: "DesignDataRectangle_Preview"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-rectangle-preview"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# DesignDataRectangle\_Preview

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents an axis-aligned rectangle.

### Member Of

[`DesignDataComponent_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-component-preview.md) object · [`DesignDataLine_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-line-preview.md) object · [`DesignDataNet_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-net-preview.md) object · [`DesignDataNetItem_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-net-item-preview.md) object · [`DesignDataPart_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-part-preview.md) object · [`DesignDataPin_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-pin-preview.md) object

```graphql
type DesignDataRectangle_Preview {
  bottom: Int!
  left: Int!
  right: Int!
  top: Int!
}
```

### Fields

#### `bottom` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The bottom edge coordinate.

#### `left` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The left edge coordinate.

#### `right` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The right edge coordinate.

#### `top` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The top edge coordinate.
