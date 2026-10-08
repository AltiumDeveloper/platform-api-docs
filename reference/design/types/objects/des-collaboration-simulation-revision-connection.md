---
title: "DesCollaborationSimulationRevisionConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-simulation-revision-connection"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesCollaborationSimulationRevisionConnection

A connection to a list of items.

### Returned By

[`desProjectCollaborationSimulationRevisions`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-project-collaboration-simulation-revisions.md) query

```graphql
type DesCollaborationSimulationRevisionConnection {
  edges: [DesCollaborationSimulationRevisionEdge!]
  nodes: [DesCollaborationSimulationRevision!]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `edges` · [`[DesCollaborationSimulationRevisionEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-simulation-revision-edge.md) list object

A list of edges.

#### `nodes` · [`[DesCollaborationSimulationRevision!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-simulation-revision.md) list object

A flattened list of the nodes.

#### `pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object

Information to aid in pagination.

#### `totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Identifies the total count of items in the connection.
