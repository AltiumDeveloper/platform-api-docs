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

- [Harness Project](https://w3id.org/altium/cdm/design/HarnessProject) — Harness Project defines the design of a cable and wiring harness as a standalone yet integrable artifact, capturing connectors, wires, splices, and pin-to-pin mappings required to implement electrical interconnects between boards and system elements.
  - IRI: [`https://w3id.org/altium/cdm/design/HarnessProject`](https://w3id.org/altium/cdm/design/HarnessProject)

- [Multiboard Project](https://w3id.org/altium/cdm/design/MultiboardProject) — Multiboard Project represents the coordinated design of multiple interconnected PCB projects assembled into a single system, capturing both their logical interconnects and physical arrangements.
  - IRI: [`https://w3id.org/altium/cdm/design/MultiboardProject`](https://w3id.org/altium/cdm/design/MultiboardProject)

- [Hardware Project](https://w3id.org/altium/cdm/design/Project) — A design project stored in a Workspace, normally under its built-in version control, such as a PCB project. It groups the design documents that together define one implementation of a product, along with its project parameters and variants; it is the source from which releases are made and from which Managed BOMs can be created.

  - IRI: [`https://w3id.org/altium/cdm/design/Project`](https://w3id.org/altium/cdm/design/Project)
  - GRID: `grid:workspace:{workspace-id}:design:project/{id}`

### Returned By

[`desProjectById`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-project-by-id.md) query · [`desProjectsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-projects-by-ids.md) query

### Member Of

[`DesProjectConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-connection.md) object · [`DesProjectEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-edge.md) object · [`DesSharedWithMeProjectInfo`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-shared-with-me-project-info.md) object · [`DesWorkspace`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace.md) object · [`SolSolution`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-solution.md) object

### Interfaces

#### [`Node`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/node.md) interface

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

#### `collaborationLatestRevision` · [`DesCollaborationRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-revision.md) object

The latest ECAD, MCAD or ESD revision. See also [`desProjectCollaborationLatestRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-project-collaboration-latest-revision.md).

##### `domain` · [`DesCollaborationDomain!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-collaboration-domain.md) non-null enum

The collaboration domain to get the latest revision for.

#### `collaborationRevisions` · [`DesCollaborationRevisionConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-revision-connection.md) object

ECAD, MCAD or ESD revisions returned by pages. See also [`desProjectCollaborationRevisions`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-project-collaboration-revisions.md).

##### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

##### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

##### `domain` · [`DesCollaborationDomain!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-collaboration-domain.md) non-null enum

The collaboration domain to get the revisions for.

##### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

##### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) when this project was created.

#### `createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object Platform

The account information for who created this project.

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The summary of this project content or purpose.

#### `design` · [`DesDesign!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design.md) non-null object

The detailed design information for this project.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The node identifier for this project (used by [`desProjectById`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-project-by-id.md)).

#### `isScaffolding` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Gets current scaffolding status.

#### `latestRevision` · [`DesVcsRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-vcs-revision.md) object

The latest VCS revision. May be null, see GraphQL errors.

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The assigned name for this project.

#### `owner` · [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) object Platform

Hardware project's owner.

#### `parameters` · [`[DesProjectParameter!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-parameter.md) non-null object

The list of the parameters describing this project.

##### `names` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

An optional list of parameter names to search.

#### `previewUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The web address to download a preview image for this project.

##### `isDirectLink` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Tells to get a direct link to the preview image.

#### `projectId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The reference identifier for this project.

#### `projectPermissions` · [`[DesProjectPermission!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-permission.md) non-null object

The list of project permissions.

#### `projectType` · [`DesProjectType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-project-type.md) non-null enum

The project type.

#### `repositoryType` · [`DesProjectRepositoryType`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-project-repository-type.md) enum

Whether the Git repository is hosted inside or outside Altium 365. Null when the project has no VCS repository, or when the repository lookup fails (in which case see GraphQL errors).

#### `repositoryUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The Git remote URL for the repository. Treat it as an opaque value — request it from the API and use it as-is.

#### `requirementsBlockId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The requirements block identifier.

#### `revisions` · [`DesVcsRevisionConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-vcs-revision-connection.md) object

The list of VCS revisions.

##### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

##### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

##### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

##### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

#### `tasks` · [`[DesTask!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-task.md) non-null object Collaboration

The list of project tasks. For a particular project consider using the more effective query [`desProjectTasks`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/operations/queries/des-project-tasks.md).

#### `updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) when this project was last modified.

#### `updatedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object Platform

The account information for who last modified this project.

#### `url` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The Altium 365 web address.

#### `variantCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The number of design variants.

#### `workflows` · [`[DesWorkflow!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/des-workflow.md) list object Customization

The list of workflows associated with this project.

##### `isClosed` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

An option to search workflows that have been completed.

##### `modifiedAfter` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

An option to search workflows that have been modified after a specific [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md).

##### `where` · [`DesWorkflowFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-workflow-filter-input.md) input Customization

##### `withVariable` · [`DesWorkflowFilterByVariableInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-workflow-filter-by-variable-input.md) input Customization

Filter workflows by a variable.

#### `workspaceUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The Altium 365 workspace URL.
