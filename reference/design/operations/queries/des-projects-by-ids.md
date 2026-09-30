---
title: "desProjectsByIds"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-projects-by-ids"
bounded_context: "Design"
kind: "queries"
experimental: false
deprecated: false
---

# desProjectsByIds

Searches projects by their identifiers.

```graphql
desProjectsByIds(
  ids: [ID!]!
): [DesProject]!
```

### Arguments

#### `desProjectsByIds.ids` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

An array of project identifiers.

### Type

#### [`DesProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project.md) object design

A project manages all development stages of the PCB/PCA product lifecycle.
