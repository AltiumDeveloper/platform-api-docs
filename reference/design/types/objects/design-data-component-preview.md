---
title: "DesignDataComponent_Preview"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-component-preview"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# DesignDataComponent\_Preview

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents a component in the design.

### Member Of

[`DesignData_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-preview.md) object

```graphql
type DesignDataComponent_Preview {
  boundingRectangle: DesignDataRectangle_Preview
  comment: String
  componentType: String
  description: String
  designComponentId: String
  documentId: String
  footprint: String
  hierarchyPath: String
  libraryComponentId: ID
  location: DesignDataLocation_Preview
  logicalDesignator: String
  parameters: [DesignDataComponentParameter_Preview!]!
  parts: [DesignDataPart_Preview!]!
  physicalDesignator: String
  tagTypes: [String!] @deprecated
  uniqueId: String @deprecated
  variantId: String
  variantName: String
}
```

### Fields

#### `boundingRectangle` · [`DesignDataRectangle_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-rectangle-preview.md) object

The bounding rectangle of the component.

#### `comment` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The comment associated with the component.

#### `componentType` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The type of the component.

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The description of the component.

#### `designComponentId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The unique identifier of the component within the design.

#### `documentId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The identifier of the document containing the component.

#### `footprint` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The footprint of the component.

#### `hierarchyPath` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The hierarchy path of the component.

#### `libraryComponentId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

The identifier of the library component.

#### `location` · [`DesignDataLocation_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-location-preview.md) object

The location of the component.

#### `logicalDesignator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The logical designator of the component.

#### `parameters` · [`[DesignDataComponentParameter_Preview!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-component-parameter-preview.md) non-null object

The parameters associated with the component.

#### `parts` · [`[DesignDataPart_Preview!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-part-preview.md) non-null object

The parts that make up this component.

#### `physicalDesignator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The physical designator of the component.

#### `variantId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The variant identifier of the component.

#### `variantName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The variant name of the component.

#### Deprecated

#### `tagTypes` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** list scalar

> **Deprecated:** Use componentType instead.

The tag types of the component.

#### `uniqueId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** scalar

> **Deprecated:** Use designComponentId instead.

The unique identifier of the component.
