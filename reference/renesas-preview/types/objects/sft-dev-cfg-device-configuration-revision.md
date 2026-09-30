---
title: "SftDevCfgDeviceConfigurationRevision"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-dev-cfg-device-configuration-revision"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: false
deprecated: false
---

# SftDevCfgDeviceConfigurationRevision

### Common Data Model

- [Device Configuration Revision](https://altiumdeveloper.github.io/cdm/classes/sft_DeviceConfigurationRevision/)
  - GRID: `grid:workspace:{workspace-id}:software:device-configuration-revision/{id}`

### Returned By

[`sftDevCfgDeviceConfigurationRevisionById`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/sft-dev-cfg-device-configuration-revision-by-id.md) query · [`sftDevCfgDeviceConfigurationRevisionsByDeviceConfigurationId`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/sft-dev-cfg-device-configuration-revisions-by-device-configuration-id.md) query · [`sftDevCfgDeviceConfigurationRevisionsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/sft-dev-cfg-device-configuration-revisions-by-ids.md) query

### Member Of

[`SftDevCfgDeviceConfiguration`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-dev-cfg-device-configuration.md) object

```graphql
type SftDevCfgDeviceConfigurationRevision {
  commitId: String
  createdAt: DateTime
  createdBy: DesWorkspaceUser!
  createdById: ID! @deprecated
  description: String
  deviceConfiguration: SftDevCfgDeviceConfiguration!
  deviceConfigurationId: ID! @deprecated
  deviceModel: DmDeviceModelAsConfigured!
  hardwareProjectId: ID @deprecated
  id: ID!
  modifiedAt: DateTime
  modifiedBy: DesWorkspaceUser
  modifiedById: ID @deprecated
  name: String!
  url: String
}
```

### Fields

#### `SftDevCfgDeviceConfigurationRevision.commitId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SftDevCfgDeviceConfigurationRevision.createdAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar common

#### `SftDevCfgDeviceConfigurationRevision.createdBy` · [`DesWorkspaceUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) non-null object platform

#### `SftDevCfgDeviceConfigurationRevision.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SftDevCfgDeviceConfigurationRevision.deviceConfiguration` · [`SftDevCfgDeviceConfiguration!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-dev-cfg-device-configuration.md) non-null object renesas-preview

#### `SftDevCfgDeviceConfigurationRevision.deviceModel` · [`DmDeviceModelAsConfigured!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-device-model-as-configured.md) non-null object renesas-preview **EXPERIMENTAL**

Gets device model information associated with this device configuration revision.

#### `SftDevCfgDeviceConfigurationRevision.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

#### `SftDevCfgDeviceConfigurationRevision.modifiedAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar common

#### `SftDevCfgDeviceConfigurationRevision.modifiedBy` · [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) object platform

#### `SftDevCfgDeviceConfigurationRevision.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SftDevCfgDeviceConfigurationRevision.url` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### Deprecated

#### `SftDevCfgDeviceConfigurationRevision.createdById` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** non-null scalar common

> **Deprecated:** Field plays a technical role for schema stitching purposes.

#### `SftDevCfgDeviceConfigurationRevision.deviceConfigurationId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** non-null scalar common

> **Deprecated:** Field plays a technical role for schema stitching purposes.

Global resource identifiers (GRID) of device configuration which revision is assigned to.

#### `SftDevCfgDeviceConfigurationRevision.hardwareProjectId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** scalar common

> **Deprecated:** Field plays a technical role for schema stitching purposes.

#### `SftDevCfgDeviceConfigurationRevision.modifiedById` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** scalar common

> **Deprecated:** Field plays a technical role for schema stitching purposes.
