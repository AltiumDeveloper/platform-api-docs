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

#### `DesWorkspaceUserConnection.edges` · [`[DesWorkspaceUserEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user-edge.md) list object platform

A list of edges.

#### `DesWorkspaceUserConnection.nodes` · [`[DesWorkspaceUser!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) list object platform

A flattened list of the nodes.

#### `DesWorkspaceUserConnection.pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object common

Information to aid in pagination.

#### `DesWorkspaceUserConnection.totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Identifies the total count of items in the connection.
