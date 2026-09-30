---
title: "DesWorkspaceInsInsight"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight"
bounded_context: "Insights"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceInsInsight

Insight aggregated from workspace signals and related resources.

### Common Data Model

- [Part Insight](https://altiumdeveloper.github.io/cdm/classes/ins_PartInsight/)
  - GRID: `grid:workspace:{workspace-id}:insights:insight/{id}`

### Returned By

[`desWorkspaceInsInsightById`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/operations/queries/des-workspace-ins-insight-by-id.md) query · [`desWorkspaceInsInsightByName`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/operations/queries/des-workspace-ins-insight-by-name.md) query

### Member Of

[`DesWorkspaceInsInsightsConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insights-connection.md) object · [`DesWorkspaceInsInsightsEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insights-edge.md) object · [`DesWorkspaceInsUpdateInsightByIdPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-update-insight-by-id-payload.md) object · [`DesWorkspaceInsUpsertInsightByKeyPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-upsert-insight-by-key-payload.md) object

```graphql
type DesWorkspaceInsInsight {
  created: DesWorkspaceInsUserActionTimestamp!
  data: JSON!
  history: [DesWorkspaceInsInsightHistoryTransaction!]!
  id: ID!
  isAck: Boolean!
  name: String!
  relatedEntities: DesWorkspaceInsRelatedEntities!
  relatedTasks: DesWorkspaceInsRelatedTasks!
  severity: String!
  shortData: JSON!
  status: String!
  type: String!
  updated: DesWorkspaceInsUserActionTimestamp!
}
```

### Fields

#### `DesWorkspaceInsInsight.created` · [`DesWorkspaceInsUserActionTimestamp!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-user-action-timestamp.md) non-null object insights

Creation timestamp and user information.

#### `DesWorkspaceInsInsight.data` · [`JSON!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/json.md) non-null scalar common

Full data payload for the insight.

#### `DesWorkspaceInsInsight.history` · [`[DesWorkspaceInsInsightHistoryTransaction!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-history-transaction.md) non-null object insights

History of changes applied to the insight.

#### `DesWorkspaceInsInsight.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Unique identifier of the insight resource.

#### `DesWorkspaceInsInsight.isAck` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Indicates whether the insight has been acknowledged.

#### `DesWorkspaceInsInsight.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Human-readable name of the insight.

#### `DesWorkspaceInsInsight.relatedEntities` · [`DesWorkspaceInsRelatedEntities!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-related-entities.md) non-null object insights

Resources related to this insight (projects, BOMs, parts, etc.).

#### `DesWorkspaceInsInsight.relatedTasks` · [`DesWorkspaceInsRelatedTasks!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-related-tasks.md) non-null object insights

Tasks and requests associated with this insight.

#### `DesWorkspaceInsInsight.severity` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Severity level assigned to the insight.

#### `DesWorkspaceInsInsight.shortData` · [`JSON!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/json.md) non-null scalar common

Compact, UI-friendly representation of the insight data.

#### `DesWorkspaceInsInsight.status` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Current status of the insight lifecycle.

#### `DesWorkspaceInsInsight.type` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Type key that categorizes the insight.

#### `DesWorkspaceInsInsight.updated` · [`DesWorkspaceInsUserActionTimestamp!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-user-action-timestamp.md) non-null object insights

Most recent update timestamp and user information.
