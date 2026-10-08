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

#### `cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A cursor for use in pagination.

#### `node` · [`GloApp!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) non-null object

The item at the end of the edge.
