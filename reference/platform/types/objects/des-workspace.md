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

- [Workspace](https://altiumdeveloper.github.io/cdm/classes/plt_Workspace/) — The top-level entity that plays a role of a closed environment for other entities (members, projects, components, etc.).
  - GRID: `grid:global::platform:workspace/{id}`

### Returned By

[`desWorkspaceById`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-workspace-by-id.md) query · [`desWorkspaceByUrl`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-workspace-by-url.md) query

### Interfaces

#### [`Node`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/node.md) interface common

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

#### `DesWorkspace.authId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The identifier of this workspace used for authorization.

#### `DesWorkspace.configuration` · [`DesWorkspaceConfiguration!`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types/objects/des-workspace-configuration.md) non-null object configuration-management

The configuration of this workspace.

#### `DesWorkspace.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The summary of this workspace content or purpose.

#### `DesWorkspace.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The node identifier for the workspace (used by `desWorkspaceById`).

#### `DesWorkspace.isDefault` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Tells if the workspace is the current user default.

#### `DesWorkspace.library` · [`DesLibrary!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-library.md) non-null object library-management

The resource managing components for this workspace.

##### `DesWorkspace.library.args` · [`DesLibraryArgsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-library-args-input.md) input library-management

#### `DesWorkspace.location` · [`DesWorkspaceLocation!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-location.md) non-null object platform

The location of this workspace.

#### `DesWorkspace.marketingBadge` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The marketing badge of this workspace.

#### `DesWorkspace.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The descriptive label for this workspace.

#### `DesWorkspace.projects` · [`[DesProject!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project.md) non-null object design

The list of projects managed in this workspace.

##### `DesWorkspace.projects.order` · [`[DesProjectSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-project-sort-input.md) list input design

##### `DesWorkspace.projects.where` · [`DesProjectFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-project-filter-input.md) input design

#### `DesWorkspace.tasks` · [`[DesTask!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-task.md) non-null object collaboration

The list of workspace tasks. For a particular workspace consider using the more effective query `desWorkspaceTasks`.

#### `DesWorkspace.team` · [`DesTeam!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-team.md) non-null object platform

The list of members authorized for this workspace.

#### `DesWorkspace.url` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The web address of this workspace.

#### `DesWorkspace.vendor` · [`DesWorkspaceVendor!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-workspace-vendor.md) non-null enum platform

The vendor of this workspace.

#### `DesWorkspace.workflowDefinitions` · [`[DesWorkflowDefinition!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/des-workflow-definition.md) list object customization

The list of workflow definitions in this workspace.

##### `DesWorkspace.workflowDefinitions.where` · [`DesWorkflowDefinitionFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-workflow-definition-filter-input.md) input customization

#### `DesWorkspace.workflows` · [`[DesWorkflow!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/des-workflow.md) list object customization

The list of workflows in this workspace.

##### `DesWorkspace.workflows.isClosed` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

An option to search workflows that have been completed.

##### `DesWorkspace.workflows.where` · [`DesWorkflowFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-workflow-filter-input.md) input customization

##### `DesWorkspace.workflows.withVariable` · [`DesWorkflowFilterByVariableInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-workflow-filter-by-variable-input.md) input customization

Filter workflows by a variable.
