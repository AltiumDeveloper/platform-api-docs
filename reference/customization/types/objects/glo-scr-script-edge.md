---
title: "GloScrScriptEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-edge"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# GloScrScriptEdge

An edge in a connection.

### Member Of

[`GloScrScriptConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-connection.md) object

```graphql
type GloScrScriptEdge {
  cursor: String!
  node: GloScrScript!
}
```

### Fields

#### `cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A cursor for use in pagination.

#### `node` · [`GloScrScript!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script.md) non-null object

The item at the end of the edge.
