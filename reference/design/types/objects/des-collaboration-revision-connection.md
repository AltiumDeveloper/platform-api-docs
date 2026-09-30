---
title: "DesCollaborationRevisionConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-revision-connection"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesCollaborationRevisionConnection

A connection to a list of items.

### Returned By

[`desProjectCollaborationRevisions`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-project-collaboration-revisions.md) query

### Member Of

[`DesProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project.md) object

```graphql
type DesCollaborationRevisionConnection {
  edges: [DesCollaborationRevisionEdge!]
  nodes: [DesCollaborationRevision!]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `DesCollaborationRevisionConnection.edges` · [`[DesCollaborationRevisionEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-revision-edge.md) list object design

A list of edges.

#### `DesCollaborationRevisionConnection.nodes` · [`[DesCollaborationRevision!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-revision.md) list object design

A flattened list of the nodes.

#### `DesCollaborationRevisionConnection.pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object common

Information to aid in pagination.

#### `DesCollaborationRevisionConnection.totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Identifies the total count of items in the connection.
