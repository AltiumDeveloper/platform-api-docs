---
title: "DesWorkflowAttachmentVariableInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-workflow-attachment-variable-input"
bounded_context: "Customization"
kind: "inputs"
experimental: false
deprecated: false
---

# DesWorkflowAttachmentVariableInput

An attachment-valued variable associated with a workflow.

### Member Of

[`DesLaunchWorkflowInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-launch-workflow-input.md) input

```graphql
input DesWorkflowAttachmentVariableInput {
  files: [String!]!
  name: String!
}
```

### Fields

#### `DesWorkflowAttachmentVariableInput.files` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Uploaded file references.

#### `DesWorkflowAttachmentVariableInput.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The variable name.
