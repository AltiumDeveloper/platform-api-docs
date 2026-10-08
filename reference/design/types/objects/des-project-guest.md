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

#### `displayName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A composition of the first name and last name.

#### `email` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Email of the user.

#### `firstName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The first name of the user.

#### `globalUserId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The global user identifier.

#### `isOnline` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Specifies whether the user is active within any of the workspaces. Null if the information is unavailable (e.g. the requester does not belong to the user's organization).

#### `lastName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The last name of the user.

#### `profilePicture` · [`URL`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/url.md) scalar

A URL for a picture of this user.

##### `size` · [`DesWorkspaceUserProfilePictureSize!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-workspace-user-profile-picture-size.md) non-null enum Platform
