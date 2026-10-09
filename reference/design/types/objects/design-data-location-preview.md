---
title: "DesignDataLocation_Preview"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-location-preview"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# DesignDataLocation\_Preview

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents a 2D coordinate location.

### Member Of

[`DesignDataComponent_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-component-preview.md) object · [`DesignDataLine_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-line-preview.md) object · [`DesignDataNet_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-net-preview.md) object · [`DesignDataNetItem_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-net-item-preview.md) object · [`DesignDataPart_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-part-preview.md) object · [`DesignDataPin_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-pin-preview.md) object

```graphql
type DesignDataLocation_Preview {
  x: Int!
  y: Int!
}
```

### Fields

#### `x` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The X coordinate.

#### `y` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The Y coordinate.
