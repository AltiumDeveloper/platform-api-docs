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

- [Device Configuration Revision](https://w3id.org/altium/cdm/software/DeviceConfigurationRevision)

  - IRI: [`https://w3id.org/altium/cdm/software/DeviceConfigurationRevision`](https://w3id.org/altium/cdm/software/DeviceConfigurationRevision)
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

#### `commitId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `createdAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

#### `createdBy` · [`DesWorkspaceUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) non-null object Platform

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `deviceConfiguration` · [`SftDevCfgDeviceConfiguration!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-dev-cfg-device-configuration.md) non-null object

#### `deviceModel` · [`DmDeviceModelAsConfigured!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-device-model-as-configured.md) non-null object **EXPERIMENTAL**

Gets device model information associated with this device configuration revision.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `modifiedAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

#### `modifiedBy` · [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) object Platform

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `url` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### Deprecated

#### `createdById` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** non-null scalar

> **Deprecated:** Field plays a technical role for schema stitching purposes.

#### `deviceConfigurationId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** non-null scalar

> **Deprecated:** Field plays a technical role for schema stitching purposes.

Global resource identifiers (GRID) of device configuration which revision is assigned to.

#### `hardwareProjectId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** scalar

> **Deprecated:** Field plays a technical role for schema stitching purposes.

#### `modifiedById` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** scalar

> **Deprecated:** Field plays a technical role for schema stitching purposes.
