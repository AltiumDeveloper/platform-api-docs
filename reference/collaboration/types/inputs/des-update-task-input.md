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

#### `DesUpdateTaskInput.assigneeId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The identifier of the user to assign this task to. If omitted or set to `null`, the assignee will not be updated.

#### `DesUpdateTaskInput.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

New task description or null to keep old.

#### `DesUpdateTaskInput.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

New task name or null to keep old.

#### `DesUpdateTaskInput.priority` · [`DesTaskPriority`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/enums/des-task-priority.md) enum collaboration

New task priority or null to keep old.

#### `DesUpdateTaskInput.status` · [`DesTaskStatus`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/enums/des-task-status.md) enum collaboration

New task status or null to keep old.

#### `DesUpdateTaskInput.taskId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The task node identifier.
