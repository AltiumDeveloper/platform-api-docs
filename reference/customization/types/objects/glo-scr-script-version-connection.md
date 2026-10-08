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

#### `edges` · [`[GloScrScriptVersionEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-version-edge.md) list object

A list of edges.

#### `nodes` · [`[GloScrScriptVersion!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-version.md) list object

A flattened list of the nodes.

#### `pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object

Information to aid in pagination.

#### `totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Identifies the total count of items in the connection.
