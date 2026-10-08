---
title: "DesPartAttribute"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-attribute"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartAttribute

Represents a part attribute.

### Member Of

[`DesPartAttributes`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-attributes.md) object · [`DesPartCategory`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-category.md) object · [`DesPartSearchInferenceSuggestedAttribute`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-inference-suggested-attribute.md) object · [`DesPartSearchSuggestionValues`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-suggestion-values.md) object · [`DesPartSpec`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-spec.md) object

```graphql
type DesPartAttribute {
  attributeId: String!
  group: String!
  name: String!
  shortname: String!
  unitsName: String!
  unitsSymbol: String!
  valueType: String!
}
```

### Fields

#### `attributeId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of the attribute.

#### `group` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The group name used to cluster similar attributes (e.g., Technical, Physical, Compliance).

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The display name of the attribute.

#### `shortname` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The short name of the attribute.

#### `unitsName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The units name of the attribute.

#### `unitsSymbol` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The units symbol of the attribute.

#### `valueType` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The value type of the attribute.
