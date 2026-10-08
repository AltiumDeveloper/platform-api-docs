---
title: "GloScrScriptExecutionConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-execution-connection"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# GloScrScriptExecutionConnection

A connection to a list of items.

### Returned By

[`gloScrScriptExecutionResults`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/queries/glo-scr-script-execution-results.md) query

```graphql
type GloScrScriptExecutionConnection {
  edges: [GloScrScriptExecutionEdge!]
  nodes: [GloScrScriptExecution!]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `edges` · [`[GloScrScriptExecutionEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-execution-edge.md) list object

A list of edges.

#### `nodes` · [`[GloScrScriptExecution!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-execution.md) list object

A flattened list of the nodes.

#### `pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object

Information to aid in pagination.

#### `totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Identifies the total count of items in the connection.
