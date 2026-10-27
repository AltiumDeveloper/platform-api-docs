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

- [Workspace Group](https://w3id.org/altium/cdm/platform/WorkspaceGroup) — Workspace Group represents a logical collection of users within a workspace, used to manage access control, permissions, and collaboration roles across projects and data assets.

  - IRI: [`https://w3id.org/altium/cdm/platform/WorkspaceGroup`](https://w3id.org/altium/cdm/platform/WorkspaceGroup)
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

#### `groupId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A workspace-specific identifier.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Identifies a workspace group.

#### `members` · [`DesWorkspaceUserConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user-connection.md) object

##### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

##### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

##### `orderBy` · [`DesWorkspaceUserOrderBy`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-workspace-user-order-by.md) enum

##### `sortDirection` · [`DesWorkspaceTeamSortDirection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-workspace-team-sort-direction.md) enum

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A unique name of this group within the workspace.
