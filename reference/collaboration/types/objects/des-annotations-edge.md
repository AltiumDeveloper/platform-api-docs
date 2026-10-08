---
title: "DesAnnotationsEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-annotations-edge"
bounded_context: "Collaboration"
kind: "objects"
experimental: false
deprecated: false
---

# DesAnnotationsEdge

An edge in a connection.

### Member Of

[`DesAnnotationsConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-annotations-connection.md) object

```graphql
type DesAnnotationsEdge {
  cursor: String!
  node: DesAnnotation!
}
```

### Fields

#### `cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A cursor for use in pagination.

#### `node` · [`DesAnnotation!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-annotation.md) non-null object

The item at the end of the edge.
