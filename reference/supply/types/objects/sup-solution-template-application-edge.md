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

#### `cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A cursor for use in pagination.

#### `node` · [`SupSolutionTemplateApplication!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-application.md) non-null object

The item at the end of the edge.
