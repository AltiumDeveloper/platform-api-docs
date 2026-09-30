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

#### `DesPartManufacturerPartIdWithIpn.ipn` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The internal part number.

#### `DesPartManufacturerPartIdWithIpn.manufacturerName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of the manufacturer.

#### `DesPartManufacturerPartIdWithIpn.mpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The manufacturer part number.
