---
title: "DesWorkflowVariable"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/des-workflow-variable"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkflowVariable

A variable belonging to the workflow.

### Member Of

[`DesWorkflow`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/des-workflow.md) object · [`DesWorkflowDefinition`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/des-workflow-definition.md) object

```graphql
type DesWorkflowVariable {
  constraint: String
  name: String!
  value: String!
  valueType: String
}
```

### Fields

#### `DesWorkflowVariable.constraint` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Workflow variable constraint. If it is "required", then the variable needs to be provided when launching a workflow with `desLaunchWorkflow`.

#### `DesWorkflowVariable.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Parameter name.

#### `DesWorkflowVariable.value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Parameter value.

#### `DesWorkflowVariable.valueType` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Type of variable.
