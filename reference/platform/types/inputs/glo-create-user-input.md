---
title: "GloCreateUserInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-create-user-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloCreateUserInput

Represents input value for creating new user.

### Member Of

[`gloCreateUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-create-user.md) mutation

```graphql
input GloCreateUserInput {
  activationStatus: String
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
  fax: String
  firstName: String
  groupsIds: [String]
  hideEmail: Boolean!
  hostName: String
  hrid: String
  languageLocale: String
  lastName: String
  organisationId: String
  parameters: [GloParameterInput]
  password: String
  phone: String
  profilePicture: String
  salutation: String
  sendEmail: Boolean!
  spaceIds: [String]
  specialties: String
  timezone: String
  userName: String
  webSite: String
}
```

### Fields

#### `GloCreateUserInput.activationStatus` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Activation Status.

#### `GloCreateUserInput.authType` · [`GloAuthType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/glo-auth-type.md) non-null enum platform

User Auth Type.

#### `GloCreateUserInput.autoSync` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Auto Sync.

#### `GloCreateUserInput.badges` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Badges.

#### `GloCreateUserInput.country` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Country.

#### `GloCreateUserInput.currentPosition` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Current Position.

#### `GloCreateUserInput.displayName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Display Name.

#### `GloCreateUserInput.domain` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

User Domain.

#### `GloCreateUserInput.email` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

User Email.

#### `GloCreateUserInput.exampleWork` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Example Work.

#### `GloCreateUserInput.experience` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Experience.

#### `GloCreateUserInput.fax` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

User Fax.

#### `GloCreateUserInput.firstName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

First Name.

#### `GloCreateUserInput.groupsIds` · [`[String]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Groups identifiers.

#### `GloCreateUserInput.hideEmail` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Hide Email.

#### `GloCreateUserInput.hostName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Host Name.

#### `GloCreateUserInput.hrid` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

User HRID.

#### `GloCreateUserInput.languageLocale` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Language Locale.

#### `GloCreateUserInput.lastName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Last Name.

#### `GloCreateUserInput.organisationId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Organisation identifier.

#### `GloCreateUserInput.parameters` · [`[GloParameterInput]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-parameter-input.md) list input platform

User Parameters.

#### `GloCreateUserInput.password` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Password.

#### `GloCreateUserInput.phone` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

User Phone.

#### `GloCreateUserInput.profilePicture` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Profile Picture.

#### `GloCreateUserInput.salutation` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Salutation.

#### `GloCreateUserInput.sendEmail` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Send Email.

#### `GloCreateUserInput.spaceIds` · [`[String]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Space identifiers.

#### `GloCreateUserInput.specialties` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Specialties.

#### `GloCreateUserInput.timezone` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Timezone.

#### `GloCreateUserInput.userName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

User Name.

#### `GloCreateUserInput.webSite` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Website.
