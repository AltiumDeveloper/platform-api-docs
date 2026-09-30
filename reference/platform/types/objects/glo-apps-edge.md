---
title: "GloAppsEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-apps-edge"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloAppsEdge

An edge in a connection.

### Member Of

[`GloAppsConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-apps-connection.md) object

```graphql
type GloAppsEdge {
  cursor: String!
  node: GloApp!
}
```

### Fields

#### `GloAppsEdge.cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

A cursor for use in pagination.

#### `GloAppsEdge.node` · [`GloApp!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) non-null object platform

The item at the end of the edge.
