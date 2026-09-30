---
title: "SupSolutionTemplatePatchTagsInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-patch-tags-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplatePatchTagsInput

### Member Of

[`supSolutionTemplatePatchTags`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-solution-template-patch-tags.md) mutation

```graphql
input SupSolutionTemplatePatchTagsInput {
  addTags: [SupSolutionTemplateTagInput!]
  removeTags: [SupSolutionTemplateTagInput!]
  solutionTemplateId: ID!
}
```

### Fields

#### `SupSolutionTemplatePatchTagsInput.addTags` · [`[SupSolutionTemplateTagInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-tag-input.md) list input supply

List of new tags for categorizing a solution template.

#### `SupSolutionTemplatePatchTagsInput.removeTags` · [`[SupSolutionTemplateTagInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-tag-input.md) list input supply

List of existing tags will be removed from a solution template.

#### `SupSolutionTemplatePatchTagsInput.solutionTemplateId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The solution template identifier.
