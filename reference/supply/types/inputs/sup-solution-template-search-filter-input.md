---
title: "SupSolutionTemplateSearchFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-search-filter-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateSearchFilterInput

Represents the filter for searching solution templates.

### Member Of

[`supSolutionTemplateSearch`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-solution-template-search.md) query

```graphql
input SupSolutionTemplateSearchFilterInput {
  aiModelIds: [String!]
  description: String
  hasAIModels: Boolean
  ids: [ID!]
  publisherIds: [String!]
  q: String
  stableNames: [String!]
  statuses: [SupSolutionTemplateStatus!]
  title: String
  updatedByIds: [String!]
}
```

### Fields

#### `SupSolutionTemplateSearchFilterInput.aiModelIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Searches by AI model identifiers.

#### `SupSolutionTemplateSearchFilterInput.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Searches by description.

#### `SupSolutionTemplateSearchFilterInput.hasAIModels` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Indicates whether the solution template has AI models; null applies no filtering.

#### `SupSolutionTemplateSearchFilterInput.ids` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) list scalar common

Searches by solution template identifiers.

#### `SupSolutionTemplateSearchFilterInput.publisherIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Searches by a list of publisher (company) identifiers if specified.

#### `SupSolutionTemplateSearchFilterInput.q` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Searches by text data (title, stable name, description).

#### `SupSolutionTemplateSearchFilterInput.stableNames` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Searches by stable name identifier.

#### `SupSolutionTemplateSearchFilterInput.statuses` · [`[SupSolutionTemplateStatus!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-solution-template-status.md) list enum supply

Searches by solution template status.

#### `SupSolutionTemplateSearchFilterInput.title` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Searches by solution template title.

#### `SupSolutionTemplateSearchFilterInput.updatedByIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Searches by a list of user identifiers who last modified the solution template.
