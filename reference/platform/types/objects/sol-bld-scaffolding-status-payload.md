---
title: "SolBldScaffoldingStatusPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-bld-scaffolding-status-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# SolBldScaffoldingStatusPayload

### Returned By

[`solBldScaffoldingStatus`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/sol-bld-scaffolding-status.md) query

```graphql
type SolBldScaffoldingStatusPayload {
  messages: [SolBldScaffoldingStatusMessagePayload!]
  solutionId: ID!
  status: String!
}
```

### Fields

#### `messages` · [`[SolBldScaffoldingStatusMessagePayload!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-bld-scaffolding-status-message-payload.md) list object

#### `solutionId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `status` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
