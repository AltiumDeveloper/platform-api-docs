---
title: "SupEvalKitSoftwareProjectToolchainConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-software-project-toolchain-connection"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupEvalKitSoftwareProjectToolchainConnection

A connection to a list of items.

### Returned By

[`supEvalKitSoftwareProjectToolchains`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-eval-kit-software-project-toolchains.md) query

```graphql
type SupEvalKitSoftwareProjectToolchainConnection {
  edges: [SupEvalKitSoftwareProjectToolchainEdge!]
  nodes: [SupEvalKitSoftwareProjectToolchain!]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `edges` · [`[SupEvalKitSoftwareProjectToolchainEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-software-project-toolchain-edge.md) list object

A list of edges.

#### `nodes` · [`[SupEvalKitSoftwareProjectToolchain!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-software-project-toolchain.md) list object

A flattened list of the nodes.

#### `pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object

Information to aid in pagination.

#### `totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Identifies the total count of items in the connection.
