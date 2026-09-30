---
title: "DesWorkspaceInsInsightEntityLinksChangedAction"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-entity-links-changed-action"
bounded_context: "Insights"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceInsInsightEntityLinksChangedAction

History entry capturing changes to linked entities.

### Implemented By

[`DesWorkspaceInsInsightHistoryAction`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/unions/des-workspace-ins-insight-history-action.md) union

```graphql
type DesWorkspaceInsInsightEntityLinksChangedAction {
  newEntities: [ID!]!
  removedEntities: [ID!]!
}
```

### Fields

#### `DesWorkspaceInsInsightEntityLinksChangedAction.newEntities` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Entities that were added to the insight.

#### `DesWorkspaceInsInsightEntityLinksChangedAction.removedEntities` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Entities that were removed from the insight.
