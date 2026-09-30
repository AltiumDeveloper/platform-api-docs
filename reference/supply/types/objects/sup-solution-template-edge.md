---
title: "SupSolutionTemplateEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-edge"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateEdge

An edge in a connection.

### Member Of

[`SupSolutionTemplateConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-connection.md) object

```graphql
type SupSolutionTemplateEdge {
  cursor: String!
  node: SupSolutionTemplate!
}
```

### Fields

#### `SupSolutionTemplateEdge.cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

A cursor for use in pagination.

#### `SupSolutionTemplateEdge.node` · [`SupSolutionTemplate!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template.md) non-null object supply

The item at the end of the edge.
