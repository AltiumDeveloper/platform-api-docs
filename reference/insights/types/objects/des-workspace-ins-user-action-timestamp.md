---
title: "DesWorkspaceInsUserActionTimestamp"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-user-action-timestamp"
bounded_context: "Insights"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceInsUserActionTimestamp

Timestamp information including the user responsible for an action.

### Member Of

[`DesWorkspaceInsInsight`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight.md) object · [`DesWorkspaceInsInsightAssemblyVariantLink`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-assembly-variant-link.md) object · [`DesWorkspaceInsInsightBomLink`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-bom-link.md) object · [`DesWorkspaceInsInsightBomReleaseLink`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-bom-release-link.md) object · [`DesWorkspaceInsInsightComponentLink`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-component-link.md) object · [`DesWorkspaceInsInsightComponentRevisionLink`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-component-revision-link.md) object · [`DesWorkspaceInsInsightConsolidatedBomLink`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-consolidated-bom-link.md) object · [`DesWorkspaceInsInsightConsolidatedBomReleaseLink`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-consolidated-bom-release-link.md) object · [`DesWorkspaceInsInsightHistoryTransaction`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-history-transaction.md) object · [`DesWorkspaceInsInsightPartLink`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-part-link.md) object · [`DesWorkspaceInsInsightPartRequestLinkGql`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-part-request-link-gql.md) object · [`DesWorkspaceInsInsightProjectLink`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-project-link.md) object · [`DesWorkspaceInsInsightTaskLinkGql`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-task-link-gql.md) object

```graphql
type DesWorkspaceInsUserActionTimestamp {
  timestamp: DateTime!
  userId: ID!
}
```

### Fields

#### `DesWorkspaceInsUserActionTimestamp.timestamp` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

When the action occurred.

#### `DesWorkspaceInsUserActionTimestamp.userId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Identifier of the user who performed the action.
