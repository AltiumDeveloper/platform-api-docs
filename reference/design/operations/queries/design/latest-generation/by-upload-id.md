---
title: "design.latestGeneration.byUploadId"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/latest-generation/by-upload-id"
bounded_context: "Design"
kind: "queries"
experimental: true
deprecated: false
---

# design.latestGeneration.byUploadId

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Retrieves the design data generation for the upload.

```graphql
design {
  latestGeneration {
    byUploadId(
      uploadId: String!
    ): DesignDataGeneration!
  }
}
```

### Arguments

#### `byUploadId.uploadId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The identifier of the upload.

### Type

#### [`DesignDataGeneration`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-generation.md) object design **EXPERIMENTAL**

Represents a design data generation process and its result.
