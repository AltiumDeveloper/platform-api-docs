---
title: "requirements.project.byIds"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/requirements/operations/queries/requirements/project/by-ids"
bounded_context: "Requirements"
kind: "queries"
experimental: false
deprecated: false
---

# requirements.project.byIds

Gets Requirements projects by GRIDs.

```graphql
requirements {
  project {
    byIds(
      ids: [ID!]!
    ): [RequirementsProject]!
  }
}
```

### Arguments

#### `byIds.ids` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

### Type

#### [`RequirementsProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/requirements/types/objects/requirements-project.md) object requirements
