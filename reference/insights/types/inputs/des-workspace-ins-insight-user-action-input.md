---
title: "DesWorkspaceInsInsightUserActionInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/inputs/des-workspace-ins-insight-user-action-input"
bounded_context: "Insights"
kind: "inputs"
experimental: false
deprecated: false
---

# DesWorkspaceInsInsightUserActionInput

User action parameters applied to an insight update.

### Member Of

[`DesWorkspaceInsUpdateInsightByIdInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/inputs/des-workspace-ins-update-insight-by-id-input.md) input

```graphql
input DesWorkspaceInsInsightUserActionInput {
  isAck: Boolean
  newTaskIds: [ID!]
  status: String
}
```

### Fields

#### `isAck` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Whether the insight is acknowledged by the user.

#### `newTaskIds` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) list scalar

Tasks created while handling the insight.

#### `status` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

New status to apply to the insight.
