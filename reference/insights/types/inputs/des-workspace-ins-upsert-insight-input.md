---
title: "DesWorkspaceInsUpsertInsightInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/inputs/des-workspace-ins-upsert-insight-input"
bounded_context: "Insights"
kind: "inputs"
experimental: false
deprecated: false
---

# DesWorkspaceInsUpsertInsightInput

Input payload for creating or updating an insight.

### Member Of

[`DesWorkspaceInsUpsertInsightByKeyInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/inputs/des-workspace-ins-upsert-insight-by-key-input.md) input

```graphql
input DesWorkspaceInsUpsertInsightInput {
  data: JSON!
  relatedEntityIds: [ID!]!
  severity: String!
  shortData: JSON!
  status: String
  type: String!
}
```

### Fields

#### `DesWorkspaceInsUpsertInsightInput.data` · [`JSON!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/json.md) non-null scalar common

Full data payload for the insight.

#### `DesWorkspaceInsUpsertInsightInput.relatedEntityIds` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Entities that should be linked to this insight.

#### `DesWorkspaceInsUpsertInsightInput.severity` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The severity level of the insight.

#### `DesWorkspaceInsUpsertInsightInput.shortData` · [`JSON!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/json.md) non-null scalar common

Short, UI-friendly payload representing the insight.

#### `DesWorkspaceInsUpsertInsightInput.status` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Status value to assign to the insight.

#### `DesWorkspaceInsUpsertInsightInput.type` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The type identifier of the insight.
