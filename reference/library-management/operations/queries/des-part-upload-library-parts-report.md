---
title: "desPartUploadLibraryPartsReport"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-upload-library-parts-report"
bounded_context: "Library Management"
kind: "queries"
experimental: false
deprecated: false
---

# desPartUploadLibraryPartsReport

Returns the result of a completed library parts upload, or 'null' when there is no such report. EXPERIMENTAL: this query may change or be removed without notice.

### Type

#### [`DesPartUploadLibraryPartsPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-library-parts-payload.md) object

Payload produced when uploading custom library parts.

```graphql
desPartUploadLibraryPartsReport(
  operationId: UUID!
): DesPartUploadLibraryPartsPayload
```

### Arguments

#### `operationId` · [`UUID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/uuid.md) non-null scalar

The operation to read the result of, as returned by [`desPartUploadOperation`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-upload-operation.md).
