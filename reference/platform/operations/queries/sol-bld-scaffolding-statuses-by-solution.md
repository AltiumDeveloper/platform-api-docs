---
title: "solBldScaffoldingStatusesBySolution"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/sol-bld-scaffolding-statuses-by-solution"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# solBldScaffoldingStatusesBySolution

Retrieves cached job statuses for a solution.

### Type

#### [`SolBldScaffoldingJobStatusPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-bld-scaffolding-job-status-payload.md) object

```graphql
solBldScaffoldingStatusesBySolution(
  solutionId: ID!
): [SolBldScaffoldingJobStatusPayload!]!
```

### Arguments

#### `solutionId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
