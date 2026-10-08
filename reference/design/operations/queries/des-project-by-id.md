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

### Type

#### [`DesProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project.md) object

A project manages all development stages of the PCB/PCA product lifecycle.

```graphql
desProjectById(
  id: ID!
): DesProject
```

### Arguments

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The project identifier.
