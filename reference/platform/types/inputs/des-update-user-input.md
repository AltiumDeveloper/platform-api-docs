---
title: "DesUpdateUserInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-update-user-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUpdateUserInput

Input for updating a user.

### Member Of

[`desUpdateUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-update-user.md) mutation

```graphql
input DesUpdateUserInput {
  firstName: String
  lastName: String
  userId: String!
  workspaceUrl: String
}
```

### Fields

#### `firstName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

User first name.

#### `lastName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

User last name.

#### `userId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Workspace user identifier.

#### `workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Workspace URL.
