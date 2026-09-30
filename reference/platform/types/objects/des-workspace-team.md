---
title: "DesWorkspaceTeam"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-team"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceTeam

Represents a team of collaborators in a given workspace.

### Returned By

[`desWorkspaceTeamByAuth`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-workspace-team-by-auth.md) query

```graphql
type DesWorkspaceTeam {
  projectGuests(
    after: String
    filter: DesProjectGuestFilterInput
    first: Int
    orderBy: DesProjectGuestOrderBy
    sortDirection: DesWorkspaceTeamSortDirection
  ): DesProjectGuestConnection
  workspaceGroups(
    after: String
    first: Int
    orderBy: DesWorkspaceGroupOrderBy
    sortDirection: DesWorkspaceTeamSortDirection
  ): DesWorkspaceGroupConnection
  workspaceUsers(
    after: String
    filter: DesWorkspaceUserFilterInput
    first: Int
    orderBy: DesWorkspaceUserOrderBy
    sortDirection: DesWorkspaceTeamSortDirection
  ): DesWorkspaceUserConnection
}
```

### Fields

#### `DesWorkspaceTeam.projectGuests` · [`DesProjectGuestConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-guest-connection.md) object design

Retrieves a list of Project Guests.

##### `DesWorkspaceTeam.projectGuests.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

##### `DesWorkspaceTeam.projectGuests.filter` · [`DesProjectGuestFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-project-guest-filter-input.md) input design

Specifies the filter for the results.

##### `DesWorkspaceTeam.projectGuests.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

##### `DesWorkspaceTeam.projectGuests.orderBy` · [`DesProjectGuestOrderBy`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-project-guest-order-by.md) enum design

Specifies the criteria for the result ordering.

##### `DesWorkspaceTeam.projectGuests.sortDirection` · [`DesWorkspaceTeamSortDirection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-workspace-team-sort-direction.md) enum platform

Specifies the direction for the result ordering.

#### `DesWorkspaceTeam.workspaceGroups` · [`DesWorkspaceGroupConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-group-connection.md) object platform

Retrieves a list of workspace groups.

##### `DesWorkspaceTeam.workspaceGroups.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

##### `DesWorkspaceTeam.workspaceGroups.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

##### `DesWorkspaceTeam.workspaceGroups.orderBy` · [`DesWorkspaceGroupOrderBy`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-workspace-group-order-by.md) enum platform

Specifies the criteria for the result ordering.

##### `DesWorkspaceTeam.workspaceGroups.sortDirection` · [`DesWorkspaceTeamSortDirection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-workspace-team-sort-direction.md) enum platform

Specifies the direction for the result ordering.

#### `DesWorkspaceTeam.workspaceUsers` · [`DesWorkspaceUserConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user-connection.md) object platform

Retrieves a list of workspace users.

##### `DesWorkspaceTeam.workspaceUsers.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

##### `DesWorkspaceTeam.workspaceUsers.filter` · [`DesWorkspaceUserFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-workspace-user-filter-input.md) input platform

Specifies the filter for the results.

##### `DesWorkspaceTeam.workspaceUsers.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

##### `DesWorkspaceTeam.workspaceUsers.orderBy` · [`DesWorkspaceUserOrderBy`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-workspace-user-order-by.md) enum platform

Specifies the criteria for the result ordering.

##### `DesWorkspaceTeam.workspaceUsers.sortDirection` · [`DesWorkspaceTeamSortDirection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-workspace-team-sort-direction.md) enum platform

Specifies the direction for the result ordering.
