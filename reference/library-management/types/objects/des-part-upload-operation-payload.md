---
title: "DesPartUploadOperationPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-operation-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartUploadOperationPayload

Represents a parts upload operation of the workspace.

### Returned By

[`desPartUploadOperation`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-upload-operation.md) query

### Member Of

[`DesPartAcknowledgeUploadOperationPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-acknowledge-upload-operation-payload.md) object

```graphql
type DesPartUploadOperationPayload {
  componentsColumnMapping: DesPartUploadComponentsColumnMapping
  createdAt: DateTime!
  fileId: String!
  fileName: String!
  finishedAt: DateTime
  isAck: Boolean!
  kind: String!
  libraryPartsColumnMapping: DesPartUploadLibraryPartsColumnMapping
  operationId: UUID!
  partChoiceUpdateMode: String
  startedAt: DateTime
  status: String!
}
```

### Fields

#### `DesPartUploadOperationPayload.componentsColumnMapping` · [`DesPartUploadComponentsColumnMapping`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-components-column-mapping.md) object library-management

Column mapping the upload was started with. Set for the \*Components\* upload only.

#### `DesPartUploadOperationPayload.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

When the upload was started by the user.

#### `DesPartUploadOperationPayload.fileId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The identifier of the uploaded file.

#### `DesPartUploadOperationPayload.fileName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of the uploaded file.

#### `DesPartUploadOperationPayload.finishedAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar common

When the operation reached its final status.

#### `DesPartUploadOperationPayload.isAck` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Whether the result of the operation is already read.

#### `DesPartUploadOperationPayload.kind` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The kind of the upload: \*LibraryParts\* or \*Components\*.

#### `DesPartUploadOperationPayload.libraryPartsColumnMapping` · [`DesPartUploadLibraryPartsColumnMapping`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-library-parts-column-mapping.md) object library-management

Column mapping the upload was started with. Set for the \*LibraryParts\* upload only.

#### `DesPartUploadOperationPayload.operationId` · [`UUID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/uuid.md) non-null scalar common

The identifier of the operation. Report and acknowledgement requests are addressed by it.

#### `DesPartUploadOperationPayload.partChoiceUpdateMode` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

How existing part choices are handled: \*Update\* or \*Recreate\*. Set for the \*Components\* upload only.

#### `DesPartUploadOperationPayload.startedAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar common

When the processing of the upload began.

#### `DesPartUploadOperationPayload.status` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The status of the operation: \*Queued\*, \*Running\*, \*Completed\* or \*Failed\*.
