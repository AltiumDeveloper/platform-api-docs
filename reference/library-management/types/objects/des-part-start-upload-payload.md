---
title: "DesPartStartUploadPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-start-upload-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartStartUploadPayload

Payload produced when a parts upload is started.

### Returned By

[`desPartUploadComponents`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-upload-components.md) mutation · [`desPartUploadLibraryParts`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-upload-library-parts.md) mutation

```graphql
type DesPartStartUploadPayload {
  errors: [DesPartErrorPayload!]!
  operationId: UUID
}
```

### Fields

#### `DesPartStartUploadPayload.errors` · [`[DesPartErrorPayload!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-error-payload.md) non-null object library-management

Errors that occurred while performing the operation.

#### `DesPartStartUploadPayload.operationId` · [`UUID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/uuid.md) scalar common

The identifier of the started operation. 'null' when the upload was not started; the reason is then in 'errors'.
