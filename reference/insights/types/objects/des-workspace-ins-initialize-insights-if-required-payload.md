---
title: "DesWorkspaceInsInitializeInsightsIfRequiredPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-initialize-insights-if-required-payload"
bounded_context: "Insights"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceInsInitializeInsightsIfRequiredPayload

Payload returned when initializing insights on first use.

### Returned By

[`desWorkspaceInsInitializeInsightsIfRequired`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/operations/mutations/des-workspace-ins-initialize-insights-if-required.md) mutation

```graphql
type DesWorkspaceInsInitializeInsightsIfRequiredPayload {
  errors: [DesWorkspaceInsInsightErrorPayload!]!
  isSuccess: Boolean! @deprecated
  status: String!
}
```

### Fields

#### `errors` · [`[DesWorkspaceInsInsightErrorPayload!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-error-payload.md) non-null object

Errors that occurred while performing the operation.

#### `status` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Initialization result: Completed, Deferred (first-time initialization postponed by the rate limit; a later request retries it) or Failed (see errors).

#### Deprecated

#### `isSuccess` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) **DEPRECATED** non-null scalar

> **Deprecated:** Use status. Kept for frontend compatibility.

Indicates whether the initialization finished successfully.
