---
title: "DesProjectGuestConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-guest-connection"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesProjectGuestConnection

A connection to a list of items.

### Member Of

[`DesWorkspaceTeam`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-team.md) object

```graphql
type DesProjectGuestConnection {
  edges: [DesProjectGuestEdge!]
  nodes: [DesProjectGuest!]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `DesProjectGuestConnection.edges` · [`[DesProjectGuestEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-guest-edge.md) list object design

A list of edges.

#### `DesProjectGuestConnection.nodes` · [`[DesProjectGuest!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-guest.md) list object design

A flattened list of the nodes.

#### `DesProjectGuestConnection.pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object common

Information to aid in pagination.

#### `DesProjectGuestConnection.totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Identifies the total count of items in the connection.
