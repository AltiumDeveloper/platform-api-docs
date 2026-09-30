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

#### `DesWorkspaceInsUpdateInsightByIdPayload.errors` · [`[DesWorkspaceInsInsightErrorPayload!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-error-payload.md) non-null object insights

Errors that occurred while performing the operation.

#### `DesWorkspaceInsUpdateInsightByIdPayload.insight` · [`DesWorkspaceInsInsight`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight.md) object insights

Insight updated with the provided changes.
