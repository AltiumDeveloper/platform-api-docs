---
title: "SolSolution"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-solution"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# SolSolution

### Common Data Model

- [Solution](https://w3id.org/altium/cdm/platform/Solution) — A Renesas 365 solution: the main, top-level object of a Renesas 365 Workspace, which brings together the system design (an ESD document), PCB projects and software projects of one system. System designs and software projects both push their changes to the solution's System Data Model (SDM) and pull from it; Altium Designer can open a solution's PCB projects and pull SDM changes into them.

  - IRI: [`https://w3id.org/altium/cdm/platform/Solution`](https://w3id.org/altium/cdm/platform/Solution)
  - GRID: `grid:workspace:{workspace-id}:platform:solution/{id}`

### Returned By

[`solSolutionById`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/sol-solution-by-id.md) query · [`solSolutions`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/sol-solutions.md) query · [`solSolutionsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/platform/operations/queries/sol-solutions-by-ids.md) query · [`solSolutionsByPage`](https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/platform/operations/queries/sol-solutions-by-page.md) query

### Member Of

[`RsaMotorStudioProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-project.md) object · [`SftSoftwareProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-software-project.md) object · [`SolCreateSolutionPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-create-solution-payload.md) object · [`SolSolutionsByPagePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-solutions-by-page-payload.md) object · [`SolUpdateSolutionPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-update-solution-payload.md) object

```graphql
type SolSolution {
  aiModels: [SftAIModel!]!
  attachments: [SolAttachment!]!
  createdAt: DateTime!
  createdBy: DesWorkspaceUser!
  createdById: ID! @deprecated
  description: String
  esdDocuments: [SysEsdDocument!]!
  evalKitId: ID
  flowType: String
  folderId: String!
  hardwareProjects: [DesProject!]!
  id: ID!
  isScaffolding: Boolean!
  modifiedAt: DateTime
  modifiedBy: DesWorkspaceUser
  modifiedById: ID @deprecated
  motorStudioProjects: [RsaMotorStudioProject!]!
  name: String!
  owner: DesWorkspaceUser
  parameterBundle: String
  parameterBundleValues: [SolParameterBundleValue!]
  permissions: [DesPermission!]
  previewUrl: String!
  sharedWith: [DesWorkspaceUser!]!
  simulations: [SftSimSimulation!]!
  softwareProjects: [SftSoftwareProject!]!
  solutionTemplateId: ID
  systemDataModel: SysSdmSystemModel
}
```

### Fields

#### `aiModels` · [`[SftAIModel!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-aimodel.md) non-null object Renesas (preview)

AI models associated with the solution.

#### `attachments` · [`[SolAttachment!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-attachment.md) non-null object

Collection of attachments associated with the solution.

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

#### `createdBy` · [`DesWorkspaceUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) non-null object

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `esdDocuments` · [`[SysEsdDocument!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-document.md) non-null object System Design

ESD documents associated with the solution.

#### `evalKitId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

#### `flowType` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `folderId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `hardwareProjects` · [`[DesProject!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project.md) non-null object Design

Hardware projects associated with the solution.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `isScaffolding` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Gets current scaffolding status.

#### `modifiedAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

#### `modifiedBy` · [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) object

#### `motorStudioProjects` · [`[RsaMotorStudioProject!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-project.md) non-null object Renesas (preview)

Motor Studio projects associated with the solution.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `owner` · [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) object

Owner of the solution.

#### `parameterBundle` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `parameterBundleValues` · [`[SolParameterBundleValue!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-parameter-bundle-value.md) list object

#### `permissions` · [`[DesPermission!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/des-permission.md) list interface

Collection of the solution's permissions.

#### `previewUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Relative URL for the preview image. Ensure you use the appropriate workspace domain when constructing the full URL.

#### `sharedWith` · [`[DesWorkspaceUser!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) non-null object

Workspace users with whom the solution has been shared.

#### `simulations` · [`[SftSimSimulation!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-sim-simulation.md) non-null object Renesas (preview)

Simulations associated with the solution.

#### `softwareProjects` · [`[SftSoftwareProject!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-software-project.md) non-null object Renesas (preview)

Software projects associated with the solution.

#### `solutionTemplateId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

#### `systemDataModel` · [`SysSdmSystemModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-system-model.md) object System Design

System data model associated with the solution.

#### Deprecated

#### `createdById` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** non-null scalar

> **Deprecated:** Fields play a technical role for schema stitching purposes.

#### `modifiedById` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** scalar

> **Deprecated:** Fields play a technical role for schema stitching purposes.
