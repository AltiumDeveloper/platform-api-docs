---
title: "DesDeleteTaskInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/inputs/des-delete-task-input"
bounded_context: "Collaboration"
kind: "inputs"
experimental: false
deprecated: false
---

# DesDeleteTaskInput

Input for deleting a task.

### Member Of

[`desDeleteTask`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/mutations/des-delete-task.md) mutation

```graphql
input DesDeleteTaskInput {
  taskId: ID!
}
```

### Fields

#### `DesDeleteTaskInput.taskId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The task node identifier.
