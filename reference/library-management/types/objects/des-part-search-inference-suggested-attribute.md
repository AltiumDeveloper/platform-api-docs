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

#### `attribute` · [`DesPartAttribute!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-attribute.md) non-null object

The inferred attribute details.

#### `displayValues` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Human-readable values to display in the UI.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The display name of this inferred attribute.

#### `shortname` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The filter key for this attribute.

#### `unitsSymbol` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The symbol of the units.

#### `values` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Values to use in the search filter.
