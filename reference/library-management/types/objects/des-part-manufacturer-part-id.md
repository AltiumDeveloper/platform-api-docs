---
title: "DesPartManufacturerPartId"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-manufacturer-part-id"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartManufacturerPartId

Represents the part manufacturer name and part number.

### Member Of

[`DesPartCustomPartOperationResult`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part-operation-result.md) object · [`DesPartCustomPartSearchResultItem`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part-search-result-item.md) object · [`DesPartSearchByManufacturerPartIdsResultItem`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-by-manufacturer-part-ids-result-item.md) object · [`DesPartUploadLibraryPartOperationResult`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-library-part-operation-result.md) object

```graphql
type DesPartManufacturerPartId {
  manufacturerName: String!
  mpn: String!
}
```

### Fields

#### `DesPartManufacturerPartId.manufacturerName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of the manufacturer.

#### `DesPartManufacturerPartId.mpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The manufacturer part number.
