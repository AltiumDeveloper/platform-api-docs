---
title: "DesPartUploadCustomPartFilePayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-custom-part-file-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartUploadCustomPartFilePayload

Payload produced when uploading a custom part file.

### Returned By

[`desPartUploadCustomPartDatasheet`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-upload-custom-part-datasheet.md) mutation · [`desPartUploadCustomPartImage`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-upload-custom-part-image.md) mutation

```graphql
type DesPartUploadCustomPartFilePayload {
  errors: [DesPartErrorPayload!]!
  url: String
}
```

### Fields

#### `errors` · [`[DesPartErrorPayload!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-error-payload.md) non-null object

Errors that occurred while performing the operation.

#### `url` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Uploaded file URL.
