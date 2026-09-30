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

```graphql
desWorkspaceGroupsByIds(
  ids: [ID!]!
): [DesWorkspaceGroup]!
```

### Arguments

#### `desWorkspaceGroupsByIds.ids` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

### Type

#### [`DesWorkspaceGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-group.md) object platform

The information about the workspace group.
