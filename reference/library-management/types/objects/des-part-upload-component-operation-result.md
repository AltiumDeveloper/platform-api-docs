---
title: "DesPartUploadComponentOperationResult"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-component-operation-result"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartUploadComponentOperationResult

Represents the result of one record of the upload components operation.

### Member Of

[`DesPartUploadComponentsPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-components-payload.md) object

```graphql
type DesPartUploadComponentOperationResult {
  componentStatus: String!
  errorDetails: String
  message: String!
  partChoiceStatus: String!
  partId: DesPartManufacturerPartIdWithIpn!
  revisionId: String
}
```

### Fields

#### `componentStatus` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The result of the component processing: \*Created\*, \*AlreadyExists\*, \*Failed\* or \*Skipped\*.

#### `errorDetails` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The validation or technical reason the record failed or was skipped.

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A human readable summary of the component and part choice processing.

#### `partChoiceStatus` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The result of the part choice processing: \*Created\*, \*AlreadyExists\*, \*Failed\* or \*Skipped\*.

#### `partId` · [`DesPartManufacturerPartIdWithIpn!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-manufacturer-part-id-with-ipn.md) non-null object

The identifiers of the record: its IPN, MPN and manufacturer name.

#### `revisionId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The revision of the created or existing component. Returned only when the component was resolved.
