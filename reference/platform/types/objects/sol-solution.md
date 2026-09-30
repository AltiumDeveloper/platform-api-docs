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

- [Solution](https://altiumdeveloper.github.io/cdm/classes/plt_Solution/)
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

#### `SolSolution.aiModels` · [`[SftAIModel!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-aimodel.md) non-null object renesas-preview

AI models associated with the solution.

#### `SolSolution.attachments` · [`[SolAttachment!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-attachment.md) non-null object platform

Collection of attachments associated with the solution.

#### `SolSolution.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

#### `SolSolution.createdBy` · [`DesWorkspaceUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) non-null object platform

#### `SolSolution.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SolSolution.esdDocuments` · [`[SysEsdDocument!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-document.md) non-null object system-design

ESD documents associated with the solution.

#### `SolSolution.evalKitId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

#### `SolSolution.flowType` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SolSolution.folderId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SolSolution.hardwareProjects` · [`[DesProject!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project.md) non-null object design

Hardware projects associated with the solution.

#### `SolSolution.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

#### `SolSolution.isScaffolding` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Gets current scaffolding status.

#### `SolSolution.modifiedAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar common

#### `SolSolution.modifiedBy` · [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) object platform

#### `SolSolution.motorStudioProjects` · [`[RsaMotorStudioProject!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-project.md) non-null object renesas-preview

Motor Studio projects associated with the solution.

#### `SolSolution.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SolSolution.owner` · [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) object platform

Owner of the solution.

#### `SolSolution.parameterBundle` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SolSolution.parameterBundleValues` · [`[SolParameterBundleValue!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-parameter-bundle-value.md) list object platform

#### `SolSolution.permissions` · [`[DesPermission!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/des-permission.md) list interface platform

Collection of the solution's permissions.

#### `SolSolution.previewUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Relative URL for the preview image. Ensure you use the appropriate workspace domain when constructing the full URL.

#### `SolSolution.sharedWith` · [`[DesWorkspaceUser!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) non-null object platform

Workspace users with whom the solution has been shared.

#### `SolSolution.simulations` · [`[SftSimSimulation!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-sim-simulation.md) non-null object renesas-preview

Simulations associated with the solution.

#### `SolSolution.softwareProjects` · [`[SftSoftwareProject!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-software-project.md) non-null object renesas-preview

Software projects associated with the solution.

#### `SolSolution.solutionTemplateId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

#### `SolSolution.systemDataModel` · [`SysSdmSystemModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-system-model.md) object system-design

System data model associated with the solution.

#### Deprecated

#### `SolSolution.createdById` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** non-null scalar common

> **Deprecated:** Fields play a technical role for schema stitching purposes.

#### `SolSolution.modifiedById` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** scalar common

> **Deprecated:** Fields play a technical role for schema stitching purposes.
