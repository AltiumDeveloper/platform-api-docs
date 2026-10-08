---
title: "PlatformTokenEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-edge"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# PlatformTokenEdge

An edge in a connection.

### Member Of

[`PlatformTokenConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-connection.md) object

```graphql
type PlatformTokenEdge {
  cursor: String!
  node: PlatformToken!
}
```

### Fields

#### `cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A cursor for use in pagination.

#### `node` · [`PlatformToken!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md) non-null interface

The item at the end of the edge.
