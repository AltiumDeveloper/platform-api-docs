---
title: "DesTaskEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-task-edge"
bounded_context: "Collaboration"
kind: "objects"
experimental: false
deprecated: false
---

# DesTaskEdge

An edge in a connection.

### Member Of

[`DesTaskConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-task-connection.md) object

```graphql
type DesTaskEdge {
  cursor: String!
  node: DesTask!
}
```

### Fields

#### `DesTaskEdge.cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

A cursor for use in pagination.

#### `DesTaskEdge.node` · [`DesTask!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-task.md) non-null object collaboration

The item at the end of the edge.
