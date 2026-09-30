---
title: "GloScrScriptConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-connection"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# GloScrScriptConnection

A connection to a list of items.

### Returned By

[`gloScrScripts`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/queries/glo-scr-scripts.md) query

```graphql
type GloScrScriptConnection {
  edges: [GloScrScriptEdge!]
  nodes: [GloScrScript!]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `GloScrScriptConnection.edges` · [`[GloScrScriptEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-edge.md) list object customization

A list of edges.

#### `GloScrScriptConnection.nodes` · [`[GloScrScript!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script.md) list object customization

A flattened list of the nodes.

#### `GloScrScriptConnection.pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object common

Information to aid in pagination.

#### `GloScrScriptConnection.totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Identifies the total count of items in the connection.
