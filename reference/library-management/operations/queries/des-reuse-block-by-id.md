---
title: "desReuseBlockById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-reuse-block-by-id"
bounded_context: "Library Management"
kind: "queries"
experimental: false
deprecated: false
---

# desReuseBlockById

Find a specific reuse block by its unique identifier.

```graphql
desReuseBlockById(
  id: ID!
): DesReuseBlock
```

### Arguments

#### `desReuseBlockById.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The node identifier for a reuse block.

### Type

#### [`DesReuseBlock`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block.md) object library-management

Reuse blocks are items that can be reused in future board-level design projects.
