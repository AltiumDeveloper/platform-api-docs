---
title: "RequirementFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/requirements/types/inputs/requirement-filter-input"
bounded_context: "Requirements"
kind: "inputs"
experimental: false
deprecated: false
---

# RequirementFilterInput

### Member Of

[`desAnnotations`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/queries/des-annotations.md) query

```graphql
input RequirementFilterInput {
  requirementIds: [String!]
}
```

### Fields

#### `requirementIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

List of requirement IDs to use for filtering.
