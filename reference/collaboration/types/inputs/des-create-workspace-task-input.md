---
title: "DesCreateWorkspaceTaskInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/inputs/des-create-workspace-task-input"
bounded_context: "Collaboration"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCreateWorkspaceTaskInput

Input for workspace task creation.

### Member Of

[`desCreateWorkspaceTask`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/mutations/des-create-workspace-task.md) mutation

```graphql
input DesCreateWorkspaceTaskInput {
  task: DesCreateTaskInput!
  workspaceUrl: String
}
```

### Fields

#### `DesCreateWorkspaceTaskInput.task` · [`DesCreateTaskInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/inputs/des-create-task-input.md) non-null input collaboration

The new task data.

#### `DesCreateWorkspaceTaskInput.workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The workspace URL.
