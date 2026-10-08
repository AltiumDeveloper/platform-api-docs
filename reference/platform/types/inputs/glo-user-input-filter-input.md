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

#### `activationStatus` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

User's activation status.

#### `emailDomain` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

User's e-mail domain.

#### `fullName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

User's full name.

#### `organizationId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Organization identifier.

#### `userEmail` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Indicates if group is global.

#### `userIds` · [`[String]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

List of user identifiers.

#### `userName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Username.
