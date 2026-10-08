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

#### `attribute` · [`DesPartAttribute!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-attribute.md) non-null object

The attribute.

#### `displayValue` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The formatted display value.

#### `siValue` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The value of the spec in SI base units.

#### `units` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The units of the value.

#### `unitsName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The short name of the units.

#### `unitsSymbol` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The short name of the units.

#### `value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The actual value.

#### `valueType` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The value type of the specification.
