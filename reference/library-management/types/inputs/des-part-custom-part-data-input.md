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

#### `categoryName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The category name of the part.

#### `datasheetUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The URL of datasheet for sync systems.

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The description of the part.

#### `documents` · [`[DesPartCustomPartDocumentInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-custom-part-document-input.md) non-null input

A collection of datasheet URLs.

#### `imageUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The URL for the part image.

#### `manufacturerName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The manufacturer name of the part.

#### `mpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The manufacturer part number of the part.

#### `sellers` · [`[DesPartCustomPartSellerInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-custom-part-seller-input.md) non-null input

A collection of sellers.

#### `specs` · [`[DesPartCustomPartSpecInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-custom-part-spec-input.md) non-null input

A collection of part specifications.

#### `updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The last update time.
