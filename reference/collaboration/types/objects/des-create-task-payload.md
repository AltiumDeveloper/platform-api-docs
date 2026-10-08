---
title: "DesCreateTaskPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-create-task-payload"
bounded_context: "Collaboration"
kind: "objects"
experimental: false
deprecated: false
---

# DesCreateTaskPayload

Payload associated with creating a task.

### Returned By

[`desCreateProjectTask`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/mutations/des-create-project-task.md) mutation · [`desCreateWorkspaceTask`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/mutations/des-create-workspace-task.md) mutation

```graphql
type DesCreateTaskPayload {
  errors: [DesPayloadError!]!
  task: DesTask!
}
```

### Fields

#### `errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object

Payload errors.

#### `task` · [`DesTask!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-task.md) non-null object

The created task.
