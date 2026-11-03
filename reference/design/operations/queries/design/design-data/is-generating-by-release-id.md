---
title: "design.designData.isGeneratingByReleaseId"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/design-data/is-generating-by-release-id"
bounded_context: "Design"
kind: "queries"
experimental: true
deprecated: false
---

# design.designData.isGeneratingByReleaseId

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Retrieves the information whether the release design data is still processed.

### Type

#### [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

The [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar type represents `true` or `false`.

```graphql
design {
  designData {
    isGeneratingByReleaseId(
      designId: ID!
      releaseId: ID!
    ): Boolean!
  }
}
```

### Arguments

#### `designId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The identifier of the design.

#### `releaseId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The identifier of the release.
