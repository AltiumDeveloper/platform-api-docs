---
title: "DesLaunchWorkflowPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/des-launch-workflow-payload"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# DesLaunchWorkflowPayload

Payload associated with launching a workflow.

### Returned By

[`desLaunchWorkflow`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/mutations/des-launch-workflow.md) mutation

```graphql
type DesLaunchWorkflowPayload {
  id: String!
  status: Int!
}
```

### Fields

#### `id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Workflow identifier.

#### `status` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Status of the launched workflow.
