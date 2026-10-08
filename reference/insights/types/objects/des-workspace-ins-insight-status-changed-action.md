---
title: "DesWorkspaceInsInsightStatusChangedAction"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-status-changed-action"
bounded_context: "Insights"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceInsInsightStatusChangedAction

History entry representing a status change on an insight.

### Implemented By

[`DesWorkspaceInsInsightHistoryAction`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/unions/des-workspace-ins-insight-history-action.md) union

```graphql
type DesWorkspaceInsInsightStatusChangedAction {
  newStatus: String!
  oldStatus: String
}
```

### Fields

#### `newStatus` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Status value after the change.

#### `oldStatus` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Status value before the change, if any.
