---
title: "DesPartCustomPartDataInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-custom-part-data-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartCustomPartDataInput

Represents custom part data.

### Member Of

[`DesPartUpsertCustomPartsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-upsert-custom-parts-input.md) input

```graphql
input DesPartCustomPartDataInput {
  categoryName: String
  datasheetUrl: String
  description: String
  documents: [DesPartCustomPartDocumentInput!]!
  imageUrl: String
  manufacturerName: String!
  mpn: String!
  sellers: [DesPartCustomPartSellerInput!]!
  specs: [DesPartCustomPartSpecInput!]!
  updatedAt: DateTime!
}
```

### Fields

#### `DesPartCustomPartDataInput.categoryName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The category name of the part.

#### `DesPartCustomPartDataInput.datasheetUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The URL of datasheet for sync systems.

#### `DesPartCustomPartDataInput.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The description of the part.

#### `DesPartCustomPartDataInput.documents` · [`[DesPartCustomPartDocumentInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-custom-part-document-input.md) non-null input library-management

A collection of datasheet URLs.

#### `DesPartCustomPartDataInput.imageUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The URL for the part image.

#### `DesPartCustomPartDataInput.manufacturerName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The manufacturer name of the part.

#### `DesPartCustomPartDataInput.mpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The manufacturer part number of the part.

#### `DesPartCustomPartDataInput.sellers` · [`[DesPartCustomPartSellerInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-custom-part-seller-input.md) non-null input library-management

A collection of sellers.

#### `DesPartCustomPartDataInput.specs` · [`[DesPartCustomPartSpecInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-custom-part-spec-input.md) non-null input library-management

A collection of part specifications.

#### `DesPartCustomPartDataInput.updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The last update time.
