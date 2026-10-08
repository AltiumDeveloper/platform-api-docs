---
title: "DesFootprintEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-footprint-edge"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesFootprintEdge

An edge in a connection.

### Member Of

[`DesFootprintConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-footprint-connection.md) object

```graphql
type DesFootprintEdge {
  cursor: String!
  node: DesFootprint!
}
```

### Fields

#### `cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A cursor for use in pagination.

#### `node` · [`DesFootprint!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-footprint.md) non-null object

The item at the end of the edge.
