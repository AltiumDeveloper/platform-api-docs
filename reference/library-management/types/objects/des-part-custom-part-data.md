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

#### `categoryName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The category name of the part.

#### `datasheetUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The URL of datasheet for sync systems.

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The description of the part.

#### `documents` · [`[DesPartCustomPartDocument!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part-document.md) non-null object

A collection of datasheet URLs.

#### `imageUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The URL for the part image.

#### `manufacturerName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The manufacturer name of the part.

#### `mpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The manufacturer part number of the part.

#### `sellers` · [`[DesPartCustomPartSeller!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part-seller.md) non-null object

A collection of sellers.

#### `specs` · [`[DesPartCustomPartSpec!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part-spec.md) non-null object

A collection of part specifications.

#### `updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The last update time.
