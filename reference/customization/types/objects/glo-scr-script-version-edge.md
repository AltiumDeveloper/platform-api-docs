---
title: "GloScrScriptVersionEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-version-edge"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# GloScrScriptVersionEdge

An edge in a connection.

### Member Of

[`GloScrScriptVersionConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-version-connection.md) object

```graphql
type GloScrScriptVersionEdge {
  cursor: String!
  node: GloScrScriptVersion!
}
```

### Fields

#### `GloScrScriptVersionEdge.cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

A cursor for use in pagination.

#### `GloScrScriptVersionEdge.node` · [`GloScrScriptVersion!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-version.md) non-null object customization

The item at the end of the edge.
