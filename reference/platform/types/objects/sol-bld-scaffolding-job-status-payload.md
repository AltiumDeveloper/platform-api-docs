---
title: "SolBldScaffoldingJobStatusPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-bld-scaffolding-job-status-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# SolBldScaffoldingJobStatusPayload

### Returned By

[`solBldScaffoldingStatusesBySolution`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/sol-bld-scaffolding-statuses-by-solution.md) query

```graphql
type SolBldScaffoldingJobStatusPayload {
  jobId: ID!
  messages: [SolBldScaffoldingStatusMessagePayload!]
  solutionId: ID!
  status: String!
}
```

### Fields

#### `SolBldScaffoldingJobStatusPayload.jobId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

#### `SolBldScaffoldingJobStatusPayload.messages` · [`[SolBldScaffoldingStatusMessagePayload!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-bld-scaffolding-status-message-payload.md) list object platform

#### `SolBldScaffoldingJobStatusPayload.solutionId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

#### `SolBldScaffoldingJobStatusPayload.status` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common
