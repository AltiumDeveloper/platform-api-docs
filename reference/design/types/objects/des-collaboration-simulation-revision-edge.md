---
title: "DesCollaborationSimulationRevisionEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-simulation-revision-edge"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesCollaborationSimulationRevisionEdge

An edge in a connection.

### Member Of

[`DesCollaborationSimulationRevisionConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-simulation-revision-connection.md) object

```graphql
type DesCollaborationSimulationRevisionEdge {
  cursor: String!
  node: DesCollaborationSimulationRevision!
}
```

### Fields

#### `cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A cursor for use in pagination.

#### `node` · [`DesCollaborationSimulationRevision!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-simulation-revision.md) non-null object

The item at the end of the edge.
