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

#### `SupSolutionTemplateKeyFeatureGroup.attributes` · [`[SupSolutionTemplateKeyFeatureGroupAttribute!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-key-feature-group-attribute.md) non-null object supply

The list of attributes associated with key feature group.

#### `SupSolutionTemplateKeyFeatureGroup.order` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

The display order of the key feature group.

#### `SupSolutionTemplateKeyFeatureGroup.title` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The key feature group title.
