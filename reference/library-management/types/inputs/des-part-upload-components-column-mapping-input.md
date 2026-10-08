---
title: "DesPartUploadComponentsColumnMappingInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-upload-components-column-mapping-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartUploadComponentsColumnMappingInput

Column mapping for components upload. Only MPN, Manufacturer and IPN columns are supported.

### Member Of

[`DesPartUploadComponentsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-upload-components-input.md) input

```graphql
input DesPartUploadComponentsColumnMappingInput {
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
