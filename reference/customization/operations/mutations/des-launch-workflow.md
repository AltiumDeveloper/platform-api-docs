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

### Type

#### [`DesLaunchWorkflowPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/des-launch-workflow-payload.md) object

Payload associated with launching a workflow.

```graphql
desLaunchWorkflow(
  input: DesLaunchWorkflowInput!
): DesLaunchWorkflowPayload!
```

### Arguments

#### `input` · [`DesLaunchWorkflowInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-launch-workflow-input.md) non-null input
