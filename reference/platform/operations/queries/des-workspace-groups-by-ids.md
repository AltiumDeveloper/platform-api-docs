---
title: "desWorkspaceGroupsByIds"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-workspace-groups-by-ids"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# desWorkspaceGroupsByIds

Retrieves workspace groups by IDs.

### Type

#### [`DesWorkspaceGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-group.md) object

The information about the workspace group.

```graphql
desWorkspaceGroupsByIds(
  ids: [ID!]!
): [DesWorkspaceGroup]!
```

### Arguments

#### `ids` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
