---
title: "SftDevCfgDeviceConfiguration"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-dev-cfg-device-configuration"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: false
deprecated: false
---

# SftDevCfgDeviceConfiguration

### Common Data Model

- [Device Configuration](https://altiumdeveloper.github.io/cdm/classes/sft_DeviceConfiguration/) — The configuration of a device (e.g. an MCU placed as a hardware component in an ESD document), covering its ports, package information, peripherals and pin assignments. It is viewed and edited on the hardware component in the ESD document, and the pin functions it defines can be pulled from the solution's SDM onto the pins of the associated component in a hardware project in Altium Designer.
  - GRID: `grid:workspace:{workspace-id}:software:device-configuration/{id}`

### Returned By

[`sftDevCfgDeviceConfigurationById`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/sft-dev-cfg-device-configuration-by-id.md) query · [`sftDevCfgDeviceConfigurations`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/sft-dev-cfg-device-configurations.md) query · [`sftDevCfgDeviceConfigurationsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/sft-dev-cfg-device-configurations-by-ids.md) query

### Member Of

[`SftDevCfgCreateDeviceConfigurationPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-dev-cfg-create-device-configuration-payload.md) object · [`SftDevCfgDeviceConfigurationRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-dev-cfg-device-configuration-revision.md) object · [`SftSoftwareProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-software-project.md) object

```graphql
type SftDevCfgDeviceConfiguration {
  createdAt: DateTime
  createdBy: DesWorkspaceUser!
  createdById: ID! @deprecated
  folderId: String!
  id: ID!
  latestRevision: SftDevCfgDeviceConfigurationRevision
  modifiedAt: DateTime
  modifiedBy: DesWorkspaceUser
  modifiedById: ID @deprecated
  name: String!
  owner: DesWorkspaceUser
  permissions: [DesPermission!]
  revisions: [SftDevCfgDeviceConfigurationRevision!]!
  softwareProject: SftSoftwareProject
}
```

### Fields

#### `SftDevCfgDeviceConfiguration.createdAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar common

#### `SftDevCfgDeviceConfiguration.createdBy` · [`DesWorkspaceUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) non-null object platform

#### `SftDevCfgDeviceConfiguration.folderId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SftDevCfgDeviceConfiguration.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

#### `SftDevCfgDeviceConfiguration.latestRevision` · [`SftDevCfgDeviceConfigurationRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-dev-cfg-device-configuration-revision.md) object renesas-preview

#### `SftDevCfgDeviceConfiguration.modifiedAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar common

#### `SftDevCfgDeviceConfiguration.modifiedBy` · [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) object platform

#### `SftDevCfgDeviceConfiguration.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SftDevCfgDeviceConfiguration.owner` · [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) object platform

Device configuration's owner.

#### `SftDevCfgDeviceConfiguration.permissions` · [`[DesPermission!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/des-permission.md) list interface platform

Collection of the device configuration's permissions.

#### `SftDevCfgDeviceConfiguration.revisions` · [`[SftDevCfgDeviceConfigurationRevision!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-dev-cfg-device-configuration-revision.md) non-null object renesas-preview

#### `SftDevCfgDeviceConfiguration.softwareProject` · [`SftSoftwareProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-software-project.md) object renesas-preview

#### Deprecated

#### `SftDevCfgDeviceConfiguration.createdById` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** non-null scalar common

> **Deprecated:** Field plays a technical role for schema stitching purposes.

#### `SftDevCfgDeviceConfiguration.modifiedById` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** scalar common

> **Deprecated:** Field plays a technical role for schema stitching purposes.
