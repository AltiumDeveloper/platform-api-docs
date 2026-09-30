---
title: "supSoftwareProjectsByIds"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-software-projects-by-ids"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supSoftwareProjectsByIds

Search a specific software project by its unique identifier.

```graphql
supSoftwareProjectsByIds(
  ids: [ID!]!
): [SupSoftwareProject]!
```

### Arguments

#### `supSoftwareProjectsByIds.ids` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

### Type

#### [`SupSoftwareProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project.md) object supply
