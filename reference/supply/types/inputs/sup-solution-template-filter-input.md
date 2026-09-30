---
title: "SupSolutionTemplateFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-filter-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateFilterInput

Input for filtering solution templates by additional conditions.

### Member Of

[`supSolutionTemplates`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-solution-templates.md) query

```graphql
input SupSolutionTemplateFilterInput {
  aiModelIds: [String!]
  hasAIModels: Boolean
  publisherIds: [String!]
  statuses: [SupSolutionTemplateStatus!]
}
```

### Fields

#### `SupSolutionTemplateFilterInput.aiModelIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Filter by a list of AI model identifiers if specified.

#### `SupSolutionTemplateFilterInput.hasAIModels` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Indicates whether the solution template has AI models; null applies no filtering.

#### `SupSolutionTemplateFilterInput.publisherIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Filter by a list of publisher (company) identifiers if specified.

#### `SupSolutionTemplateFilterInput.statuses` · [`[SupSolutionTemplateStatus!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-solution-template-status.md) list enum supply

Filter by a list of solution template statuses if specified.
