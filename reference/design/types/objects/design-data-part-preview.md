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

#### `boundingRectangle` · [`DesignDataRectangle_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-rectangle-preview.md) object

The bounding rectangle of the part.

#### `designPartId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The unique identifier of the part within the design.

#### `documentId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The identifier of the document containing this part.

#### `itemGuid` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The item GUID of the part.

#### `location` · [`DesignDataLocation_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-location-preview.md) object

The location of the part.

#### `logicalDesignator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The logical designator of the part.

#### `parameters` · [`[DesignDataPartParameter_Preview!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-part-parameter-preview.md) non-null object

The parameters associated with this part.

#### `physicalDesignator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The physical designator of the part.

#### `pins` · [`[DesignDataPin_Preview!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-pin-preview.md) non-null object

The pins belonging to this part.

#### `revisionGuid` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The revision GUID of the part.

#### `variantId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The variant identifier of the part.

#### `variantName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The variant name of the part.

#### `variationKind` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The kind of variation applied to this part.

#### `vaultGuid` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The vault GUID of the part.

#### Deprecated

#### `uniqueId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** scalar

> **Deprecated:** Use designPartId instead.

The unique identifier of the part.
