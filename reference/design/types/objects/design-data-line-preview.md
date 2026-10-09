---
title: "DesignDataLine_Preview"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-line-preview"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# DesignDataLine\_Preview

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents a line segment in the design.

### Member Of

[`DesignDataNet_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-net-preview.md) object

```graphql
type DesignDataLine_Preview {
  boundingRectangle: DesignDataRectangle_Preview
  documentId: String
  location: DesignDataLocation_Preview
  uniqueId: String
}
```

### Fields

#### `boundingRectangle` · [`DesignDataRectangle_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-rectangle-preview.md) object

The bounding rectangle of the line.

#### `documentId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The identifier of the document containing this line.

#### `location` · [`DesignDataLocation_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-location-preview.md) object

The location of the line.

#### `uniqueId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The unique identifier of the line.
