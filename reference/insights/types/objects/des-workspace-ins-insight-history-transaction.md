---
title: "DesWorkspaceInsInsightHistoryTransaction"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-history-transaction"
bounded_context: "Insights"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceInsInsightHistoryTransaction

A point-in-time collection of actions recorded for an insight.

### Member Of

[`DesWorkspaceInsInsight`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight.md) object

```graphql
type DesWorkspaceInsInsightHistoryTransaction {
  actions: [DesWorkspaceInsInsightHistoryAction!]!
  created: DesWorkspaceInsUserActionTimestamp!
}
```

### Fields

#### `DesWorkspaceInsInsightHistoryTransaction.actions` · [`[DesWorkspaceInsInsightHistoryAction!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/unions/des-workspace-ins-insight-history-action.md) non-null union insights

Actions that happened together within this transaction.

#### `DesWorkspaceInsInsightHistoryTransaction.created` · [`DesWorkspaceInsUserActionTimestamp!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-user-action-timestamp.md) non-null object insights

Timestamp and user who produced the actions.
