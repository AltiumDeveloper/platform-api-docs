---
title: "DesWorkspaceInsRelatedTasks"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-related-tasks"
bounded_context: "Insights"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceInsRelatedTasks

Tasks and task-like items related to an insight.

### Member Of

[`DesWorkspaceInsInsight`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight.md) object

```graphql
type DesWorkspaceInsRelatedTasks {
  partRequests: [DesWorkspaceInsInsightPartRequestLinkGql!]!
  tasks: [DesWorkspaceInsInsightTaskLinkGql!]!
}
```

### Fields

#### `partRequests` · [`[DesWorkspaceInsInsightPartRequestLinkGql!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-part-request-link-gql.md) non-null object

Part requests associated with the insight.

#### `tasks` · [`[DesWorkspaceInsInsightTaskLinkGql!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-task-link-gql.md) non-null object

Tasks linked to the insight.
