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

#### `edges` · [`[GloCusAssignmentEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-assignment-edge.md) list object

A list of edges.

#### `nodes` · [`[GloCusAssignment]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/interfaces/glo-cus-assignment.md) list interface

A flattened list of the nodes.

#### `pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object

Information to aid in pagination.

#### `totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Identifies the total count of items in the connection.
