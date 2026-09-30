---
title: "GloScrScriptVersionConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-version-connection"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# GloScrScriptVersionConnection

A connection to a list of items.

### Member Of

[`GloScrScript`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script.md) object

```graphql
type GloScrScriptVersionConnection {
  edges: [GloScrScriptVersionEdge!]
  nodes: [GloScrScriptVersion!]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `GloScrScriptVersionConnection.edges` · [`[GloScrScriptVersionEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-version-edge.md) list object customization

A list of edges.

#### `GloScrScriptVersionConnection.nodes` · [`[GloScrScriptVersion!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-version.md) list object customization

A flattened list of the nodes.

#### `GloScrScriptVersionConnection.pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object common

Information to aid in pagination.

#### `GloScrScriptVersionConnection.totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Identifies the total count of items in the connection.
