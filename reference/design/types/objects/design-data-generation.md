---
title: "DesignDataGeneration"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-generation"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# DesignDataGeneration

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents a design data generation process and its result.

### Returned By

[`design.latestGeneration.byDesignId`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/latest-generation/by-design-id.md) query · [`design.latestGeneration.byUploadId`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/latest-generation/by-upload-id.md) query

```graphql
type DesignDataGeneration {
  designData_Preview: DesignData_Preview
  designId: ID
  message: String
  revisionId: String
  status: String!
  uploadId: String
}
```

### Fields

#### `DesignDataGeneration.designData_Preview` · [`DesignData_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-preview.md) object design

Design data generated from the design.

#### `DesignDataGeneration.designId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

The identifier of the design for which the design data is or was generated.

#### `DesignDataGeneration.message` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Error message if the generation failed.

#### `DesignDataGeneration.revisionId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Revision of the source design, locally unique.

#### `DesignDataGeneration.status` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Status of the design data generation. Known values: PENDING, IN\_PROGRESS, COMPLETED, FAILED, SKIPPED. New values may be added; clients must tolerate unknown values.

#### `DesignDataGeneration.uploadId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The identifier of the upload, when generation is for a custom uploaded design.
