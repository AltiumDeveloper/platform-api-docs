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

- [Software Project](https://w3id.org/altium/cdm/software/SoftwareProject) — The software part of a Renesas 365 solution, developed in the built-in Web IDE (based on the Theia framework) or in e² studio; it can also be created with an external repository type. In the solution's ESD document it can be linked to a software blanket, and generating a board support package (BSP) from that blanket pushes the SDM and applies the changes to the linked project, creating the project first if none exists yet.

  - IRI: [`https://w3id.org/altium/cdm/software/SoftwareProject`](https://w3id.org/altium/cdm/software/SoftwareProject)
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

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

#### `createdBy` · [`DesWorkspaceUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) non-null object Platform

#### `customProperties` · [`[SftSoftwareProjectCustomProperty!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-software-project-custom-property.md) non-null object

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `deviceConfiguration` · [`SftDevCfgDeviceConfiguration`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-dev-cfg-device-configuration.md) object

#### `firmwareUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `folderId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `isScaffolding` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Gets current scaffolding status.

#### `modifiedAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

#### `modifiedBy` · [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) object Platform

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `owner` · [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) object Platform

Software project's owner.

#### `parentSolutions` · [`[SolSolution!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-solution.md) non-null object Platform

#### `permissions` · [`[DesPermission!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/des-permission.md) list interface Platform

Collection of the software project's permissions.

#### `previewUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `repositoryType` · [`SftSoftwareRepositoryType`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/enums/sft-software-repository-type.md) enum

#### `repositoryUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### Deprecated

#### `createdById` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** non-null scalar

> **Deprecated:** Field plays a technical role for schema stitching purposes.

#### `modifiedById` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** scalar

> **Deprecated:** Field plays a technical role for schema stitching purposes.
