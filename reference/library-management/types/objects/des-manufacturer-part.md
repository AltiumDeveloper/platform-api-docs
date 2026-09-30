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

#### `DesManufacturerPart.companyName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The manufacturer company name.

#### `DesManufacturerPart.octopartId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The Octopart identifier.

#### `DesManufacturerPart.parameters` · [`[DesManufacturerPartParameter!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-manufacturer-part-parameter.md) non-null object library-management

The manufacturer part parameters.

#### `DesManufacturerPart.partNumber` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The part number (MPN).

#### `DesManufacturerPart.priority` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Manufacturer part priority.

#### `DesManufacturerPart.supplierParts` · [`[DesSupplierPart!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-supplier-part.md) non-null object library-management

The list of supplier parts associated with this manufacturer part.
