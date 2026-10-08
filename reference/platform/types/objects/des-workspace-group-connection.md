---
title: "DesWorkspaceGroupConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-group-connection"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceGroupConnection

A connection to a list of items.

### Member Of

[`DesWorkspaceTeam`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-team.md) object

```graphql
type DesWorkspaceGroupConnection {
  edges: [DesWorkspaceGroupEdge!]
  nodes: [DesWorkspaceGroup!]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `edges` · [`[DesWorkspaceGroupEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-group-edge.md) list object

A list of edges.

#### `nodes` · [`[DesWorkspaceGroup!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-group.md) list object

A flattened list of the nodes.

#### `pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object

Information to aid in pagination.

#### `totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Identifies the total count of items in the connection.
