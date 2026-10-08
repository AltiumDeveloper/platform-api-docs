---
title: "DesReleaseEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-release-edge"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesReleaseEdge

An edge in a connection.

### Member Of

[`DesReleaseConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-release-connection.md) object

```graphql
type DesReleaseEdge {
  cursor: String!
  node: DesRelease!
}
```

### Fields

#### `cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A cursor for use in pagination.

#### `node` · [`DesRelease!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-release.md) non-null object

The item at the end of the edge.
