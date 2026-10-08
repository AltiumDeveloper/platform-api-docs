---
title: "DesWorkspaceInsInsightTaskLinkGql"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-task-link-gql"
bounded_context: "Insights"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceInsInsightTaskLinkGql

Link to a task associated with the insight.

### Member Of

[`DesWorkspaceInsRelatedTasks`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-related-tasks.md) object

```graphql
type DesWorkspaceInsInsightTaskLinkGql {
  created: DesWorkspaceInsUserActionTimestamp!
  id: ID!
}
```

### Fields

#### `created` · [`DesWorkspaceInsUserActionTimestamp!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-user-action-timestamp.md) non-null object

Information about when and by whom the link was created.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Identifier of the related resource.
