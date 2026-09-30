---
title: "SupSolutionTemplateApplicationEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-application-edge"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateApplicationEdge

An edge in a connection.

### Member Of

[`SupSolutionTemplateApplicationConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-application-connection.md) object

```graphql
type SupSolutionTemplateApplicationEdge {
  cursor: String!
  node: SupSolutionTemplateApplication!
}
```

### Fields

#### `SupSolutionTemplateApplicationEdge.cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

A cursor for use in pagination.

#### `SupSolutionTemplateApplicationEdge.node` · [`SupSolutionTemplateApplication!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-application.md) non-null object supply

The item at the end of the edge.
