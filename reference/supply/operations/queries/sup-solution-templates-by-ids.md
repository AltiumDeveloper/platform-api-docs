---
title: "supSolutionTemplatesByIds"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-solution-templates-by-ids"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supSolutionTemplatesByIds

Search a specific solution template by its unique identifier.

### Type

#### [`SupSolutionTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template.md) object

```graphql
supSolutionTemplatesByIds(
  ids: [ID!]!
): [SupSolutionTemplate]!
```

### Arguments

#### `ids` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
