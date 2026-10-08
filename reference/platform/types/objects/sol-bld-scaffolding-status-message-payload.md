---
title: "SolBldScaffoldingStatusMessagePayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-bld-scaffolding-status-message-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# SolBldScaffoldingStatusMessagePayload

### Member Of

[`SolBldScaffoldingJobStatusPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-bld-scaffolding-job-status-payload.md) object · [`SolBldScaffoldingStatusPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-bld-scaffolding-status-payload.md) object

```graphql
type SolBldScaffoldingStatusMessagePayload {
  messageCode: String!
  parameters: [SolBldScaffoldingStatusMessageParameterPayload!]!
}
```

### Fields

#### `messageCode` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `parameters` · [`[SolBldScaffoldingStatusMessageParameterPayload!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-bld-scaffolding-status-message-parameter-payload.md) non-null object
