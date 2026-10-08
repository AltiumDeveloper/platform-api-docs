---
title: "DesSharedWithMeProjectInfoEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-shared-with-me-project-info-edge"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesSharedWithMeProjectInfoEdge

An edge in a connection.

### Member Of

[`DesSharedWithMeProjectInfoConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-shared-with-me-project-info-connection.md) object

```graphql
type DesSharedWithMeProjectInfoEdge {
  cursor: String!
  node: DesSharedWithMeProjectInfo!
}
```

### Fields

#### `cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A cursor for use in pagination.

#### `node` · [`DesSharedWithMeProjectInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-shared-with-me-project-info.md) non-null object

The item at the end of the edge.
