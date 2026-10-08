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

### Type

#### [`RequirementsProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/requirements/types/objects/requirements-project.md) object

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

#### `ids` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
