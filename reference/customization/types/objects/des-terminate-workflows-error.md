---
title: "DesTerminateWorkflowsError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/des-terminate-workflows-error"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# DesTerminateWorkflowsError

Error associated with terminating workflows.

### Member Of

[`DesTerminateWorkflowsPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/des-terminate-workflows-payload.md) object

```graphql
type DesTerminateWorkflowsError {
  id: String!
  message: String!
}
```

### Fields

#### `DesTerminateWorkflowsError.id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Workflow identifier.

#### `DesTerminateWorkflowsError.message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Workflow error message.
