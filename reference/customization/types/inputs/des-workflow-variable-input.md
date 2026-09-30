---
title: "DesWorkflowVariableInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-workflow-variable-input"
bounded_context: "Customization"
kind: "inputs"
experimental: false
deprecated: false
---

# DesWorkflowVariableInput

A variable belonging to the workflow.

### Member Of

[`DesLaunchWorkflowInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-launch-workflow-input.md) input

```graphql
input DesWorkflowVariableInput {
  constraint: String
  name: String!
  value: String!
  valueType: String
}
```

### Fields

#### `DesWorkflowVariableInput.constraint` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Workflow variable constraint. If it is "required", then the variable needs to be provided when launching a workflow with `desLaunchWorkflow`.

#### `DesWorkflowVariableInput.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Parameter name.

#### `DesWorkflowVariableInput.value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Parameter value.

#### `DesWorkflowVariableInput.valueType` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Type of variable.
