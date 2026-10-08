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

- [Device Configuration](https://w3id.org/altium/cdm/software/DeviceConfiguration) — The configuration of a device (e.g. an MCU placed as a hardware component in an ESD document), covering its ports, package information, peripherals and pin assignments. It is viewed and edited on the hardware component in the ESD document, and the pin functions it defines can be pulled from the solution's SDM onto the pins of the associated component in a hardware project in Altium Designer.

  - IRI: [`https://w3id.org/altium/cdm/software/DeviceConfiguration`](https://w3id.org/altium/cdm/software/DeviceConfiguration)
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

#### `createdAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

#### `createdBy` · [`DesWorkspaceUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) non-null object Platform

#### `folderId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `latestRevision` · [`SftDevCfgDeviceConfigurationRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-dev-cfg-device-configuration-revision.md) object

#### `modifiedAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

#### `modifiedBy` · [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) object Platform

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `owner` · [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) object Platform

Device configuration's owner.

#### `permissions` · [`[DesPermission!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/des-permission.md) list interface Platform

Collection of the device configuration's permissions.

#### `revisions` · [`[SftDevCfgDeviceConfigurationRevision!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-dev-cfg-device-configuration-revision.md) non-null object

#### `softwareProject` · [`SftSoftwareProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-software-project.md) object

#### Deprecated

#### `createdById` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** non-null scalar

> **Deprecated:** Field plays a technical role for schema stitching purposes.

#### `modifiedById` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** scalar

> **Deprecated:** Field plays a technical role for schema stitching purposes.
