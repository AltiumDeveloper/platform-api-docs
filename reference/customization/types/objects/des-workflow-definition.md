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

- [Workflow](https://w3id.org/altium/cdm/customization/Workflow) — A process workflow of an Altium 365 Workspace: the workflow that belongs to a process definition and steps designers through an everyday design process (e.g. requesting a new part, a design review or creating a new project). Workspace administrators build process definitions in the Process Workflow Editor, grouped by process theme (Part Requests, Project Activities, Project Creations), and activate them; each started instance of a process follows the workflow and creates tasks for the users whose action is needed to move it on.

  - IRI: [`https://w3id.org/altium/cdm/customization/Workflow`](https://w3id.org/altium/cdm/customization/Workflow)
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

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) for the creation of this workflow definition.

#### `createdBy` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The account information for who created this workflow definition.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The label for this workflow definition.

#### `variables` · [`[DesWorkflowVariable!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/des-workflow-variable.md) non-null object

The list of variables need to launch this workflow definition.

#### `workflowDefinitionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The reference identifier for this workflow definition.

#### `workflowType` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The type of this workflow definition.
