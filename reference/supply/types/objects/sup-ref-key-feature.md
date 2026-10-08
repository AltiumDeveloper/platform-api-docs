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

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The feature description.

#### `html` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The feature description in HTML format.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The feature name.
