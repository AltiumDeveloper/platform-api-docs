---
title: "DesWorkspaceInsInsightSeverityChangedAction"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-severity-changed-action"
bounded_context: "Insights"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceInsInsightSeverityChangedAction

History entry representing a severity change on an insight.

### Implemented By

[`DesWorkspaceInsInsightHistoryAction`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/unions/des-workspace-ins-insight-history-action.md) union

```graphql
type DesWorkspaceInsInsightSeverityChangedAction {
  newSeverity: String!
  oldSeverity: String
}
```

### Fields

#### `DesWorkspaceInsInsightSeverityChangedAction.newSeverity` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Severity value after the change.

#### `DesWorkspaceInsInsightSeverityChangedAction.oldSeverity` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Severity value before the change, if any.
