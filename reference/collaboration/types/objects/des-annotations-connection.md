---
title: "DesAnnotationsConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-annotations-connection"
bounded_context: "Collaboration"
kind: "objects"
experimental: false
deprecated: false
---

# DesAnnotationsConnection

A connection to a list of items.

### Returned By

[`desAnnotations`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/queries/des-annotations.md) query

```graphql
type DesAnnotationsConnection {
  edges: [DesAnnotationsEdge!]
  nodes: [DesAnnotation!]
  pageInfo: PageInfo!
}
```

### Fields

#### `DesAnnotationsConnection.edges` · [`[DesAnnotationsEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-annotations-edge.md) list object collaboration

A list of edges.

#### `DesAnnotationsConnection.nodes` · [`[DesAnnotation!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-annotation.md) list object collaboration

A flattened list of the nodes.

#### `DesAnnotationsConnection.pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object common

Information to aid in pagination.
