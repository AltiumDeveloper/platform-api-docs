---
title: "requirements.project.byId"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/requirements/operations/queries/requirements/project/by-id"
bounded_context: "Requirements"
kind: "queries"
experimental: false
deprecated: false
---

# requirements.project.byId

Gets Requirements project by GRID.

```graphql
requirements {
  project {
    byId(
      id: ID!
    ): RequirementsProject
  }
}
```

### Arguments

#### `byId.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

### Type

#### [`RequirementsProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/requirements/types/objects/requirements-project.md) object requirements
