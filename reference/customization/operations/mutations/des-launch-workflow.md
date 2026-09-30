---
title: "desLaunchWorkflow"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/mutations/des-launch-workflow"
bounded_context: "Customization"
kind: "mutations"
experimental: false
deprecated: false
---

# desLaunchWorkflow

Launches a workflow. Workflows allow you to automate design processes, and are created in Altium 365.

```graphql
desLaunchWorkflow(
  input: DesLaunchWorkflowInput!
): DesLaunchWorkflowPayload!
```

### Arguments

#### `desLaunchWorkflow.input` · [`DesLaunchWorkflowInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-launch-workflow-input.md) non-null input customization

### Type

#### [`DesLaunchWorkflowPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/des-launch-workflow-payload.md) object customization

Payload associated with launching a workflow.
