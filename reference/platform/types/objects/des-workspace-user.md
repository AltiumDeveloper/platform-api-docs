---
title: "DesWorkspaceUser"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceUser

Represents a user registered in a workspace.

### Common Data Model

- [Workspace User](https://altiumdeveloper.github.io/cdm/classes/plt_WorkspaceUser/)
  - GRID: `grid:workspace:{workspace-id}:team:user/{id}`

### Returned By

[`desWorkspaceUserByAuth`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-workspace-user-by-auth.md) query · [`desWorkspaceUserById`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-workspace-user-by-id.md) query · [`desWorkspaceUsersByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-workspace-users-by-ids.md) query

### Member Of

[`DesOwnerPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-owner-permission.md) object · [`DesProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project.md) object · [`DesWorkspaceUserConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user-connection.md) object · [`DesWorkspaceUserEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user-edge.md) object · [`DesWorkspaceUserPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user-permission.md) object · [`RsaMotorStudioEasyModeConfig`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-easy-mode-config.md) object · [`RsaMotorStudioProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-project.md) object · [`RsaMotorStudioScopeCapture`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-scope-capture.md) object · [`RsaMotorStudioScopeConfig`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-scope-config.md) object · [`RsaMotorStudioTuning`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-tuning.md) object · [`RsaMotorStudioTuningRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-tuning-revision.md) object · [`RsaMotorStudioVariableSet`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-variable-set.md) object · [`RsaMotorStudioVariableSetRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-variable-set-revision.md) object · [`SftAIModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-aimodel.md) object · [`SftDevCfgDeviceConfiguration`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-dev-cfg-device-configuration.md) object · [`SftDevCfgDeviceConfigurationRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-dev-cfg-device-configuration-revision.md) object · [`SftSimSimulation`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-sim-simulation.md) object · [`SftSoftwareProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-software-project.md) object · [`SolAttachment`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-attachment.md) object · [`SolSolution`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-solution.md) object · [`SysEsdDocument`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-document.md) object

```graphql
type DesWorkspaceUser {
  displayName: String!
  email: String!
  firstName: String!
  globalUserId: String
  groups: [DesWorkspaceGroup!]!
  id: ID!
  isActive: Boolean!
  isOnline: Boolean
  lastName: String!
  licenseFeatures: [String!]
  profilePicture(
    size: DesWorkspaceUserProfilePictureSize! = SIZE48X48
  ): URL
  type: DesWorkspaceUserType!
  userId: String!
}
```

### Fields

#### `DesWorkspaceUser.displayName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

A composition of the first name and last name.

#### `DesWorkspaceUser.email` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Email of the user.

#### `DesWorkspaceUser.firstName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `DesWorkspaceUser.globalUserId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The global user identifier. Null in case of some old workspaces that have never been migrated, if the user has never logged into the workspace.

#### `DesWorkspaceUser.groups` · [`[DesWorkspaceGroup!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-group.md) non-null object platform

#### `DesWorkspaceUser.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The node identifier for the workspace user.

#### `DesWorkspaceUser.isActive` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Indicates whether the user is currently a member of the workspace. False if the user has been removed.

#### `DesWorkspaceUser.isOnline` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Specifies whether the user is active within any of the workspaces. Null if the information is unavailable (e.g. the requester does not belong to the user's organization).

#### `DesWorkspaceUser.lastName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `DesWorkspaceUser.licenseFeatures` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

The license features available to this user. Null if not the current user.

#### `DesWorkspaceUser.profilePicture` · [`URL`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/url.md) scalar common

A URL for a picture of this user.

##### `DesWorkspaceUser.profilePicture.size` · [`DesWorkspaceUserProfilePictureSize!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-workspace-user-profile-picture-size.md) non-null enum platform

#### `DesWorkspaceUser.type` · [`DesWorkspaceUserType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-workspace-user-type.md) non-null enum platform

A specific role of this user within the workspace.

#### `DesWorkspaceUser.userId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The workspace specific user identifier.
