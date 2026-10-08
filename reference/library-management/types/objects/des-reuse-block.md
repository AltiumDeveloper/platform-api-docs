---
title: "DesReuseBlock"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesReuseBlock

Reuse blocks are items that can be reused in future board-level design projects.

### Common Data Model

- [Reuse Block](https://w3id.org/altium/cdm/library/ReuseBlock) — A reusable section of a design stored in a Workspace, typically combining schematic circuitry with its PCB representation; a block can also be schematic-only or PCB-only. Placing a reuse block on a schematic sheet brings its PCB content into the board design when changes are transferred through an ECO.

  - IRI: [`https://w3id.org/altium/cdm/library/ReuseBlock`](https://w3id.org/altium/cdm/library/ReuseBlock)
  - GRID: `grid:workspace:{workspace-id}:library:reuse-block/{id}`

### Returned By

[`desReuseBlockById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-reuse-block-by-id.md) query · [`desReuseBlocksByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-reuse-blocks-by-ids.md) query

### Member Of

[`DesReuseBlockConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block-connection.md) object · [`DesReuseBlockEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block-edge.md) object

### Interfaces

#### [`Node`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/node.md) interface

The node interface is implemented by entities that have a global unique identifier.

```graphql
type DesReuseBlock implements Node {
  description: String!
  id: ID!
  latestRevision: DesReuseBlockRevision!
  name: String!
  revisions: [DesReuseBlockRevision!]!
}
```

### Fields

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Description of reuse block.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The node identifier for this reuse block (used by [`desReuseBlockById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-reuse-block-by-id.md)).

#### `latestRevision` · [`DesReuseBlockRevision!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block-revision.md) non-null object

Latest revision for a reuse block.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Name of reuse block.

#### `revisions` · [`[DesReuseBlockRevision!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block-revision.md) non-null object

All revisions of the reuse block.
