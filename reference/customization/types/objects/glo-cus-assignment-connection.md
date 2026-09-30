---
title: "GloCusAssignmentConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-assignment-connection"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# GloCusAssignmentConnection

A connection to a list of items.

### Member Of

[`GloCusExtensionPoint`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-extension-point.md) object

```graphql
type GloCusAssignmentConnection {
  edges: [GloCusAssignmentEdge!]
  nodes: [GloCusAssignment]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `GloCusAssignmentConnection.edges` · [`[GloCusAssignmentEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-assignment-edge.md) list object customization

A list of edges.

#### `GloCusAssignmentConnection.nodes` · [`[GloCusAssignment]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/interfaces/glo-cus-assignment.md) list interface customization

A flattened list of the nodes.

#### `GloCusAssignmentConnection.pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object common

Information to aid in pagination.

#### `GloCusAssignmentConnection.totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Identifies the total count of items in the connection.
