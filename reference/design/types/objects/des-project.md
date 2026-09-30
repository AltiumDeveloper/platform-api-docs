---
title: "DesProject"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesProject

A project manages all development stages of the PCB/PCA product lifecycle.

### Common Data Model

- [Harness Project](https://altiumdeveloper.github.io/cdm/classes/des_HarnessProject/) — Harness Project defines the design of a cable and wiring harness as a standalone yet integrable artifact, capturing connectors, wires, splices, and pin-to-pin mappings required to implement electrical interconnects between boards and system elements.
- [Multiboard Project](https://altiumdeveloper.github.io/cdm/classes/des_MultiboardProject/) — Multiboard Project represents the coordinated design of multiple interconnected PCB projects assembled into a single system, capturing both their logical interconnects and physical arrangements.
- [Hardware Project](https://altiumdeveloper.github.io/cdm/classes/des_Project/)
  - GRID: `grid:workspace:{workspace-id}:design:project/{id}`

### Returned By

[`desProjectById`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-project-by-id.md) query · [`desProjectsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-projects-by-ids.md) query

### Member Of

[`DesProjectConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-connection.md) object · [`DesProjectEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-edge.md) object · [`DesSharedWithMeProjectInfo`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-shared-with-me-project-info.md) object · [`DesWorkspace`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace.md) object · [`SolSolution`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-solution.md) object

### Interfaces

#### [`Node`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/node.md) interface common

The node interface is implemented by entities that have a global unique identifier.

```graphql
type DesProject implements Node {
  collaborationLatestRevision(
    domain: DesCollaborationDomain!
  ): DesCollaborationRevision
  collaborationRevisions(
    after: String
    before: String
    domain: DesCollaborationDomain!
    first: Int
    last: Int
  ): DesCollaborationRevisionConnection
  createdAt: DateTime!
  createdBy: DesUser!
  description: String
  design: DesDesign!
  id: ID!
  isScaffolding: Boolean!
  latestRevision: DesVcsRevision
  name: String
  owner: DesWorkspaceUser
  parameters(
    names: [String!]
  ): [DesProjectParameter!]!
  previewUrl(
    isDirectLink: Boolean! = false
  ): String!
  projectId: String!
  projectPermissions: [DesProjectPermission!]!
  projectType: DesProjectType!
  repositoryType: DesProjectRepositoryType
  repositoryUrl: String
  requirementsBlockId: String
  revisions(
    after: String
    before: String
    first: Int
    last: Int
  ): DesVcsRevisionConnection
  tasks: [DesTask!]!
  updatedAt: DateTime!
  updatedBy: DesUser!
  url: String!
  variantCount: Int!
  workflows(
    isClosed: Boolean! = false
    modifiedAfter: DateTime
    where: DesWorkflowFilterInput
    withVariable: DesWorkflowFilterByVariableInput
  ): [DesWorkflow!]
  workspaceUrl: String!
}
```

### Fields

#### `DesProject.collaborationLatestRevision` · [`DesCollaborationRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-revision.md) object design

The latest ECAD, MCAD or ESD revision. See also `desProjectCollaborationLatestRevision`.

##### `DesProject.collaborationLatestRevision.domain` · [`DesCollaborationDomain!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-collaboration-domain.md) non-null enum design

The collaboration domain to get the latest revision for.

#### `DesProject.collaborationRevisions` · [`DesCollaborationRevisionConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-revision-connection.md) object design

ECAD, MCAD or ESD revisions returned by pages. See also `desProjectCollaborationRevisions`.

##### `DesProject.collaborationRevisions.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

##### `DesProject.collaborationRevisions.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

##### `DesProject.collaborationRevisions.domain` · [`DesCollaborationDomain!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-collaboration-domain.md) non-null enum design

The collaboration domain to get the revisions for.

##### `DesProject.collaborationRevisions.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

##### `DesProject.collaborationRevisions.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

#### `DesProject.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The `DateTime` when this project was created.

#### `DesProject.createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The account information for who created this project.

#### `DesProject.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The summary of this project content or purpose.

#### `DesProject.design` · [`DesDesign!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design.md) non-null object design

The detailed design information for this project.

#### `DesProject.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The node identifier for this project (used by `desProjectById`).

#### `DesProject.isScaffolding` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Gets current scaffolding status.

#### `DesProject.latestRevision` · [`DesVcsRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-vcs-revision.md) object design

The latest VCS revision. May be null, see GraphQL errors.

#### `DesProject.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The assigned name for this project.

#### `DesProject.owner` · [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) object platform

Hardware project's owner.

#### `DesProject.parameters` · [`[DesProjectParameter!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-parameter.md) non-null object design

The list of the parameters describing this project.

##### `DesProject.parameters.names` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

An optional list of parameter names to search.

#### `DesProject.previewUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The web address to download a preview image for this project.

##### `DesProject.previewUrl.isDirectLink` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Tells to get a direct link to the preview image.

#### `DesProject.projectId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The reference identifier for this project.

#### `DesProject.projectPermissions` · [`[DesProjectPermission!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-permission.md) non-null object design

The list of project permissions.

#### `DesProject.projectType` · [`DesProjectType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-project-type.md) non-null enum design

The project type.

#### `DesProject.repositoryType` · [`DesProjectRepositoryType`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-project-repository-type.md) enum design

Whether the Git repository is hosted inside or outside Altium 365. Null when the project has no VCS repository, or when the repository lookup fails (in which case see GraphQL errors).

#### `DesProject.repositoryUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The Git remote URL for the repository. Treat it as an opaque value — request it from the API and use it as-is.

#### `DesProject.requirementsBlockId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The requirements block identifier.

#### `DesProject.revisions` · [`DesVcsRevisionConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-vcs-revision-connection.md) object design

The list of VCS revisions.

##### `DesProject.revisions.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

##### `DesProject.revisions.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

##### `DesProject.revisions.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

##### `DesProject.revisions.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

#### `DesProject.tasks` · [`[DesTask!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-task.md) non-null object collaboration

The list of project tasks. For a particular project consider using the more effective query `desProjectTasks`.

#### `DesProject.updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The `DateTime` when this project was last modified.

#### `DesProject.updatedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The account information for who last modified this project.

#### `DesProject.url` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The Altium 365 web address.

#### `DesProject.variantCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

The number of design variants.

#### `DesProject.workflows` · [`[DesWorkflow!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/des-workflow.md) list object customization

The list of workflows associated with this project.

##### `DesProject.workflows.isClosed` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

An option to search workflows that have been completed.

##### `DesProject.workflows.modifiedAfter` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar common

An option to search workflows that have been modified after a specific `DateTime`.

##### `DesProject.workflows.where` · [`DesWorkflowFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-workflow-filter-input.md) input customization

##### `DesProject.workflows.withVariable` · [`DesWorkflowFilterByVariableInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-workflow-filter-by-variable-input.md) input customization

Filter workflows by a variable.

#### `DesProject.workspaceUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The Altium 365 workspace URL.
