---
title: "DesUpdateTaskInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/inputs/des-update-task-input"
bounded_context: "Collaboration"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUpdateTaskInput

Input for updating a task.

### Member Of

[`desUpdateTask`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/mutations/des-update-task.md) mutation

```graphql
input DesUpdateTaskInput {
  assigneeId: String
  description: String
  name: String
  priority: DesTaskPriority
  status: DesTaskStatus
  taskId: ID!
}
```

### Fields

#### `assigneeId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The identifier of the user to assign this task to. If omitted or set to `null`, the assignee will not be updated.

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

New task description or null to keep old.

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

New task name or null to keep old.

#### `priority` · [`DesTaskPriority`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/enums/des-task-priority.md) enum

New task priority or null to keep old.

#### `status` · [`DesTaskStatus`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/enums/des-task-status.md) enum

New task status or null to keep old.

#### `taskId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The task node identifier.
