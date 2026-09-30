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

#### `DesLaunchWorkflowInput.attachments` · [`[DesWorkflowAttachmentVariableInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-workflow-attachment-variable-input.md) list input customization

The attachment variables.

#### `DesLaunchWorkflowInput.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Name of workflow definition.

#### `DesLaunchWorkflowInput.variables` · [`[DesWorkflowVariableInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-workflow-variable-input.md) non-null input customization

The string variables.

#### `DesLaunchWorkflowInput.workflowDefinitionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Identifier for workflow definition.

#### `DesLaunchWorkflowInput.workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

URL of workspace.
