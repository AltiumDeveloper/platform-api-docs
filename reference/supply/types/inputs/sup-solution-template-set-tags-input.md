---
title: "SupSolutionTemplateSetTagsInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-set-tags-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateSetTagsInput

### Member Of

[`supSolutionTemplateSetTags`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-solution-template-set-tags.md) mutation

```graphql
input SupSolutionTemplateSetTagsInput {
  solutionTemplateId: ID!
  tags: [SupSolutionTemplateTagInput!]!
}
```

### Fields

#### `solutionTemplateId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The solution template identifier.

#### `tags` · [`[SupSolutionTemplateTagInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-tag-input.md) non-null input

List of new tags for categorizing a solution template.
