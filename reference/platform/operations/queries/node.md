---
title: "node"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/node"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# node

Fetches an object given its ID.

```graphql
node(
  id: ID!
): Node
```

### Arguments

#### `node.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

ID of the object.

### Type

#### [`Node`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/node.md) interface common

The node interface is implemented by entities that have a global unique identifier.
