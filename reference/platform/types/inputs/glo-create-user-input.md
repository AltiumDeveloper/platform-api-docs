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

#### `activationStatus` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Activation Status.

#### `authType` · [`GloAuthType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/glo-auth-type.md) non-null enum

User Auth Type.

#### `autoSync` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Auto Sync.

#### `badges` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Badges.

#### `country` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Country.

#### `currentPosition` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Current Position.

#### `displayName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Display Name.

#### `domain` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

User Domain.

#### `email` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

User Email.

#### `exampleWork` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Example Work.

#### `experience` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Experience.

#### `fax` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

User Fax.

#### `firstName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

First Name.

#### `groupsIds` · [`[String]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Groups identifiers.

#### `hideEmail` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Hide Email.

#### `hostName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Host Name.

#### `hrid` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

User HRID.

#### `languageLocale` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Language Locale.

#### `lastName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Last Name.

#### `organisationId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Organisation identifier.

#### `parameters` · [`[GloParameterInput]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-parameter-input.md) list input

User Parameters.

#### `password` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Password.

#### `phone` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

User Phone.

#### `profilePicture` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Profile Picture.

#### `salutation` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Salutation.

#### `sendEmail` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Send Email.

#### `spaceIds` · [`[String]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Space identifiers.

#### `specialties` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Specialties.

#### `timezone` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Timezone.

#### `userName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

User Name.

#### `webSite` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Website.
