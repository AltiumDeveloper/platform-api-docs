---
title: "DesManufacturerPartParameter"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-manufacturer-part-parameter"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesManufacturerPartParameter

Parameter describing a manufacturer part.

### Member Of

[`DesManufacturerPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-manufacturer-part.md) object

```graphql
type DesManufacturerPartParameter {
  name: String!
  unit: String
  value: String!
}
```

### Fields

#### `DesManufacturerPartParameter.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Parameter name.

#### `DesManufacturerPartParameter.unit` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Parameter unit.

#### `DesManufacturerPartParameter.value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Parameter value.
