---
title: "DesPartAcknowledgeUploadOperationPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-acknowledge-upload-operation-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartAcknowledgeUploadOperationPayload

Payload produced when the result of a parts upload operation is marked as read.

### Returned By

[`desPartAcknowledgeUploadOperation`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-acknowledge-upload-operation.md) mutation

```graphql
type DesPartAcknowledgeUploadOperationPayload {
  errors: [DesPartErrorPayload!]!
  operation: DesPartUploadOperationPayload
}
```

### Fields

#### `errors` · [`[DesPartErrorPayload!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-error-payload.md) non-null object

Errors that occurred while performing the operation.

#### `operation` · [`DesPartUploadOperationPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-operation-payload.md) object

The acknowledged operation, or 'null' when the acknowledgement was refused.
