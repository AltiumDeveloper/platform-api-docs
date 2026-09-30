---
title: "DesTerminateWorkflowsPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/des-terminate-workflows-payload"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# DesTerminateWorkflowsPayload

Payload associated with terminating a workflow.

### Returned By

[`desTerminateWorkflows`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/mutations/des-terminate-workflows.md) mutation

```graphql
type DesTerminateWorkflowsPayload {
  errors: [DesTerminateWorkflowsError!]!
}
```

### Fields

#### `DesTerminateWorkflowsPayload.errors` · [`[DesTerminateWorkflowsError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/des-terminate-workflows-error.md) non-null object customization

Errors associated with terminating workflows.
