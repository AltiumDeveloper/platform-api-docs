---
title: "DesWorkspace"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspace

A workspace provides a flexible and secure method for managing design, manufacturing and supply content.

### Common Data Model

- [Workspace](https://w3id.org/altium/cdm/platform/Workspace) — The top-level entity that plays a role of a closed environment for other entities (members, projects, components, etc.).

  - IRI: [`https://w3id.org/altium/cdm/platform/Workspace`](https://w3id.org/altium/cdm/platform/Workspace)
  - GRID: `grid:global::platform:workspace/{id}`

### Returned By

[`desWorkspaceById`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-workspace-by-id.md) query · [`desWorkspaceByUrl`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-workspace-by-url.md) query

### Interfaces

#### [`Node`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/node.md) interface

The node interface is implemented by entities that have a global unique identifier.

```graphql
type DesWorkspace implements Node {
  authId: String!
  configuration: DesWorkspaceConfiguration!
  description: String
  id: ID!
  isDefault: Boolean!
  library(
    args: DesLibraryArgsInput
  ): DesLibrary!
  location: DesWorkspaceLocation!
  marketingBadge: String!
  name: String!
  projects(
    order: [DesProjectSortInput!]
    where: DesProjectFilterInput
  ): [DesProject!]!
  tasks: [DesTask!]!
  team: DesTeam!
  url: String!
  vendor: DesWorkspaceVendor!
  workflowDefinitions(
    where: DesWorkflowDefinitionFilterInput
  ): [DesWorkflowDefinition!]
  workflows(
    isClosed: Boolean! = false
    where: DesWorkflowFilterInput
    withVariable: DesWorkflowFilterByVariableInput
  ): [DesWorkflow!]
}
```

### Fields

#### `authId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of this workspace used for authorization.

#### `configuration` · [`DesWorkspaceConfiguration!`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types/objects/des-workspace-configuration.md) non-null object Configuration Management

The configuration of this workspace.

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The summary of this workspace content or purpose.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The node identifier for the workspace (used by [`desWorkspaceById`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-workspace-by-id.md)).

#### `isDefault` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Tells if the workspace is the current user default.

#### `library` · [`DesLibrary!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-library.md) non-null object Library Management

The resource managing components for this workspace.

##### `args` · [`DesLibraryArgsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-library-args-input.md) input Library Management

#### `location` · [`DesWorkspaceLocation!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-location.md) non-null object

The location of this workspace.

#### `marketingBadge` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The marketing badge of this workspace.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The descriptive label for this workspace.

#### `projects` · [`[DesProject!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project.md) non-null object Design

The list of projects managed in this workspace.

##### `order` · [`[DesProjectSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-project-sort-input.md) list input Design

##### `where` · [`DesProjectFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-project-filter-input.md) input Design

#### `tasks` · [`[DesTask!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-task.md) non-null object Collaboration

The list of workspace tasks. For a particular workspace consider using the more effective query [`desWorkspaceTasks`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/queries/des-workspace-tasks.md).

#### `team` · [`DesTeam!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-team.md) non-null object

The list of members authorized for this workspace.

#### `url` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The web address of this workspace.

#### `vendor` · [`DesWorkspaceVendor!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-workspace-vendor.md) non-null enum

The vendor of this workspace.

#### `workflowDefinitions` · [`[DesWorkflowDefinition!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/des-workflow-definition.md) list object Customization

The list of workflow definitions in this workspace.

##### `where` · [`DesWorkflowDefinitionFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-workflow-definition-filter-input.md) input Customization

#### `workflows` · [`[DesWorkflow!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/des-workflow.md) list object Customization

The list of workflows in this workspace.

##### `isClosed` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

An option to search workflows that have been completed.

##### `where` · [`DesWorkflowFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-workflow-filter-input.md) input Customization

##### `withVariable` · [`DesWorkflowFilterByVariableInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-workflow-filter-by-variable-input.md) input Customization

Filter workflows by a variable.
