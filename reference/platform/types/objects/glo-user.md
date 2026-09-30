---
title: "GloUser"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloUser

### Common Data Model

- [User](https://altiumdeveloper.github.io/cdm/classes/plt_User/)
  - GRID: `grid:global::platform:user/{id}`

### Returned By

[`gloUserById`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-user-by-id.md) query · [`gloUsersByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-users-by-ids.md) query

### Member Of

[`DesExternalUserPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-external-user-permission.md) object · [`GloOrganization`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-organization.md) object · [`GloUserConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-connection.md) object · [`GloUserEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-edge.md) object · [`GloUserGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-group.md) object

```graphql
type GloUser {
  activationStatus: String
  active: Boolean!
  authType: GloAuthType!
  autoSync: Boolean!
  badges: String
  country: String
  currentPosition: String
  displayName: String
  domain: String
  email: String
  exampleWork: String
  experience: String
  firstName: String
  groups: [GloUserGroup]
  hideEmail: Boolean!
  hostName: String
  id: ID!
  lastName: String
  locale: String
  organization: GloOrganization
  parameters: [GloParameter]
  phone: String
  profilePicture: String
  salutation: String
  spaces: [GloUserSpace]
  specialties: String
  timezone: String
  userId: String
  userName: String
  website: String
}
```

### Fields

#### `GloUser.activationStatus` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Current activation status of the user.

#### `GloUser.active` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Indicates whether this user account is active.

#### `GloUser.authType` · [`GloAuthType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/glo-auth-type.md) non-null enum platform

Authentication type (e.g., Windows, LDAP) used for this user account.

#### `GloUser.autoSync` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Indicates whether automatic synchronization is enabled for this user.

#### `GloUser.badges` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Badges or achievements associated with the user (e.g., professional certifications).

#### `GloUser.country` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Country or region associated with this user.

#### `GloUser.currentPosition` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Current job position or role held by the user.

#### `GloUser.displayName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Display name shown publicly in interfaces.

#### `GloUser.domain` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Domain associated with this user.

#### `GloUser.email` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Email address associated with this user account.

#### `GloUser.exampleWork` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Example work or projects associated with this user.

#### `GloUser.experience` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Professional experience summary for the user.

#### `GloUser.firstName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

First name of the user.

#### `GloUser.groups` · [`[GloUserGroup]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-group.md) list object platform

List of groups assigned to this user.

#### `GloUser.hideEmail` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Indicates whether the user's email address should be hidden from public view.

#### `GloUser.hostName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Hostname associated with this user's account (e.g., server name or domain).

#### `GloUser.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

User's global resource identifier.

#### `GloUser.lastName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Last name of the user.

#### `GloUser.locale` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Preferred language or regional locale setting for the user.

#### `GloUser.organization` · [`GloOrganization`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-organization.md) object platform

Organization to which this user belongs.

#### `GloUser.parameters` · [`[GloParameter]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-parameter.md) list object platform

Collection of parameters or settings specific to this user.

#### `GloUser.phone` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Phone number associated with this user.

#### `GloUser.profilePicture` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

URL to a profile picture or avatar associated with this user.

#### `GloUser.salutation` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Salutation or title used when addressing the user (e.g., Dr., Mr.).

#### `GloUser.spaces` · [`[GloUserSpace]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-space.md) list object platform

List of spaces associated with this user.

#### `GloUser.specialties` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Specialized skills or areas of expertise for the user.

#### `GloUser.timezone` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Preferred timezone for this user.

#### `GloUser.userId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

User's identifier.

#### `GloUser.userName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Username associated with the user account.

#### `GloUser.website` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Website or personal URL associated with this user.
