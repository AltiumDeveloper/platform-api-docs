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

#### `constraint` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Workflow variable constraint. If it is "required", then the variable needs to be provided when launching a workflow with [`desLaunchWorkflow`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/mutations/des-launch-workflow.md).

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Parameter name.

#### `value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Parameter value.

#### `valueType` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Type of variable.
