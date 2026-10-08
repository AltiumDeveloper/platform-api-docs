---
title: "DesVcsRevisionConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-vcs-revision-connection"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesVcsRevisionConnection

A connection to a list of items.

### Member Of

[`DesProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project.md) object

```graphql
type DesVcsRevisionConnection {
  edges: [DesVcsRevisionEdge!]
  nodes: [DesVcsRevision!]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `edges` · [`[DesVcsRevisionEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-vcs-revision-edge.md) list object

A list of edges.

#### `nodes` · [`[DesVcsRevision!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-vcs-revision.md) list object

A flattened list of the nodes.

#### `pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object

Information to aid in pagination.

#### `totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Identifies the total count of items in the connection.
