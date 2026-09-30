---
title: "desDeleteTask"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/mutations/des-delete-task"
bounded_context: "Collaboration"
kind: "mutations"
experimental: false
deprecated: false
---

# desDeleteTask

Deletes the task specified by its node identifier.

```graphql
desDeleteTask(
  input: DesDeleteTaskInput!
): DesDeleteTaskPayload!
```

### Arguments

#### `desDeleteTask.input` · [`DesDeleteTaskInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/inputs/des-delete-task-input.md) non-null input collaboration

### Type

#### [`DesDeleteTaskPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-delete-task-payload.md) object collaboration

Payload associated with deleting a task.
