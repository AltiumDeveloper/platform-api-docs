---
title: "BomReleasesEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-releases-edge"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomReleasesEdge

An edge in a connection.

### Member Of

[`BomReleasesConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-releases-connection.md) object

```graphql
type BomReleasesEdge {
  cursor: String!
  node: BomRelease!
}
```

### Fields

#### `BomReleasesEdge.cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

A cursor for use in pagination.

#### `BomReleasesEdge.node` · [`BomRelease!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-release.md) non-null object procurement

The item at the end of the edge.
