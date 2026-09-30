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

```graphql
desPartUploadLibraryPartsReport(
  operationId: UUID!
): DesPartUploadLibraryPartsPayload
```

### Arguments

#### `desPartUploadLibraryPartsReport.operationId` · [`UUID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/uuid.md) non-null scalar common

The operation to read the result of, as returned by `desPartUploadOperation`.

### Type

#### [`DesPartUploadLibraryPartsPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-library-parts-payload.md) object library-management

Payload produced when uploading custom library parts.
