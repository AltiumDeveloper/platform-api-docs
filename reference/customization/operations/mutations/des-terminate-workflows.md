---
title: "desTerminateWorkflows"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/mutations/des-terminate-workflows"
bounded_context: "Customization"
kind: "mutations"
experimental: false
deprecated: false
---

# desTerminateWorkflows

Terminates a workflow. Workflows allow you to automate design processes, and are created in Altium 365.

```graphql
desTerminateWorkflows(
  input: DesTerminateWorkflowsInput!
): DesTerminateWorkflowsPayload!
```

### Arguments

#### `desTerminateWorkflows.input` · [`DesTerminateWorkflowsInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-terminate-workflows-input.md) non-null input customization

### Type

#### [`DesTerminateWorkflowsPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/des-terminate-workflows-payload.md) object customization

Payload associated with terminating a workflow.
