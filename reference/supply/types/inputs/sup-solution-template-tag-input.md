---
title: "SupSolutionTemplateTagInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-tag-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateTagInput

### Member Of

[`SupSolutionTemplatePatchTagsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-patch-tags-input.md) input · [`SupSolutionTemplateSetTagsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-set-tags-input.md) input

```graphql
input SupSolutionTemplateTagInput {
  category: String!
  value: String!
}
```

### Fields

#### `category` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The tag category name.

#### `value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The tag value.
