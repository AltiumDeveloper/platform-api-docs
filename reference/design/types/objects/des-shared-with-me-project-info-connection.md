---
title: "DesSharedWithMeProjectInfoConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-shared-with-me-project-info-connection"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesSharedWithMeProjectInfoConnection

A connection to a list of items.

### Member Of

[`DesSharedWithMe`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-shared-with-me.md) object

```graphql
type DesSharedWithMeProjectInfoConnection {
  edges: [DesSharedWithMeProjectInfoEdge!]
  nodes: [DesSharedWithMeProjectInfo!]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `DesSharedWithMeProjectInfoConnection.edges` · [`[DesSharedWithMeProjectInfoEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-shared-with-me-project-info-edge.md) list object design

A list of edges.

#### `DesSharedWithMeProjectInfoConnection.nodes` · [`[DesSharedWithMeProjectInfo!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-shared-with-me-project-info.md) list object design

A flattened list of the nodes.

#### `DesSharedWithMeProjectInfoConnection.pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object common

Information to aid in pagination.

#### `DesSharedWithMeProjectInfoConnection.totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Identifies the total count of items in the connection.
