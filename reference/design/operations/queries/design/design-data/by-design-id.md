---
title: "design.designData.byDesignId"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/design-data/by-design-id"
bounded_context: "Design"
kind: "queries"
experimental: true
deprecated: false
---

# design.designData.byDesignId

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Retrieves the latest available design data.

### Type

#### [`DesignData_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-preview.md) object **EXPERIMENTAL**

Represents the design data extracted from a design project.

```graphql
design {
  designData {
    byDesignId(
      designId: ID!
    ): DesignData_Preview
  }
}
```

### Arguments

#### `designId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The identifier of the design.
