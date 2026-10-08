---
title: "DesWorkspaceInsUpdateInsightByIdPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-update-insight-by-id-payload"
bounded_context: "Insights"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceInsUpdateInsightByIdPayload

Payload produced after updating an insight by identifier.

### Returned By

[`desWorkspaceInsUpdateInsightById`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/operations/mutations/des-workspace-ins-update-insight-by-id.md) mutation

```graphql
type DesWorkspaceInsUpdateInsightByIdPayload {
  errors: [DesWorkspaceInsInsightErrorPayload!]!
  insight: DesWorkspaceInsInsight
}
```

### Fields

#### `errors` · [`[DesWorkspaceInsInsightErrorPayload!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-error-payload.md) non-null object

Errors that occurred while performing the operation.

#### `insight` · [`DesWorkspaceInsInsight`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight.md) object

Insight updated with the provided changes.
