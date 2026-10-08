---
title: "DesignDataPart_Preview"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-part-preview"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# DesignDataPart\_Preview

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents a part within a component.

### Member Of

[`DesignDataComponent_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-component-preview.md) object

```graphql
type DesignDataPart_Preview {
  boundingRectangle: DesignDataRectangle_Preview
  designPartId: String
  documentId: String
  itemGuid: String
  location: DesignDataLocation_Preview
  logicalDesignator: String
  parameters: [DesignDataPartParameter_Preview!]!
  physicalDesignator: String
  pins: [DesignDataPin_Preview!]!
  revisionGuid: String
  uniqueId: String @deprecated
  variantId: String
  variantName: String
  variationKind: String
  vaultGuid: String
}
```

### Fields

#### `DesignDataPart_Preview.boundingRectangle` · [`DesignDataRectangle_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-rectangle-preview.md) object

The bounding rectangle of the part.

#### `DesignDataPart_Preview.designPartId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The unique identifier of the part within the design.

#### `DesignDataPart_Preview.documentId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The identifier of the document containing this part.

#### `DesignDataPart_Preview.itemGuid` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The item GUID of the part.

#### `DesignDataPart_Preview.location` · [`DesignDataLocation_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-location-preview.md) object

The location of the part.

#### `DesignDataPart_Preview.logicalDesignator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The logical designator of the part.

#### `DesignDataPart_Preview.parameters` · [`[DesignDataPartParameter_Preview!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-part-parameter-preview.md) non-null object

The parameters associated with this part.

#### `DesignDataPart_Preview.physicalDesignator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The physical designator of the part.

#### `DesignDataPart_Preview.pins` · [`[DesignDataPin_Preview!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-pin-preview.md) non-null object

The pins belonging to this part.

#### `DesignDataPart_Preview.revisionGuid` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The revision GUID of the part.

#### `DesignDataPart_Preview.variantId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The variant identifier of the part.

#### `DesignDataPart_Preview.variantName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The variant name of the part.

#### `DesignDataPart_Preview.variationKind` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The kind of variation applied to this part.

#### `DesignDataPart_Preview.vaultGuid` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The vault GUID of the part.

#### Deprecated

#### `DesignDataPart_Preview.uniqueId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** scalar

> **Deprecated:** Use designPartId instead.

The unique identifier of the part.
