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

#### `aiModelIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Searches by AI model identifiers.

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Searches by description.

#### `hasAIModels` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Indicates whether the solution template has AI models; null applies no filtering.

#### `ids` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) list scalar

Searches by solution template identifiers.

#### `publisherIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Searches by a list of publisher (company) identifiers if specified.

#### `q` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Searches by text data (title, stable name, description).

#### `stableNames` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Searches by stable name identifier.

#### `statuses` · [`[SupSolutionTemplateStatus!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-solution-template-status.md) list enum

Searches by solution template status.

#### `title` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Searches by solution template title.

#### `updatedByIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Searches by a list of user identifiers who last modified the solution template.
