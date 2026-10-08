---
title: "SupSolutionTemplateRemoveKeyFeatureGroupAttributeInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-remove-key-feature-group-attribute-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateRemoveKeyFeatureGroupAttributeInput

### Member Of

[`SupSolutionTemplatePatchKeyFeatureGroupInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-patch-key-feature-group-input.md) input

```graphql
input SupSolutionTemplateRemoveKeyFeatureGroupAttributeInput {
  attributeNames: [String!]
  keyFeatureGroupTitle: String!
}
```

### Fields

#### `attributeNames` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

The list of attributes need to remove out of key feature group. If list is empty, all attributes in key feature group wil be removed.

#### `keyFeatureGroupTitle` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The title of key feature group need to remove of out a solution template.
