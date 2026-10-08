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

#### `newData` · [`JSON!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/json.md) non-null scalar

Updated full data payload for the insight.

#### `newShortData` · [`JSON!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/json.md) non-null scalar

Updated summary data payload for the insight.

#### `oldData` · [`JSON`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/json.md) scalar

Previous full data payload, if available.

#### `oldShortData` · [`JSON`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/json.md) scalar

Previous summary data payload, if available.
