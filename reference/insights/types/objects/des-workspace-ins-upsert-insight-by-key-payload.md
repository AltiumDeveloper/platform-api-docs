---
title: "DesWorkspaceInsUpsertInsightByKeyPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-upsert-insight-by-key-payload"
bounded_context: "Insights"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceInsUpsertInsightByKeyPayload

Payload produced when upserting an insight using a deduplication key.

### Returned By

[`desWorkspaceInsUpsertInsightByKey`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/operations/mutations/des-workspace-ins-upsert-insight-by-key.md) mutation

```graphql
type DesWorkspaceInsUpsertInsightByKeyPayload {
  errors: [DesWorkspaceInsInsightErrorPayload!]!
  insight: DesWorkspaceInsInsight
}
```

### Fields

#### `errors` · [`[DesWorkspaceInsInsightErrorPayload!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-error-payload.md) non-null object

Errors that occurred while performing the operation.

#### `insight` · [`DesWorkspaceInsInsight`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight.md) object

Insight resulting from the upsert operation.
