---
title: "desPartUploadComponentsReport"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-upload-components-report"
bounded_context: "Library Management"
kind: "queries"
experimental: false
deprecated: false
---

# desPartUploadComponentsReport

Returns the result of a completed components upload, or 'null' when there is no such report. EXPERIMENTAL: this query may change or be removed without notice.

### Type

#### [`DesPartUploadComponentsPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-components-payload.md) object

Payload produced when uploading components.

```graphql
desPartUploadComponentsReport(
  operationId: UUID!
): DesPartUploadComponentsPayload
```

### Arguments

#### `operationId` · [`UUID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/uuid.md) non-null scalar

The operation to read the result of, as returned by [`desPartUploadOperation`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-upload-operation.md).
