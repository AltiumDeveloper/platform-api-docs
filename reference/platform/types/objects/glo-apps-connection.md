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

#### `GloAppsConnection.edges` · [`[GloAppsEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-apps-edge.md) list object platform

A list of edges.

#### `GloAppsConnection.nodes` · [`[GloApp!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) list object platform

A flattened list of the nodes.

#### `GloAppsConnection.pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object common

Information to aid in pagination.
