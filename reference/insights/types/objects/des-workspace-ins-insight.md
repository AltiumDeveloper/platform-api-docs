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

- [Part Insight](https://w3id.org/altium/cdm/insights/PartInsight)

  - IRI: [`https://w3id.org/altium/cdm/insights/PartInsight`](https://w3id.org/altium/cdm/insights/PartInsight)
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

#### `created` · [`DesWorkspaceInsUserActionTimestamp!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-user-action-timestamp.md) non-null object

Creation timestamp and user information.

#### `data` · [`JSON!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/json.md) non-null scalar

Full data payload for the insight.

#### `history` · [`[DesWorkspaceInsInsightHistoryTransaction!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-history-transaction.md) non-null object

History of changes applied to the insight.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Unique identifier of the insight resource.

#### `isAck` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Indicates whether the insight has been acknowledged.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Human-readable name of the insight.

#### `relatedEntities` · [`DesWorkspaceInsRelatedEntities!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-related-entities.md) non-null object

Resources related to this insight (projects, BOMs, parts, etc.).

#### `relatedTasks` · [`DesWorkspaceInsRelatedTasks!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-related-tasks.md) non-null object

Tasks and requests associated with this insight.

#### `severity` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Severity level assigned to the insight.

#### `shortData` · [`JSON!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/json.md) non-null scalar

Compact, UI-friendly representation of the insight data.

#### `status` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Current status of the insight lifecycle.

#### `type` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Type key that categorizes the insight.

#### `updated` · [`DesWorkspaceInsUserActionTimestamp!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-user-action-timestamp.md) non-null object

Most recent update timestamp and user information.
