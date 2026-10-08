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

#### `companyId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of the company.

#### `isActive` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Indicates whether the company is active.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of the company.

#### `slug` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Used for URLs like \*/manufacturers/aimtec\* or \*/distributors/digi-key\*.
