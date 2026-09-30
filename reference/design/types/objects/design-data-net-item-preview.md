---
title: "DesignDataNetItem_Preview"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-net-item-preview"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# DesignDataNetItem\_Preview

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents an item belonging to a net.

### Member Of

[`DesignDataNet_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-net-preview.md) object

```graphql
type DesignDataNetItem_Preview {
  boundingRectangle: DesignDataRectangle_Preview
  documentId: String
  kind: String
  location: DesignDataLocation_Preview
  portName: String
  uniqueId: String
  variantId: String
  variantName: String
}
```

### Fields

#### `DesignDataNetItem_Preview.boundingRectangle` · [`DesignDataRectangle_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-rectangle-preview.md) object design

The bounding rectangle of the net item.

#### `DesignDataNetItem_Preview.documentId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The identifier of the document containing this net item.

#### `DesignDataNetItem_Preview.kind` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The kind of the object.

#### `DesignDataNetItem_Preview.location` · [`DesignDataLocation_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-location-preview.md) object design

The location of the net item.

#### `DesignDataNetItem_Preview.portName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The port name associated with this net item.

#### `DesignDataNetItem_Preview.uniqueId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The unique identifier of the net item.

#### `DesignDataNetItem_Preview.variantId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The variant identifier of the net item.

#### `DesignDataNetItem_Preview.variantName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The variant name of the net item.
