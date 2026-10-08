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

#### `edges` · [`[GloUserGroupEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-group-edge.md) list object

A list of edges.

#### `nodes` · [`[GloUserGroup]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-group.md) list object

A flattened list of the nodes.

#### `pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object

Information to aid in pagination.

#### `totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Identifies the total count of items in the connection.
