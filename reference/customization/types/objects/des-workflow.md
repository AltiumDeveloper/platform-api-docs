---
title: "DesWorkflow"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/des-workflow"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkflow

A workflow manages the execution of a logical sequence of tasks.

### Member Of

[`DesProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project.md) object · [`DesWorkspace`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace.md) object

```graphql
type DesWorkflow {
  assignee: String!
  createdAt: DateTime!
  createdBy: String!
  endedAt: DateTime
  modifiedAt: DateTime!
  name: String!
  processDefinitionId: String!
  processDefinitionName: String!
  state: String
  status: String!
  variables(
    names: [String!]
  ): [DesWorkflowVariable!]!
  workflowId: String!
  workflowType: String!
}
```

### Fields

#### `DesWorkflow.assignee` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The account information for the owner of any action or response needed for this workflow.

#### `DesWorkflow.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The `DateTime` for the creation of this workflow.

#### `DesWorkflow.createdBy` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The account information for who created this workflow.

#### `DesWorkflow.endedAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar common

The `DateTime` for the completion of this workflow.

#### `DesWorkflow.modifiedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The `DateTime` for the most recent changes for this workflow.

#### `DesWorkflow.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The label for this workflow.

#### `DesWorkflow.processDefinitionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The reference identifier for definition of this workflow.

#### `DesWorkflow.processDefinitionName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The label for the definition of this workflow.

#### `DesWorkflow.state` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The name of the active task(s) for this workflow.

#### `DesWorkflow.status` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The current condition of this workflow.

#### `DesWorkflow.variables` · [`[DesWorkflowVariable!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/des-workflow-variable.md) non-null object customization

The list of variables defined for this workflow.

##### `DesWorkflow.variables.names` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

An optional list of parameter names to search.

#### `DesWorkflow.workflowId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The reference identifier for this workflow.

#### `DesWorkflow.workflowType` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The type of this workflow.
