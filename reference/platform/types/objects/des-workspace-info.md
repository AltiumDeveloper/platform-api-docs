---
title: "DesWorkspaceInfo"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-info"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceInfo

A workspace provides a flexible and secure method for managing design, manufacturing and supply content.

### Returned By

[`desWorkspaceInfos`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-workspace-infos.md) query

```graphql
type DesWorkspaceInfo {
  authId: String!
  description: String
  isDefault: Boolean!
  location: DesWorkspaceLocation!
  name: String!
  url: String!
  vendor: DesWorkspaceVendor!
  workspaceId: ID!
}
```

### Fields

#### `DesWorkspaceInfo.authId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The identifier of this workspace used for authorization.

#### `DesWorkspaceInfo.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The summary of this workspace content or purpose.

#### `DesWorkspaceInfo.isDefault` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Tells if the workspace is the current user default.

#### `DesWorkspaceInfo.location` · [`DesWorkspaceLocation!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-location.md) non-null object platform

The location of this workspace.

#### `DesWorkspaceInfo.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The descriptive label for this workspace.

#### `DesWorkspaceInfo.url` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The web address of this workspace.

#### `DesWorkspaceInfo.vendor` · [`DesWorkspaceVendor!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-workspace-vendor.md) non-null enum platform

The vendor of this workspace.

#### `DesWorkspaceInfo.workspaceId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The node identifier for the workspace (used by `desWorkspaceById`).
