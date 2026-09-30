---
title: "desReuseBlocksByIds"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-reuse-blocks-by-ids"
bounded_context: "Library Management"
kind: "queries"
experimental: false
deprecated: false
---

# desReuseBlocksByIds

Find specific reuse blocks by their unique identifiers.

```graphql
desReuseBlocksByIds(
  ids: [ID!]!
): [DesReuseBlock]!
```

### Arguments

#### `desReuseBlocksByIds.ids` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Node identifiers for the reuse blocks.

### Type

#### [`DesReuseBlock`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block.md) object library-management

Reuse blocks are items that can be reused in future board-level design projects.
