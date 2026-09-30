---
title: "DesReleaseConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-release-connection"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesReleaseConnection

A connection to a list of items.

### Member Of

[`DesDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design.md) object

```graphql
type DesReleaseConnection {
  edges: [DesReleaseEdge!]
  nodes: [DesRelease!]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `DesReleaseConnection.edges` · [`[DesReleaseEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-release-edge.md) list object design

A list of edges.

#### `DesReleaseConnection.nodes` · [`[DesRelease!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-release.md) list object design

A flattened list of the nodes.

#### `DesReleaseConnection.pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object common

Information to aid in pagination.

#### `DesReleaseConnection.totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Identifies the total count of items in the connection.
