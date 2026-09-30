---
title: "SupSoftwareProjectEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-edge"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSoftwareProjectEdge

An edge in a connection.

### Member Of

[`SupSoftwareProjectConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-connection.md) object

```graphql
type SupSoftwareProjectEdge {
  cursor: String!
  node: SupSoftwareProject!
}
```

### Fields

#### `SupSoftwareProjectEdge.cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

A cursor for use in pagination.

#### `SupSoftwareProjectEdge.node` · [`SupSoftwareProject!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project.md) non-null object supply

The item at the end of the edge.
