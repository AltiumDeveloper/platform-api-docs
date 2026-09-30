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

- [Reuse Block](https://altiumdeveloper.github.io/cdm/classes/lib_ReuseBlock/)
  - GRID: `grid:workspace:{workspace-id}:library:reuse-block/{id}`

### Returned By

[`desReuseBlockById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-reuse-block-by-id.md) query · [`desReuseBlocksByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-reuse-blocks-by-ids.md) query

### Member Of

[`DesReuseBlockConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block-connection.md) object · [`DesReuseBlockEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block-edge.md) object

### Interfaces

#### [`Node`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/node.md) interface common

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

#### `DesReuseBlock.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Description of reuse block.

#### `DesReuseBlock.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The node identifier for this reuse block (used by `desReuseBlockById`).

#### `DesReuseBlock.latestRevision` · [`DesReuseBlockRevision!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block-revision.md) non-null object library-management

Latest revision for a reuse block.

#### `DesReuseBlock.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Name of reuse block.

#### `DesReuseBlock.revisions` · [`[DesReuseBlockRevision!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block-revision.md) non-null object library-management

All revisions of the reuse block.
