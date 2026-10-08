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

### Type

#### [`DesReuseBlock`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block.md) object

Reuse blocks are items that can be reused in future board-level design projects.

```graphql
desReuseBlocksByIds(
  ids: [ID!]!
): [DesReuseBlock]!
```

### Arguments

#### `ids` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Node identifiers for the reuse blocks.
