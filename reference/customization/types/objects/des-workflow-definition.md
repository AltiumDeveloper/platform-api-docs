---
title: "DesWorkflowDefinition"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/des-workflow-definition"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkflowDefinition

A workflow definition contains a logical sequence of tasks.

### Common Data Model

- [Workflow](https://altiumdeveloper.github.io/cdm/classes/cus_Workflow/)
  - GRID: `grid:workspace:{workspace-id}:customization:workflow/{id}`

### Member Of

[`DesWorkspace`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace.md) object

```graphql
type DesWorkflowDefinition {
  createdAt: DateTime!
  createdBy: String!
  name: String!
  variables: [DesWorkflowVariable!]!
  workflowDefinitionId: String!
  workflowType: String!
}
```

### Fields

#### `DesWorkflowDefinition.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The `DateTime` for the creation of this workflow definition.

#### `DesWorkflowDefinition.createdBy` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The account information for who created this workflow definition.

#### `DesWorkflowDefinition.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The label for this workflow definition.

#### `DesWorkflowDefinition.variables` · [`[DesWorkflowVariable!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/des-workflow-variable.md) non-null object customization

The list of variables need to launch this workflow definition.

#### `DesWorkflowDefinition.workflowDefinitionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The reference identifier for this workflow definition.

#### `DesWorkflowDefinition.workflowType` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The type of this workflow definition.
