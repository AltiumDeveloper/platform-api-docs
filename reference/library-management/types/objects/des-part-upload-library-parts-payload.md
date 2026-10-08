---
title: "DesPartUploadLibraryPartsPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-library-parts-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartUploadLibraryPartsPayload

Payload produced when uploading custom library parts.

### Returned By

[`desPartUploadLibraryPartsReport`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-upload-library-parts-report.md) query

```graphql
type DesPartUploadLibraryPartsPayload {
  errors: [DesPartErrorPayload!]!
  results: [DesPartUploadLibraryPartOperationResult!]!
}
```

### Fields

#### `errors` · [`[DesPartErrorPayload!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-error-payload.md) non-null object

Errors that occurred while performing the operation.

#### `results` · [`[DesPartUploadLibraryPartOperationResult!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-library-part-operation-result.md) non-null object

A collection of results for each library part.
