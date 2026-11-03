---
title: "design.designData.byUploadId"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/design-data/by-upload-id"
bounded_context: "Design"
kind: "queries"
experimental: true
deprecated: false
---

# design.designData.byUploadId

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Retrieves the latest available design data for the upload.

### Type

#### [`DesignData_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-preview.md) object **EXPERIMENTAL**

Represents the design data extracted from a design project.

```graphql
design {
  designData {
    byUploadId(
      uploadId: String!
    ): DesignData_Preview
  }
}
```

### Arguments

#### `uploadId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of the upload.
