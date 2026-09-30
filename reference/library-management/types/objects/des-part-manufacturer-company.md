---
title: "DesPartManufacturerCompany"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-manufacturer-company"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartManufacturerCompany

Represents a manufacturer company.

### Member Of

[`DesPartManufacturers`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-manufacturers.md) object

```graphql
type DesPartManufacturerCompany {
  companyId: String!
  isActive: Boolean!
  name: String!
  slug: String
}
```

### Fields

#### `DesPartManufacturerCompany.companyId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The identifier of the company.

#### `DesPartManufacturerCompany.isActive` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Indicates whether the company is active.

#### `DesPartManufacturerCompany.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of the company.

#### `DesPartManufacturerCompany.slug` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Used for URLs like \*/manufacturers/aimtec\* or \*/distributors/digi-key\*.
