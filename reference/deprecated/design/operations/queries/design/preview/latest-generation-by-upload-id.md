---
title: "design.preview.latestGenerationByUploadId"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/design/operations/queries/design/preview/latest-generation-by-upload-id"
bounded_context: "Design"
kind: "queries"
experimental: true
deprecated: true
---

# design.preview\.latestGenerationByUploadId

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

> **Deprecated:** Use design.latestGeneration.byUploadId instead.

Retrieves the design data generation for the upload.

```graphql
design {
  preview {
    latestGenerationByUploadId(
      uploadId: String!
    ): DesignDataGeneration_Preview @deprecated
  }
}
```

### Arguments

#### `latestGenerationByUploadId.uploadId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The identifier of the upload.

### Type

#### [`DesignDataGeneration_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-generation-preview.md) object design **EXPERIMENTAL**
