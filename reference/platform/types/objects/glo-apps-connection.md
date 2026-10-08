---
title: "GloAppsConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-apps-connection"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloAppsConnection

A connection to a list of items.

### Returned By

[`gloApps`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-apps.md) query

```graphql
type GloAppsConnection {
  edges: [GloAppsEdge!]
  nodes: [GloApp!]
  pageInfo: PageInfo!
}
```

### Fields

#### `edges` · [`[GloAppsEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-apps-edge.md) list object

A list of edges.

#### `nodes` · [`[GloApp!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) list object

A flattened list of the nodes.

#### `pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object

Information to aid in pagination.
