---
title: "DesProjectEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-edge"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesProjectEdge

An edge in a connection.

### Member Of

[`DesProjectConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-connection.md) object

```graphql
type DesProjectEdge {
  cursor: String!
  node: DesProject!
}
```

### Fields

#### `DesProjectEdge.cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

A cursor for use in pagination.

#### `DesProjectEdge.node` · [`DesProject!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project.md) non-null object design

The item at the end of the edge.
