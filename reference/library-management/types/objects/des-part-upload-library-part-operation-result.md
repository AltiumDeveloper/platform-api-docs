---
title: "DesPartUploadLibraryPartOperationResult"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-library-part-operation-result"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartUploadLibraryPartOperationResult

Represents the result of a library part upload operation.

### Member Of

[`DesPartUploadLibraryPartsPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-library-parts-payload.md) object

```graphql
type DesPartUploadLibraryPartOperationResult {
  errorMessage: String
  partId: DesPartManufacturerPartId!
  status: String!
}
```

### Fields

#### `errorMessage` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The error message if the operation failed.

#### `partId` · [`DesPartManufacturerPartId!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-manufacturer-part-id.md) non-null object

The identifiers of the part.

#### `status` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The status of the operation: \*Created\*, \*Updated\*, \*Duplicated\* or \*Failed\*.
