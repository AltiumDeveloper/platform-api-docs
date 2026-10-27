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

- [Workspace User](https://w3id.org/altium/cdm/platform/WorkspaceUser) — A person's membership in a particular Workspace, connecting their Altium Account to that Workspace and to the Workspace groups they are assigned to. Members can come from the organization that owns the Workspace or from other organizations, and inviting an outside user does not add them to the owning organization. People who only have a project shared with them (External Share guests) are not members.

  - IRI: [`https://w3id.org/altium/cdm/platform/WorkspaceUser`](https://w3id.org/altium/cdm/platform/WorkspaceUser)
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

#### `displayName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A composition of the first name and last name.

#### `email` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Email of the user.

#### `firstName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `globalUserId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The global user identifier. Null in case of some old workspaces that have never been migrated, if the user has never logged into the workspace.

#### `groups` · [`[DesWorkspaceGroup!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-group.md) non-null object

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The node identifier for the workspace user.

#### `isActive` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Indicates whether the user is currently a member of the workspace. False if the user has been removed.

#### `isOnline` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Specifies whether the user is active within any of the workspaces. Null if the information is unavailable (e.g. the requester does not belong to the user's organization).

#### `lastName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `licenseFeatures` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

The license features available to this user. Null if not the current user.

#### `profilePicture` · [`URL`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/url.md) scalar

A URL for a picture of this user.

##### `size` · [`DesWorkspaceUserProfilePictureSize!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-workspace-user-profile-picture-size.md) non-null enum

#### `type` · [`DesWorkspaceUserType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-workspace-user-type.md) non-null enum

A specific role of this user within the workspace.

#### `userId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The workspace specific user identifier.
