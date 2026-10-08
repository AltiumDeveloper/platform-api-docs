---
title: "DesWorkspaceUserConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user-connection"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceUserConnection

A connection to a list of items.

### Member Of

[`DesWorkspaceGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-group.md) object · [`DesWorkspaceTeam`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-team.md) object

```graphql
type DesWorkspaceUserConnection {
  edges: [DesWorkspaceUserEdge!]
  nodes: [DesWorkspaceUser!]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `edges` · [`[DesWorkspaceUserEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user-edge.md) list object

A list of edges.

#### `nodes` · [`[DesWorkspaceUser!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) list object

A flattened list of the nodes.

#### `pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object

Information to aid in pagination.

#### `totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Identifies the total count of items in the connection.
