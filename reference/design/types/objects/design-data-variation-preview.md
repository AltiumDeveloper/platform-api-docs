---
title: "DesignDataVariation_Preview"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-variation-preview"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# DesignDataVariation\_Preview

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents a variation applied to a component within a project variant.

### Member Of

[`DesignDataVariant_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-variant-preview.md) object

```graphql
type DesignDataVariation_Preview {
  alternatePart: String
  componentDesignator: String
  componentHierarchyPath: String
  componentUniqueId: String
  kind: String!
}
```

### Fields

#### `DesignDataVariation_Preview.alternatePart` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The alternate part identifier, if the variation kind is Alternate.

#### `DesignDataVariation_Preview.componentDesignator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The designator of the component this variation applies to.

#### `DesignDataVariation_Preview.componentHierarchyPath` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The hierarchy path of the component this variation applies to.

#### `DesignDataVariation_Preview.componentUniqueId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The unique identifier of the component.

#### `DesignDataVariation_Preview.kind` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The kind of variation. Known values: NONE, NOT\_FITTED, ALTERNATE. New values may be added; clients must tolerate unknown values.
