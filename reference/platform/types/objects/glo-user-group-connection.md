---
title: "GloUserGroupConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-group-connection"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloUserGroupConnection

A connection to a list of items.

### Returned By

[`gloUserGroups`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-user-groups.md) query

```graphql
type GloUserGroupConnection {
  edges: [GloUserGroupEdge!]
  nodes: [GloUserGroup]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `GloUserGroupConnection.edges` · [`[GloUserGroupEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-group-edge.md) list object platform

A list of edges.

#### `GloUserGroupConnection.nodes` · [`[GloUserGroup]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-group.md) list object platform

A flattened list of the nodes.

#### `GloUserGroupConnection.pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object common

Information to aid in pagination.

#### `GloUserGroupConnection.totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Identifies the total count of items in the connection.
