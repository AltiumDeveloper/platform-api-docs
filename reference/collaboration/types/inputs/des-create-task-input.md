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

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

New task description.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

New task name.

#### `priority` · [`DesTaskPriority`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/enums/des-task-priority.md) enum

Optional task priority.

#### `status` · [`DesTaskStatus`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/enums/des-task-status.md) enum

Optional task status.
