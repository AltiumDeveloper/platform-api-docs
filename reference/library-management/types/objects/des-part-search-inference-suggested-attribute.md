---
title: "DesPartSearchInferenceSuggestedAttribute"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-inference-suggested-attribute"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartSearchInferenceSuggestedAttribute

Represents an inferred search attribute.

### Member Of

[`DesPartSearchInferenceResult`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-inference-result.md) object

```graphql
type DesPartSearchInferenceSuggestedAttribute {
  attribute: DesPartAttribute!
  displayValues: [String!]!
  name: String!
  shortname: String!
  unitsSymbol: String
  values: [String!]!
}
```

### Fields

#### `DesPartSearchInferenceSuggestedAttribute.attribute` · [`DesPartAttribute!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-attribute.md) non-null object library-management

The inferred attribute details.

#### `DesPartSearchInferenceSuggestedAttribute.displayValues` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Human-readable values to display in the UI.

#### `DesPartSearchInferenceSuggestedAttribute.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The display name of this inferred attribute.

#### `DesPartSearchInferenceSuggestedAttribute.shortname` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The filter key for this attribute.

#### `DesPartSearchInferenceSuggestedAttribute.unitsSymbol` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The symbol of the units.

#### `DesPartSearchInferenceSuggestedAttribute.values` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Values to use in the search filter.
