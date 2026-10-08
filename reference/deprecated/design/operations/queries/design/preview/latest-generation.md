---
title: "design.preview.latestGeneration"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/design/operations/queries/design/preview/latest-generation"
bounded_context: "Design"
kind: "queries"
experimental: true
deprecated: true
---

# design.preview\.latestGeneration

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

> **Deprecated:** Use design.latestGeneration.byDesignId instead.

Retrieves the design data generation.

### Type

#### [`DesignDataGeneration_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-generation-preview.md) object **EXPERIMENTAL**

```graphql
design {
  preview {
    latestGeneration(
      designGrid: ID!
      revisionId: String
    ): DesignDataGeneration_Preview @deprecated
  }
}
```

### Arguments

#### `designGrid` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The identifier of the design.

#### `revisionId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The identifier of the project commit.
