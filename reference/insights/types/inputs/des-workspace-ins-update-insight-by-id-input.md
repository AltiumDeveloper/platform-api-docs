---
title: "DesWorkspaceInsUpdateInsightByIdInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/inputs/des-workspace-ins-update-insight-by-id-input"
bounded_context: "Insights"
kind: "inputs"
experimental: false
deprecated: false
---

# DesWorkspaceInsUpdateInsightByIdInput

Input for updating an existing insight by its identifier.

### Member Of

[`desWorkspaceInsUpdateInsightById`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/operations/mutations/des-workspace-ins-update-insight-by-id.md) mutation

```graphql
input DesWorkspaceInsUpdateInsightByIdInput {
  id: ID!
  userAction: DesWorkspaceInsInsightUserActionInput!
}
```

### Fields

#### `DesWorkspaceInsUpdateInsightByIdInput.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Identifier of the insight to be updated.

#### `DesWorkspaceInsUpdateInsightByIdInput.userAction` · [`DesWorkspaceInsInsightUserActionInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/inputs/des-workspace-ins-insight-user-action-input.md) non-null input insights

User action describing how the insight should change.
