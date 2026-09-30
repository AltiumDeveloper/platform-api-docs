---
title: "SftSoftwareProject"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-software-project"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: false
deprecated: false
---

# SftSoftwareProject

### Common Data Model

- [Software Project](https://altiumdeveloper.github.io/cdm/classes/sft_SoftwareProject/)
  - GRID: `grid:workspace:{workspace-id}:software:software-project/{id}`

### Returned By

[`sftSoftwareProjectById`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/sft-software-project-by-id.md) query · [`sftSoftwareProjects`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/sft-software-projects.md) query · [`sftSoftwareProjectsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/sft-software-projects-by-ids.md) query

### Member Of

[`SftDevCfgDeviceConfiguration`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-dev-cfg-device-configuration.md) object · [`SftSoftwareCreateProjectPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-software-create-project-payload.md) object · [`SftSoftwareProjectUpdateConfigurationPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-software-project-update-configuration-payload.md) object · [`SftSoftwareProjectUpdateFirmwarePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-software-project-update-firmware-payload.md) object · [`SftSoftwareUpdateProjectPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-software-update-project-payload.md) object · [`SolSolution`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-solution.md) object

```graphql
type SftSoftwareProject {
  createdAt: DateTime!
  createdBy: DesWorkspaceUser!
  createdById: ID! @deprecated
  customProperties: [SftSoftwareProjectCustomProperty!]!
  description: String
  deviceConfiguration: SftDevCfgDeviceConfiguration
  firmwareUrl: String
  folderId: String!
  id: ID!
  isScaffolding: Boolean!
  modifiedAt: DateTime
  modifiedBy: DesWorkspaceUser
  modifiedById: ID @deprecated
  name: String!
  owner: DesWorkspaceUser
  parentSolutions: [SolSolution!]!
  permissions: [DesPermission!]
  previewUrl: String!
  repositoryType: SftSoftwareRepositoryType
  repositoryUrl: String!
}
```

### Fields

#### `SftSoftwareProject.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

#### `SftSoftwareProject.createdBy` · [`DesWorkspaceUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) non-null object platform

#### `SftSoftwareProject.customProperties` · [`[SftSoftwareProjectCustomProperty!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-software-project-custom-property.md) non-null object renesas-preview

#### `SftSoftwareProject.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SftSoftwareProject.deviceConfiguration` · [`SftDevCfgDeviceConfiguration`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-dev-cfg-device-configuration.md) object renesas-preview

#### `SftSoftwareProject.firmwareUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SftSoftwareProject.folderId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SftSoftwareProject.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

#### `SftSoftwareProject.isScaffolding` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Gets current scaffolding status.

#### `SftSoftwareProject.modifiedAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar common

#### `SftSoftwareProject.modifiedBy` · [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) object platform

#### `SftSoftwareProject.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SftSoftwareProject.owner` · [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) object platform

Software project's owner.

#### `SftSoftwareProject.parentSolutions` · [`[SolSolution!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-solution.md) non-null object platform

#### `SftSoftwareProject.permissions` · [`[DesPermission!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/des-permission.md) list interface platform

Collection of the software project's permissions.

#### `SftSoftwareProject.previewUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SftSoftwareProject.repositoryType` · [`SftSoftwareRepositoryType`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/enums/sft-software-repository-type.md) enum renesas-preview

#### `SftSoftwareProject.repositoryUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### Deprecated

#### `SftSoftwareProject.createdById` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** non-null scalar common

> **Deprecated:** Field plays a technical role for schema stitching purposes.

#### `SftSoftwareProject.modifiedById` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** scalar common

> **Deprecated:** Field plays a technical role for schema stitching purposes.
