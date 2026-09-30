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

#### `DesignDataComponent_Preview.boundingRectangle` · [`DesignDataRectangle_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-rectangle-preview.md) object design

The bounding rectangle of the component.

#### `DesignDataComponent_Preview.comment` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The comment associated with the component.

#### `DesignDataComponent_Preview.componentType` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The type of the component.

#### `DesignDataComponent_Preview.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The description of the component.

#### `DesignDataComponent_Preview.designComponentId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The unique identifier of the component within the design.

#### `DesignDataComponent_Preview.documentId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The identifier of the document containing the component.

#### `DesignDataComponent_Preview.footprint` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The footprint of the component.

#### `DesignDataComponent_Preview.hierarchyPath` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The hierarchy path of the component.

#### `DesignDataComponent_Preview.libraryComponentId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

The identifier of the library component.

#### `DesignDataComponent_Preview.location` · [`DesignDataLocation_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-location-preview.md) object design

The location of the component.

#### `DesignDataComponent_Preview.logicalDesignator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The logical designator of the component.

#### `DesignDataComponent_Preview.parameters` · [`[DesignDataComponentParameter_Preview!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-component-parameter-preview.md) non-null object design

The parameters associated with the component.

#### `DesignDataComponent_Preview.parts` · [`[DesignDataPart_Preview!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-part-preview.md) non-null object design

The parts that make up this component.

#### `DesignDataComponent_Preview.physicalDesignator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The physical designator of the component.

#### `DesignDataComponent_Preview.variantId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The variant identifier of the component.

#### `DesignDataComponent_Preview.variantName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The variant name of the component.

#### Deprecated

#### `DesignDataComponent_Preview.tagTypes` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** list scalar common

> **Deprecated:** Use componentType instead.

The tag types of the component.

#### `DesignDataComponent_Preview.uniqueId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** scalar common

> **Deprecated:** Use designComponentId instead.

The unique identifier of the component.
