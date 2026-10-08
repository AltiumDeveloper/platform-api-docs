---
title: "design.latestGeneration.byDesignId"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/latest-generation/by-design-id"
bounded_context: "Design"
kind: "queries"
experimental: true
deprecated: false
---

# design.latestGeneration.byDesignId

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Retrieves the design data generation.

### Type

#### [`DesignDataGeneration`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-generation.md) object **EXPERIMENTAL**

Represents a design data generation process and its result.

```graphql
design {
  latestGeneration {
    byDesignId(
      designId: ID!
      revisionId: String
    ): DesignDataGeneration!
  }
}
```

### Arguments

#### `designId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The identifier of the design.

#### `revisionId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The identifier of the project commit.
