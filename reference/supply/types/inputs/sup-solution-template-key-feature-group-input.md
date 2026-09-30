---
title: "SupSolutionTemplateKeyFeatureGroupInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-key-feature-group-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateKeyFeatureGroupInput

### Member Of

[`SupSolutionTemplatePatchKeyFeatureGroupInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-patch-key-feature-group-input.md) input · [`SupSolutionTemplateSetKeyFeatureGroupInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-set-key-feature-group-input.md) input

```graphql
input SupSolutionTemplateKeyFeatureGroupInput {
  attributes: [SupSolutionTemplateKeyFeatureGroupAttributeInput!]!
  order: Int!
  title: String!
}
```

### Fields

#### `SupSolutionTemplateKeyFeatureGroupInput.attributes` · [`[SupSolutionTemplateKeyFeatureGroupAttributeInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-key-feature-group-attribute-input.md) non-null input supply

The list of attributes associated with the key feature group.

#### `SupSolutionTemplateKeyFeatureGroupInput.order` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

The display order of the key feature group.

#### `SupSolutionTemplateKeyFeatureGroupInput.title` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The key feature group title.
