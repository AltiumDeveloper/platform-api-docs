---
title: "SupEvalKitCompatibleSoftwareProjectEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-compatible-software-project-edge"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupEvalKitCompatibleSoftwareProjectEdge

An edge in a connection.

### Member Of

[`SupEvalKitCompatibleSoftwareProjectConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-compatible-software-project-connection.md) object

```graphql
type SupEvalKitCompatibleSoftwareProjectEdge {
  cursor: String!
  node: SupSoftwareProject!
}
```

### Fields

#### `cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A cursor for use in pagination.

#### `node` · [`SupSoftwareProject!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project.md) non-null object

The item at the end of the edge.
