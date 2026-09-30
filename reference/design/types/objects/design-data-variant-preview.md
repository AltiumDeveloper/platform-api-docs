---
title: "DesignDataVariant_Preview"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-variant-preview"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# DesignDataVariant\_Preview

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents a project variant in the design.

### Member Of

[`DesignData_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-preview.md) object

```graphql
type DesignDataVariant_Preview {
  name: String!
  variantGuid: String
  variations: [DesignDataVariation_Preview!]!
}
```

### Fields

#### `DesignDataVariant_Preview.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of the variant.

#### `DesignDataVariant_Preview.variantGuid` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The unique identifier of the variant.

#### `DesignDataVariant_Preview.variations` · [`[DesignDataVariation_Preview!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-variation-preview.md) non-null object design

The variations defined within this variant.
