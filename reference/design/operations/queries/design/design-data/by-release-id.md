---
title: "design.designData.byReleaseId"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/design-data/by-release-id"
bounded_context: "Design"
kind: "queries"
experimental: true
deprecated: false
---

# design.designData.byReleaseId

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Retrieves the latest available design data for the release.

### Type

#### [`DesignData_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-preview.md) object **EXPERIMENTAL**

Represents the design data extracted from a design project.

```graphql
design {
  designData {
    byReleaseId(
      designId: ID!
      releaseId: ID!
    ): DesignData_Preview
  }
}
```

### Arguments

#### `designId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The identifier of the design.

#### `releaseId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The identifier of the project release.
