---
title: "GloScrScriptExecutionEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-execution-edge"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# GloScrScriptExecutionEdge

An edge in a connection.

### Member Of

[`GloScrScriptExecutionConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-execution-connection.md) object

```graphql
type GloScrScriptExecutionEdge {
  cursor: String!
  node: GloScrScriptExecution!
}
```

### Fields

#### `GloScrScriptExecutionEdge.cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

A cursor for use in pagination.

#### `GloScrScriptExecutionEdge.node` · [`GloScrScriptExecution!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-execution.md) non-null object customization

The item at the end of the edge.
