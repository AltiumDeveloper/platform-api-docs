---
title: "SupSolutionTemplateIndexSolutionTemplateInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-index-solution-template-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateIndexSolutionTemplateInput

### Member Of

[`supSolutionTemplateIndexSolutionTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-solution-template-index-solution-template.md) mutation

```graphql
input SupSolutionTemplateIndexSolutionTemplateInput {
  solutionTemplateIds: [ID!]!
}
```

### Fields

#### `SupSolutionTemplateIndexSolutionTemplateInput.solutionTemplateIds` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

List of solution template IDs to index.
