---
title: "DesDatasheetEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-datasheet-edge"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesDatasheetEdge

An edge in a connection.

### Member Of

[`DesDatasheetConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-datasheet-connection.md) object

```graphql
type DesDatasheetEdge {
  cursor: String!
  node: DesDatasheet!
}
```

### Fields

#### `cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A cursor for use in pagination.

#### `node` · [`DesDatasheet!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-datasheet.md) non-null object

The item at the end of the edge.
