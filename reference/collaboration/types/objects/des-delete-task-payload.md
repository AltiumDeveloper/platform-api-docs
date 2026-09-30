---
title: "DesDeleteTaskPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-delete-task-payload"
bounded_context: "Collaboration"
kind: "objects"
experimental: false
deprecated: false
---

# DesDeleteTaskPayload

Payload associated with deleting a task.

### Returned By

[`desDeleteTask`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/mutations/des-delete-task.md) mutation

```graphql
type DesDeleteTaskPayload {
  errors: [DesPayloadError!]!
}
```

### Fields

#### `DesDeleteTaskPayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.
