---
title: "DesManufacturerPart"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-manufacturer-part"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesManufacturerPart

Manufacturer part information.

### Member Of

[`DesComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component.md) object

```graphql
type DesManufacturerPart {
  companyName: String!
  octopartId: String
  parameters: [DesManufacturerPartParameter!]!
  partNumber: String!
  priority: Int!
  supplierParts: [DesSupplierPart!]!
}
```

### Fields

#### `companyName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The manufacturer company name.

#### `octopartId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The Octopart identifier.

#### `parameters` · [`[DesManufacturerPartParameter!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-manufacturer-part-parameter.md) non-null object

The manufacturer part parameters.

#### `partNumber` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The part number (MPN).

#### `priority` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Manufacturer part priority.

#### `supplierParts` · [`[DesSupplierPart!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-supplier-part.md) non-null object

The list of supplier parts associated with this manufacturer part.
