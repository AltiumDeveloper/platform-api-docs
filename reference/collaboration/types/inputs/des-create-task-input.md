---
title: "DesCreateTaskInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/inputs/des-create-task-input"
bounded_context: "Collaboration"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCreateTaskInput

Input for task creation.

### Member Of

[`DesCreateProjectTaskInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/inputs/des-create-project-task-input.md) input · [`DesCreateWorkspaceTaskInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/inputs/des-create-workspace-task-input.md) input

```graphql
input DesCreateTaskInput {
  description: String!
  name: String!
  priority: DesTaskPriority
  status: DesTaskStatus
}
```

### Fields

#### `DesCreateTaskInput.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

New task description.

#### `DesCreateTaskInput.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

New task name.

#### `DesCreateTaskInput.priority` · [`DesTaskPriority`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/enums/des-task-priority.md) enum collaboration

Optional task priority.

#### `DesCreateTaskInput.status` · [`DesTaskStatus`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/enums/des-task-status.md) enum collaboration

Optional task status.
