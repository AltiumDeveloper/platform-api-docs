---
title: "DesPartUploadComponentsColumnMapping"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-components-column-mapping"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartUploadComponentsColumnMapping

Column mapping for components upload. Only MPN, Manufacturer and IPN columns are supported.

### Member Of

[`DesPartUploadOperationPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-operation-payload.md) object

```graphql
type DesPartUploadComponentsColumnMapping {
  ipnColumn: String!
  manufacturerNameColumn: String!
  mpnColumn: String!
}
```

### Fields

#### `ipnColumn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Column header for IPN.

#### `manufacturerNameColumn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Column header for manufacturer name.

#### `mpnColumn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Column header for MPN.
