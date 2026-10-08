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

#### `edges` · [`[DesReleaseEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-release-edge.md) list object

A list of edges.

#### `nodes` · [`[DesRelease!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-release.md) list object

A flattened list of the nodes.

#### `pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object

Information to aid in pagination.

#### `totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Identifies the total count of items in the connection.
