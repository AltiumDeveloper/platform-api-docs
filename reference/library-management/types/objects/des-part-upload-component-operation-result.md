---
title: "DesPartUploadComponentOperationResult"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-component-operation-result"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartUploadComponentOperationResult

Represents the result of the upload components operation.

### Member Of

[`DesPartUploadComponentsPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-components-payload.md) object

```graphql
type DesPartUploadComponentOperationResult {
  errorMessage: String
  partId: DesPartManufacturerPartIdWithIpn!
  status: String!
}
```

### Fields

#### `DesPartUploadComponentOperationResult.errorMessage` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The error message if the operation failed.

#### `DesPartUploadComponentOperationResult.partId` · [`DesPartManufacturerPartIdWithIpn!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-manufacturer-part-id-with-ipn.md) non-null object library-management

The identifiers of the part.

#### `DesPartUploadComponentOperationResult.status` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The status of the operation: \*Created\*, \*Updated\*, \*AlreadyExists\*, \*Duplicated\* or \*Failed\*.
