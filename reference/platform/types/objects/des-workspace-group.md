---
title: "DesWorkspaceGroup"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-group"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceGroup

The information about the workspace group.

### Common Data Model

- [Workspace Group](https://altiumdeveloper.github.io/cdm/classes/plt_WorkspaceGroup/) — Workspace Group represents a logical collection of users within a workspace, used to manage access control, permissions, and collaboration roles across projects and data assets.
  - GRID: `grid:workspace:{workspace-id}:team:group/{id}`

### Returned By

[`desWorkspaceGroupById`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-workspace-group-by-id.md) query · [`desWorkspaceGroupsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-workspace-groups-by-ids.md) query

### Member Of

[`DesWorkspaceGroupConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-group-connection.md) object · [`DesWorkspaceGroupEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-group-edge.md) object · [`DesWorkspaceGroupPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-group-permission.md) object · [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) object

```graphql
type DesWorkspaceGroup {
  groupId: String!
  id: ID!
  members(
    after: String
    first: Int
    orderBy: DesWorkspaceUserOrderBy
    sortDirection: DesWorkspaceTeamSortDirection
  ): DesWorkspaceUserConnection
  name: String!
}
```

### Fields

#### `DesWorkspaceGroup.groupId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

A workspace-specific identifier.

#### `DesWorkspaceGroup.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Identifies a workspace group.

#### `DesWorkspaceGroup.members` · [`DesWorkspaceUserConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user-connection.md) object platform

##### `DesWorkspaceGroup.members.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

##### `DesWorkspaceGroup.members.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

##### `DesWorkspaceGroup.members.orderBy` · [`DesWorkspaceUserOrderBy`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-workspace-user-order-by.md) enum platform

##### `DesWorkspaceGroup.members.sortDirection` · [`DesWorkspaceTeamSortDirection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-workspace-team-sort-direction.md) enum platform

#### `DesWorkspaceGroup.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

A unique name of this group within the workspace.
