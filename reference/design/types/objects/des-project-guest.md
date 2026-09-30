---
title: "DesProjectGuest"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-guest"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesProjectGuest

Represents a project guest (a user who is not registered to the workspace but has explicit share to one or more items in the workspace).

### Member Of

[`DesProjectGuestConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-guest-connection.md) object · [`DesProjectGuestEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-guest-edge.md) object

```graphql
type DesProjectGuest {
  displayName: String!
  email: String!
  firstName: String!
  globalUserId: String!
  isOnline: Boolean
  lastName: String!
  profilePicture(
    size: DesWorkspaceUserProfilePictureSize! = SIZE48X48
  ): URL
}
```

### Fields

#### `DesProjectGuest.displayName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

A composition of the first name and last name.

#### `DesProjectGuest.email` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Email of the user.

#### `DesProjectGuest.firstName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The first name of the user.

#### `DesProjectGuest.globalUserId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The global user identifier.

#### `DesProjectGuest.isOnline` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Specifies whether the user is active within any of the workspaces. Null if the information is unavailable (e.g. the requester does not belong to the user's organization).

#### `DesProjectGuest.lastName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The last name of the user.

#### `DesProjectGuest.profilePicture` · [`URL`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/url.md) scalar common

A URL for a picture of this user.

##### `DesProjectGuest.profilePicture.size` · [`DesWorkspaceUserProfilePictureSize!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-workspace-user-profile-picture-size.md) non-null enum platform
