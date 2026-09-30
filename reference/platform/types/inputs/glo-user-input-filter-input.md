---
title: "GloUserInputFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-user-input-filter-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloUserInputFilterInput

### Member Of

[`gloUsers`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-users.md) query

```graphql
input GloUserInputFilterInput {
  activationStatus: String
  emailDomain: String
  fullName: String
  organizationId: String
  userEmail: String
  userIds: [String]
  userName: String
}
```

### Fields

#### `GloUserInputFilterInput.activationStatus` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

User's activation status.

#### `GloUserInputFilterInput.emailDomain` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

User's e-mail domain.

#### `GloUserInputFilterInput.fullName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

User's full name.

#### `GloUserInputFilterInput.organizationId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Organization identifier.

#### `GloUserInputFilterInput.userEmail` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Indicates if group is global.

#### `GloUserInputFilterInput.userIds` · [`[String]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

List of user identifiers.

#### `GloUserInputFilterInput.userName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Username.
