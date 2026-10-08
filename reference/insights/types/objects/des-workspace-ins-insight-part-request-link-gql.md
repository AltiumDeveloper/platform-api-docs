---
title: "DesWorkspaceInsInsightPartRequestLinkGql"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-part-request-link-gql"
bounded_context: "Insights"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceInsInsightPartRequestLinkGql

Link to a part request task associated with the insight.

### Member Of

[`DesWorkspaceInsRelatedTasks`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-related-tasks.md) object

```graphql
type DesWorkspaceInsInsightPartRequestLinkGql {
  created: DesWorkspaceInsUserActionTimestamp!
  id: ID!
}
```

### Fields

#### `created` · [`DesWorkspaceInsUserActionTimestamp!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-user-action-timestamp.md) non-null object

Information about when and by whom the link was created.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Identifier of the related resource.
