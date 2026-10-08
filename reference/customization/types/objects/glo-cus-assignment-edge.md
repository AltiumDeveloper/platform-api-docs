---
title: "GloCusAssignmentEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-assignment-edge"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# GloCusAssignmentEdge

An edge in a connection.

### Member Of

[`GloCusAssignmentConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-assignment-connection.md) object

```graphql
type GloCusAssignmentEdge {
  cursor: String!
  node: GloCusAssignment
}
```

### Fields

#### `cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A cursor for use in pagination.

#### `node` · [`GloCusAssignment`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/interfaces/glo-cus-assignment.md) interface

The item at the end of the edge.
