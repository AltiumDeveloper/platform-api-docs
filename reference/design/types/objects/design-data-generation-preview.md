---
title: "DesignDataGeneration_Preview"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-generation-preview"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# DesignDataGeneration\_Preview

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Returned By

[`design.preview.latestGeneration`](https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/design/operations/queries/design/preview/latest-generation.md) query · [`design.preview.latestGenerationByUploadId`](https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/design/operations/queries/design/preview/latest-generation-by-upload-id.md) query

```graphql
type DesignDataGeneration_Preview {
  designData: DesignData_Preview
  designId: ID
  message: String
  revisionId: String
  status: String!
  uploadId: String
}
```

### Fields

#### `designData` · [`DesignData_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-preview.md) object

#### `designId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

#### `message` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `revisionId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `status` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `uploadId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar
