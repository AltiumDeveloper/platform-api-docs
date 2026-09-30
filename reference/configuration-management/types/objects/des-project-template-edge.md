---
title: "DesProjectTemplateEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types/objects/des-project-template-edge"
bounded_context: "Configuration Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesProjectTemplateEdge

An edge in a connection.

### Member Of

[`DesProjectTemplateConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types/objects/des-project-template-connection.md) object

```graphql
type DesProjectTemplateEdge {
  cursor: String!
  node: DesProjectTemplate!
}
```

### Fields

#### `DesProjectTemplateEdge.cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

A cursor for use in pagination.

#### `DesProjectTemplateEdge.node` · [`DesProjectTemplate!`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types/objects/des-project-template.md) non-null object configuration-management

The item at the end of the edge.
