---
title: "DesReuseBlockRevision"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block-revision"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesReuseBlockRevision

Reuse block revision information.

### Common Data Model

- [Reuse Block Revision](https://altiumdeveloper.github.io/cdm/classes/lib_ReuseBlockRevision/) — A revision of a Reuse Block: its schematic and/or PCB content as saved into the Workspace at one point in time, with its own lifecycle state. Editing a reuse block saves it into the next revision.
  - GRID: `grid:workspace:{workspace-id}:library:reuse-block-revision/{id}`

### Returned By

[`desReuseBlockRevisionById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-reuse-block-revision-by-id.md) query · [`desReuseBlockRevisionsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-reuse-block-revisions-by-ids.md) query

### Member Of

[`DesReuseBlock`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block.md) object

### Interfaces

#### [`Node`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/node.md) interface common

The node interface is implemented by entities that have a global unique identifier.

```graphql
type DesReuseBlockRevision implements Node {
  comment: String!
  description: String!
  id: ID!
  lifeCycleState: DesLifeCycleState!
  name: String!
  pcbSnippet: DesDownloadableFile!
  schematicSnippet: DesDownloadableFile!
}
```

### Fields

#### `DesReuseBlockRevision.comment` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The comment on a reuse block revision.

#### `DesReuseBlockRevision.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The description for the reuse block revision.

#### `DesReuseBlockRevision.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The node identifier for this reuse block (used by `desReuseBlockRevisionById`).

#### `DesReuseBlockRevision.lifeCycleState` · [`DesLifeCycleState!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state.md) non-null object platform

The life cycle state information.

#### `DesReuseBlockRevision.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of the reuse block revision.

#### `DesReuseBlockRevision.pcbSnippet` · [`DesDownloadableFile!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-downloadable-file.md) non-null object design

The circuitry in a PCB design including components and routing saved as a reuse block.

#### `DesReuseBlockRevision.schematicSnippet` · [`DesDownloadableFile!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-downloadable-file.md) non-null object design

The circuitry on a single schematic sheet saved as a reuse block.
