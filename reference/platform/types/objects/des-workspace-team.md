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

#### `projectGuests` · [`DesProjectGuestConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-guest-connection.md) object Design

Retrieves a list of Project Guests.

##### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

##### `filter` · [`DesProjectGuestFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-project-guest-filter-input.md) input Design

Specifies the filter for the results.

##### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

##### `orderBy` · [`DesProjectGuestOrderBy`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-project-guest-order-by.md) enum Design

Specifies the criteria for the result ordering.

##### `sortDirection` · [`DesWorkspaceTeamSortDirection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-workspace-team-sort-direction.md) enum

Specifies the direction for the result ordering.

#### `workspaceGroups` · [`DesWorkspaceGroupConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-group-connection.md) object

Retrieves a list of workspace groups.

##### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

##### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

##### `orderBy` · [`DesWorkspaceGroupOrderBy`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-workspace-group-order-by.md) enum

Specifies the criteria for the result ordering.

##### `sortDirection` · [`DesWorkspaceTeamSortDirection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-workspace-team-sort-direction.md) enum

Specifies the direction for the result ordering.

#### `workspaceUsers` · [`DesWorkspaceUserConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user-connection.md) object

Retrieves a list of workspace users.

##### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

##### `filter` · [`DesWorkspaceUserFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-workspace-user-filter-input.md) input

Specifies the filter for the results.

##### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

##### `orderBy` · [`DesWorkspaceUserOrderBy`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-workspace-user-order-by.md) enum

Specifies the criteria for the result ordering.

##### `sortDirection` · [`DesWorkspaceTeamSortDirection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-workspace-team-sort-direction.md) enum

Specifies the direction for the result ordering.
