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
  isSuccess: Boolean!
}
```

### Fields

#### `errors` · [`[DesWorkspaceInsInsightErrorPayload!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-error-payload.md) non-null object

Errors that occurred while performing the operation.

#### `isSuccess` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Indicates whether the initialization finished successfully.
