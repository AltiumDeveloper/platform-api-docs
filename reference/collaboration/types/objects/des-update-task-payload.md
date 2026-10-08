---
title: "DesUpdateTaskPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-update-task-payload"
bounded_context: "Collaboration"
kind: "objects"
experimental: false
deprecated: false
---

# DesUpdateTaskPayload

Payload associated with updating a task.

### Returned By

[`desUpdateTask`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/mutations/des-update-task.md) mutation

```graphql
type DesUpdateTaskPayload {
  errors: [DesPayloadError!]!
}
```

### Fields

#### `errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object

Payload errors.
