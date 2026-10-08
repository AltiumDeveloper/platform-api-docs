---
title: "DesPartUploadPartFileColumnsPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-part-file-columns-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartUploadPartFileColumnsPayload

Payload produced when reading columns from an uploaded file.

### Returned By

[`desPartUploadPartFileColumns`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-upload-part-file-columns.md) query

```graphql
type DesPartUploadPartFileColumnsPayload {
  columns: [String!]!
  errors: [DesPartErrorPayload!]!
}
```

### Fields

#### `columns` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Column headers found in the file.

#### `errors` · [`[DesPartErrorPayload!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-error-payload.md) non-null object

Errors that occurred while performing the operation.
