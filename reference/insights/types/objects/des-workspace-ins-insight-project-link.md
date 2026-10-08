---
title: "DesWorkspaceInsInsightProjectLink"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-project-link"
bounded_context: "Insights"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceInsInsightProjectLink

Link to a project associated with the insight.

### Member Of

[`DesWorkspaceInsRelatedEntities`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-related-entities.md) object

```graphql
type DesWorkspaceInsInsightProjectLink {
  created: DesWorkspaceInsUserActionTimestamp!
  id: ID!
}
```

### Fields

#### `created` · [`DesWorkspaceInsUserActionTimestamp!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-user-action-timestamp.md) non-null object

Information about when and by whom the link was created.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Identifier of the related resource.
