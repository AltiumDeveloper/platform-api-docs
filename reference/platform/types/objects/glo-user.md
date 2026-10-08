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

- [User](https://w3id.org/altium/cdm/platform/User) — A person identified by a global Altium Account, the identity used for signing in to Altium services. A user can be registered in an organization's Company Account, either added by an administrator or admitted through an approved join request, and can then be given access to licenses through the Company Account's user groups. Access to a Workspace is granted separately, by making the user a member of that Workspace.

  - IRI: [`https://w3id.org/altium/cdm/platform/User`](https://w3id.org/altium/cdm/platform/User)
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

#### `activationStatus` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Current activation status of the user.

#### `active` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Indicates whether this user account is active.

#### `authType` · [`GloAuthType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/glo-auth-type.md) non-null enum

Authentication type (e.g., Windows, LDAP) used for this user account.

#### `autoSync` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Indicates whether automatic synchronization is enabled for this user.

#### `badges` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Badges or achievements associated with the user (e.g., professional certifications).

#### `country` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Country or region associated with this user.

#### `currentPosition` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Current job position or role held by the user.

#### `displayName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Display name shown publicly in interfaces.

#### `domain` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Domain associated with this user.

#### `email` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Email address associated with this user account.

#### `exampleWork` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Example work or projects associated with this user.

#### `experience` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Professional experience summary for the user.

#### `firstName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

First name of the user.

#### `groups` · [`[GloUserGroup]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-group.md) list object

List of groups assigned to this user.

#### `hideEmail` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Indicates whether the user's email address should be hidden from public view.

#### `hostName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Hostname associated with this user's account (e.g., server name or domain).

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

User's global resource identifier.

#### `lastName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Last name of the user.

#### `locale` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Preferred language or regional locale setting for the user.

#### `organization` · [`GloOrganization`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-organization.md) object

Organization to which this user belongs.

#### `parameters` · [`[GloParameter]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-parameter.md) list object

Collection of parameters or settings specific to this user.

#### `phone` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Phone number associated with this user.

#### `profilePicture` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

URL to a profile picture or avatar associated with this user.

#### `salutation` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Salutation or title used when addressing the user (e.g., Dr., Mr.).

#### `spaces` · [`[GloUserSpace]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-space.md) list object

List of spaces associated with this user.

#### `specialties` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Specialized skills or areas of expertise for the user.

#### `timezone` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Preferred timezone for this user.

#### `userId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

User's identifier.

#### `userName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Username associated with the user account.

#### `website` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Website or personal URL associated with this user.
