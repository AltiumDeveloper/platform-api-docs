---
title: "desPartAcknowledgeUploadOperation"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-acknowledge-upload-operation"
bounded_context: "Library Management"
kind: "mutations"
experimental: false
deprecated: false
---

# desPartAcknowledgeUploadOperation

Marks the result of a finished parts upload operation as read. EXPERIMENTAL: this mutation may change or be removed without notice.

```graphql
desPartAcknowledgeUploadOperation(
  input: DesPartAcknowledgeUploadOperationInput!
): DesPartAcknowledgeUploadOperationPayload!
```

### Arguments

#### `desPartAcknowledgeUploadOperation.input` · [`DesPartAcknowledgeUploadOperationInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-acknowledge-upload-operation-input.md) non-null input library-management

The operation to acknowledge.

### Type

#### [`DesPartAcknowledgeUploadOperationPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-acknowledge-upload-operation-payload.md) object library-management

Payload produced when the result of a parts upload operation is marked as read.
