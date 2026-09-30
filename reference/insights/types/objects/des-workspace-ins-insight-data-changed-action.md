---
title: "DesWorkspaceInsInsightDataChangedAction"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-data-changed-action"
bounded_context: "Insights"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceInsInsightDataChangedAction

History entry capturing changes to an insight's data payloads.

### Implemented By

[`DesWorkspaceInsInsightHistoryAction`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/unions/des-workspace-ins-insight-history-action.md) union

```graphql
type DesWorkspaceInsInsightDataChangedAction {
  newData: JSON!
  newShortData: JSON!
  oldData: JSON
  oldShortData: JSON
}
```

### Fields

#### `DesWorkspaceInsInsightDataChangedAction.newData` · [`JSON!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/json.md) non-null scalar common

Updated full data payload for the insight.

#### `DesWorkspaceInsInsightDataChangedAction.newShortData` · [`JSON!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/json.md) non-null scalar common

Updated summary data payload for the insight.

#### `DesWorkspaceInsInsightDataChangedAction.oldData` · [`JSON`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/json.md) scalar common

Previous full data payload, if available.

#### `DesWorkspaceInsInsightDataChangedAction.oldShortData` · [`JSON`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/json.md) scalar common

Previous summary data payload, if available.
