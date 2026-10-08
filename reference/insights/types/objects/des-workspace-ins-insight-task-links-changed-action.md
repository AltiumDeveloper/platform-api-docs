---
title: "DesWorkspaceInsInsightTaskLinksChangedAction"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-task-links-changed-action"
bounded_context: "Insights"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceInsInsightTaskLinksChangedAction

History entry capturing changes to linked tasks.

### Implemented By

[`DesWorkspaceInsInsightHistoryAction`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/unions/des-workspace-ins-insight-history-action.md) union

```graphql
type DesWorkspaceInsInsightTaskLinksChangedAction {
  newTasks: [ID!]!
}
```

### Fields

#### `newTasks` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Tasks that were added to the insight.
