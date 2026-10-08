---
title: "desCreateWorkspaceTask"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/mutations/des-create-workspace-task"
bounded_context: "Collaboration"
kind: "mutations"
experimental: false
deprecated: false
---

# desCreateWorkspaceTask

Creates a workspace task. A task is a job activity in Altium 365.

### Type

#### [`DesCreateTaskPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-create-task-payload.md) object

Payload associated with creating a task.

```graphql
desCreateWorkspaceTask(
  input: DesCreateWorkspaceTaskInput!
): DesCreateTaskPayload!
```

### Arguments

#### `input` · [`DesCreateWorkspaceTaskInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/inputs/des-create-workspace-task-input.md) non-null input
