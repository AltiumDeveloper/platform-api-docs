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

### Type

#### [`RequirementsProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/requirements/types/objects/requirements-project.md) object

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

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
