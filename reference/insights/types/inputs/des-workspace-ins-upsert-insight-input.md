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

#### `data` · [`JSON!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/json.md) non-null scalar

Full data payload for the insight.

#### `relatedEntityIds` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Entities that should be linked to this insight.

#### `severity` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The severity level of the insight.

#### `shortData` · [`JSON!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/json.md) non-null scalar

Short, UI-friendly payload representing the insight.

#### `status` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Status value to assign to the insight.

#### `type` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The type identifier of the insight.
