---
title: "DesPartCustomPartData"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part-data"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartCustomPartData

Represents custom part data.

### Member Of

[`DesPartCustomPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part.md) object

```graphql
type DesPartCustomPartData {
  categoryName: String
  datasheetUrl: String
  description: String
  documents: [DesPartCustomPartDocument!]!
  imageUrl: String
  manufacturerName: String!
  mpn: String!
  sellers: [DesPartCustomPartSeller!]!
  specs: [DesPartCustomPartSpec!]!
  updatedAt: DateTime!
}
```

### Fields

#### `DesPartCustomPartData.categoryName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The category name of the part.

#### `DesPartCustomPartData.datasheetUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The URL of datasheet for sync systems.

#### `DesPartCustomPartData.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The description of the part.

#### `DesPartCustomPartData.documents` · [`[DesPartCustomPartDocument!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part-document.md) non-null object library-management

A collection of datasheet URLs.

#### `DesPartCustomPartData.imageUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The URL for the part image.

#### `DesPartCustomPartData.manufacturerName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The manufacturer name of the part.

#### `DesPartCustomPartData.mpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The manufacturer part number of the part.

#### `DesPartCustomPartData.sellers` · [`[DesPartCustomPartSeller!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part-seller.md) non-null object library-management

A collection of sellers.

#### `DesPartCustomPartData.specs` · [`[DesPartCustomPartSpec!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part-spec.md) non-null object library-management

A collection of part specifications.

#### `DesPartCustomPartData.updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The last update time.
