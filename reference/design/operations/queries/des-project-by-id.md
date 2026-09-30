---
title: "desProjectById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-project-by-id"
bounded_context: "Design"
kind: "queries"
experimental: false
deprecated: false
---

# desProjectById

Searches a project by its identifier.

```graphql
desProjectById(
  id: ID!
): DesProject
```

### Arguments

#### `desProjectById.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The project identifier.

### Type

#### [`DesProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project.md) object design

A project manages all development stages of the PCB/PCA product lifecycle.
