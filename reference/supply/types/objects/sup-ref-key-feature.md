---
title: "SupRefKeyFeature"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-key-feature"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupRefKeyFeature

Represents a key feature of a reference design.

### Member Of

[`SupRefDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design.md) object

```graphql
type SupRefKeyFeature {
  description: String!
  html: String
  name: String!
}
```

### Fields

#### `SupRefKeyFeature.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The feature description.

#### `SupRefKeyFeature.html` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The feature description in HTML format.

#### `SupRefKeyFeature.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The feature name.
