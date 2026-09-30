---
title: "DesComponentTemplateEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-template-edge"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesComponentTemplateEdge

An edge in a connection.

### Member Of

[`DesComponentTemplateConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-template-connection.md) object

```graphql
type DesComponentTemplateEdge {
  cursor: String!
  node: DesComponentTemplate!
}
```

### Fields

#### `DesComponentTemplateEdge.cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

A cursor for use in pagination.

#### `DesComponentTemplateEdge.node` · [`DesComponentTemplate!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-template.md) non-null object library-management

The item at the end of the edge.
