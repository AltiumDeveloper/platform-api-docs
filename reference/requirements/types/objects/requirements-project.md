---
title: "RequirementsProject"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/requirements/types/objects/requirements-project"
bounded_context: "Requirements"
kind: "objects"
experimental: false
deprecated: false
---

# RequirementsProject

### Returned By

[`requirements.project.byId`](https://altiumdeveloper.github.io/platform-api-docs/reference/requirements/operations/queries/requirements/project/by-id.md) query · [`requirements.project.byIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/requirements/operations/queries/requirements/project/by-ids.md) query

```graphql
type RequirementsProject {
  id: ID!
  name: String!
}
```

### Fields

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
