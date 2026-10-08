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

#### `assignee` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The account information for the owner of any action or response needed for this workflow.

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) for the creation of this workflow.

#### `createdBy` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The account information for who created this workflow.

#### `endedAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) for the completion of this workflow.

#### `modifiedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) for the most recent changes for this workflow.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The label for this workflow.

#### `processDefinitionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The reference identifier for definition of this workflow.

#### `processDefinitionName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The label for the definition of this workflow.

#### `state` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The name of the active task(s) for this workflow.

#### `status` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The current condition of this workflow.

#### `variables` · [`[DesWorkflowVariable!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/des-workflow-variable.md) non-null object

The list of variables defined for this workflow.

##### `names` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

An optional list of parameter names to search.

#### `workflowId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The reference identifier for this workflow.

#### `workflowType` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The type of this workflow.
