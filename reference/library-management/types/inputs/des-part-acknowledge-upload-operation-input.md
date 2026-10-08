---
title: "DesPartAcknowledgeUploadOperationInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-acknowledge-upload-operation-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartAcknowledgeUploadOperationInput

Input for marking the result of a parts upload operation as read.

### Member Of

[`desPartAcknowledgeUploadOperation`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-acknowledge-upload-operation.md) mutation

```graphql
input DesPartAcknowledgeUploadOperationInput {
  operationId: UUID!
}
```

### Fields

#### `operationId` · [`UUID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/uuid.md) non-null scalar

The operation to acknowledge, as returned by [`desPartUploadOperation`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-upload-operation.md).
