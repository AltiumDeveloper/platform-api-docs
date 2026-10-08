---
title: "SupSolutionTemplateKeyFeatureGroup"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-key-feature-group"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateKeyFeatureGroup

### Member Of

[`SupSolutionTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template.md) object

```graphql
type SupSolutionTemplateKeyFeatureGroup {
  attributes: [SupSolutionTemplateKeyFeatureGroupAttribute!]!
  order: Int!
  title: String!
}
```

### Fields

#### `attributes` · [`[SupSolutionTemplateKeyFeatureGroupAttribute!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-key-feature-group-attribute.md) non-null object

The list of attributes associated with key feature group.

#### `order` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The display order of the key feature group.

#### `title` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The key feature group title.
