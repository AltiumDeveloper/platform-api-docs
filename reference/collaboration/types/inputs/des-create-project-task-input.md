---
title: "DesCreateProjectTaskInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/inputs/des-create-project-task-input"
bounded_context: "Collaboration"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCreateProjectTaskInput

Input for project task creation.

### Member Of

[`desCreateProjectTask`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/mutations/des-create-project-task.md) mutation

```graphql
input DesCreateProjectTaskInput {
  projectId: ID!
  task: DesCreateTaskInput!
}
```

### Fields

#### `projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Project identifier.

#### `task` · [`DesCreateTaskInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/inputs/des-create-task-input.md) non-null input

The new task data.
