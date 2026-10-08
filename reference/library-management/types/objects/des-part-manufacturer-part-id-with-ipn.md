---
title: "DesPartManufacturerPartIdWithIpn"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-manufacturer-part-id-with-ipn"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartManufacturerPartIdWithIpn

Represents the part manufacturer name and part number with internal part number.

### Member Of

[`DesPartUploadComponentOperationResult`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-component-operation-result.md) object

```graphql
type DesPartManufacturerPartIdWithIpn {
  ipn: String
  manufacturerName: String!
  mpn: String!
}
```

### Fields

#### `ipn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The internal part number.

#### `manufacturerName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of the manufacturer.

#### `mpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The manufacturer part number.
