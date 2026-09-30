---
title: "DesPermission"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/des-permission"
bounded_context: "Platform"
kind: "interfaces"
experimental: false
deprecated: false
---

# DesPermission

### Returned By

[`desPermissionsById`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-permissions-by-id.md) query

### Member Of

[`SftAIModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-aimodel.md) object · [`SftDevCfgDeviceConfiguration`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-dev-cfg-device-configuration.md) object · [`SftSimSimulation`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-sim-simulation.md) object · [`SftSoftwareProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-software-project.md) object · [`SolSolution`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-solution.md) object · [`SysEsdDocument`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-document.md) object

### Implemented By

[`DesExternalUserPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-external-user-permission.md) object · [`DesOrganizationPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-organization-permission.md) object · [`DesOwnerPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-owner-permission.md) object · [`DesWorkspaceGroupPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-group-permission.md) object · [`DesWorkspaceMembersPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-members-permission.md) object · [`DesWorkspaceUserPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user-permission.md) object

```graphql
interface DesPermission {
  availableActions: DesPermissionAvailableActions!
  trusteeId: ID!
  trusteePermissions: DesTrusteePermissions!
}
```

### Fields

#### `DesPermission.availableActions` · [`DesPermissionAvailableActions!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-permission-available-actions.md) non-null object platform

Indicates what actions can be performed on the permission.

#### `DesPermission.trusteeId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Trustee's indentificator.

#### `DesPermission.trusteePermissions` · [`DesTrusteePermissions!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-trustee-permissions.md) non-null object platform

Indicates read/write permissions.
