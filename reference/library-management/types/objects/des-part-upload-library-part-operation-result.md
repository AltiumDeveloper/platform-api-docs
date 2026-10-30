---
title: "DesPartUploadLibraryPartOperationResult"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-library-part-operation-result"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartUploadLibraryPartOperationResult

Represents the result of one record of a library part upload operation.

### Member Of

[`DesPartUploadLibraryPartsPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-library-parts-payload.md) object

```graphql
type DesPartUploadLibraryPartOperationResult {
  errorDetails: String
  message: String!
  partId: DesPartManufacturerPartId!
  status: String!
}
```

### Fields

#### `errorDetails` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The validation or technical reason the record failed.

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A human readable summary of the part processing.

#### `partId` · [`DesPartManufacturerPartId!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-manufacturer-part-id.md) non-null object

The identifiers of the record: its MPN and manufacturer name.

#### `status` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The result of the part processing: \*Created\*, \*Updated\*, \*Failed\* or \*Skipped\*.
