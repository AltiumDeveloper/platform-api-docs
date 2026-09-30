---
title: "DesTerminateWorkflowsInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-terminate-workflows-input"
bounded_context: "Customization"
kind: "inputs"
experimental: false
deprecated: false
---

# DesTerminateWorkflowsInput

Input for terminating workflows.

### Member Of

[`desTerminateWorkflows`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/mutations/des-terminate-workflows.md) mutation

```graphql
input DesTerminateWorkflowsInput {
  workflowIds: [String!]!
  workspaceUrl: String
}
```

### Fields

#### `DesTerminateWorkflowsInput.workflowIds` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Workflow identifiers.

#### `DesTerminateWorkflowsInput.workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Workspace URL.
