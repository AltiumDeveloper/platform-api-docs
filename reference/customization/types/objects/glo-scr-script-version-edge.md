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

#### `cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A cursor for use in pagination.

#### `node` · [`GloScrScriptVersion!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-version.md) non-null object

The item at the end of the edge.
