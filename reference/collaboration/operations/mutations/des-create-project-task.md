---
title: "desCreateProjectTask"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/mutations/des-create-project-task"
bounded_context: "Collaboration"
kind: "mutations"
experimental: false
deprecated: false
---

# desCreateProjectTask

Creates a project task. A task is a job activity in Altium 365.

```graphql
desCreateProjectTask(
  input: DesCreateProjectTaskInput!
): DesCreateTaskPayload!
```

### Arguments

#### `desCreateProjectTask.input` · [`DesCreateProjectTaskInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/inputs/des-create-project-task-input.md) non-null input collaboration

### Type

#### [`DesCreateTaskPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-create-task-payload.md) object collaboration

Payload associated with creating a task.
