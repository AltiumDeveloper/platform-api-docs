---
title: "DesLaunchWorkflowInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-launch-workflow-input"
bounded_context: "Customization"
kind: "inputs"
experimental: false
deprecated: false
---

# DesLaunchWorkflowInput

Input for launching a workflow.

### Member Of

[`desLaunchWorkflow`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/mutations/des-launch-workflow.md) mutation

```graphql
input DesLaunchWorkflowInput {
  attachments: [DesWorkflowAttachmentVariableInput!]
  name: String
  variables: [DesWorkflowVariableInput!]!
  workflowDefinitionId: String!
  workspaceUrl: String
}
```

### Fields

#### `attachments` · [`[DesWorkflowAttachmentVariableInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-workflow-attachment-variable-input.md) list input

The attachment variables.

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Name of workflow definition.

#### `variables` · [`[DesWorkflowVariableInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-workflow-variable-input.md) non-null input

The string variables.

#### `workflowDefinitionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Identifier for workflow definition.

#### `workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

URL of workspace.
