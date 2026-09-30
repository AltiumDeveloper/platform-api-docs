---
title: "DesTaskConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-task-connection"
bounded_context: "Collaboration"
kind: "objects"
experimental: false
deprecated: false
---

# DesTaskConnection

A connection to a list of items.

### Returned By

[`desProjectTasks`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/queries/des-project-tasks.md) query · [`desWorkspaceTasks`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/queries/des-workspace-tasks.md) query

```graphql
type DesTaskConnection {
  edges: [DesTaskEdge!]
  nodes: [DesTask!]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `DesTaskConnection.edges` · [`[DesTaskEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-task-edge.md) list object collaboration

A list of edges.

#### `DesTaskConnection.nodes` · [`[DesTask!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-task.md) list object collaboration

A flattened list of the nodes.

#### `DesTaskConnection.pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object common

Information to aid in pagination.

#### `DesTaskConnection.totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Identifies the total count of items in the connection.
