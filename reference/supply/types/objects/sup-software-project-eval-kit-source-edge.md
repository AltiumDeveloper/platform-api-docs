---
title: "SupSoftwareProjectEvalKitSourceEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-eval-kit-source-edge"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSoftwareProjectEvalKitSourceEdge

An edge in a connection.

### Member Of

[`SupSoftwareProjectEvalKitSourceConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-eval-kit-source-connection.md) object

```graphql
type SupSoftwareProjectEvalKitSourceEdge {
  cursor: String!
  node: SupSoftwareProjectEvalKitSource!
}
```

### Fields

#### `cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A cursor for use in pagination.

#### `node` · [`SupSoftwareProjectEvalKitSource!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-eval-kit-source.md) non-null object

The item at the end of the edge.
