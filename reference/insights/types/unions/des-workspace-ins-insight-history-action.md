---
title: "DesWorkspaceInsInsightHistoryAction"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/unions/des-workspace-ins-insight-history-action"
bounded_context: "Insights"
kind: "unions"
experimental: false
deprecated: false
---

# DesWorkspaceInsInsightHistoryAction

Union marker for actions recorded in an insight's history.

### Member Of

[`DesWorkspaceInsInsightHistoryTransaction`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-history-transaction.md) object

```graphql
union DesWorkspaceInsInsightHistoryAction = DesWorkspaceInsInsightSeverityChangedAction | DesWorkspaceInsInsightEntityLinksChangedAction | DesWorkspaceInsInsightStatusChangedAction | DesWorkspaceInsInsightTaskLinksChangedAction | DesWorkspaceInsInsightDataChangedAction
```

### Possible types

#### [`DesWorkspaceInsInsightSeverityChangedAction`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-severity-changed-action.md) object

History entry representing a severity change on an insight.

#### [`DesWorkspaceInsInsightEntityLinksChangedAction`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-entity-links-changed-action.md) object

History entry capturing changes to linked entities.

#### [`DesWorkspaceInsInsightStatusChangedAction`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-status-changed-action.md) object

History entry representing a status change on an insight.

#### [`DesWorkspaceInsInsightTaskLinksChangedAction`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-task-links-changed-action.md) object

History entry capturing changes to linked tasks.

#### [`DesWorkspaceInsInsightDataChangedAction`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-data-changed-action.md) object

History entry capturing changes to an insight's data payloads.
