---
title: "DesPartSpec"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-spec"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartSpec

Represents a part specification.

### Member Of

[`DesPartProviderPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-provider-part.md) object

```graphql
type DesPartSpec {
  attribute: DesPartAttribute!
  displayValue: String!
  siValue: String!
  units: String!
  unitsName: String!
  unitsSymbol: String!
  value: String!
  valueType: String!
}
```

### Fields

#### `DesPartSpec.attribute` · [`DesPartAttribute!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-attribute.md) non-null object library-management

The attribute.

#### `DesPartSpec.displayValue` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The formatted display value.

#### `DesPartSpec.siValue` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The value of the spec in SI base units.

#### `DesPartSpec.units` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The units of the value.

#### `DesPartSpec.unitsName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The short name of the units.

#### `DesPartSpec.unitsSymbol` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The short name of the units.

#### `DesPartSpec.value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The actual value.

#### `DesPartSpec.valueType` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The value type of the specification.
