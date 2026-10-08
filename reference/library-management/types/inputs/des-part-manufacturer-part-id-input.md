---
title: "DesPartManufacturerPartIdInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-manufacturer-part-id-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartManufacturerPartIdInput

Represents the part manufacturer name and part number.

### Member Of

[`desPartSearchByManufacturerPartIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-search-by-manufacturer-part-ids.md) query · [`desPartSearchCustomParts`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-search-custom-parts.md) query

```graphql
input DesPartManufacturerPartIdInput {
  manufacturerName: String!
  mpn: String!
}
```

### Fields

#### `manufacturerName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of the manufacturer.

#### `mpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The manufacturer part number.
