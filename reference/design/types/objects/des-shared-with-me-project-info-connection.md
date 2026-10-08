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

#### `edges` · [`[DesSharedWithMeProjectInfoEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-shared-with-me-project-info-edge.md) list object

A list of edges.

#### `nodes` · [`[DesSharedWithMeProjectInfo!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-shared-with-me-project-info.md) list object

A flattened list of the nodes.

#### `pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object

Information to aid in pagination.

#### `totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Identifies the total count of items in the connection.
