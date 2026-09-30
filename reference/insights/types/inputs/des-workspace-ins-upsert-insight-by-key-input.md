---
title: "DesWorkspaceInsUpsertInsightByKeyInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/inputs/des-workspace-ins-upsert-insight-by-key-input"
bounded_context: "Insights"
kind: "inputs"
experimental: false
deprecated: false
---

# DesWorkspaceInsUpsertInsightByKeyInput

Input for creating or updating an insight identified by a deduplication key.

### Member Of

[`desWorkspaceInsUpsertInsightByKey`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/operations/mutations/des-workspace-ins-upsert-insight-by-key.md) mutation

```graphql
input DesWorkspaceInsUpsertInsightByKeyInput {
  insight: DesWorkspaceInsUpsertInsightInput!
  insightDedupKey: String!
}
```

### Fields

#### `DesWorkspaceInsUpsertInsightByKeyInput.insight` · [`DesWorkspaceInsUpsertInsightInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/inputs/des-workspace-ins-upsert-insight-input.md) non-null input insights

Insight details to create or update.

#### `DesWorkspaceInsUpsertInsightByKeyInput.insightDedupKey` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Key used to find an existing insight or create a new one.
