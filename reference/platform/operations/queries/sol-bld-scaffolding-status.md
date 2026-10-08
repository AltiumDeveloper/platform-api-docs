---
title: "solBldScaffoldingStatus"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/sol-bld-scaffolding-status"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# solBldScaffoldingStatus

Retrieves a job status.

### Type

#### [`SolBldScaffoldingStatusPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-bld-scaffolding-status-payload.md) object

```graphql
solBldScaffoldingStatus(
  jobId: ID!
): SolBldScaffoldingStatusPayload!
```

### Arguments

#### `jobId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
