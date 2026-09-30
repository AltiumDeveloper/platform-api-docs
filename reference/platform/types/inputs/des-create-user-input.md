---
title: "DesCreateUserInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-create-user-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCreateUserInput

Input for user creation.

### Member Of

[`desCreateUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-create-user.md) mutation

```graphql
input DesCreateUserInput {
  email: String!
  firstName: String!
  lastName: String!
  password: String!
  userName: String!
  workspaceUrl: String
}
```

### Fields

#### `DesCreateUserInput.email` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

New user email.

#### `DesCreateUserInput.firstName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

New user first name.

#### `DesCreateUserInput.lastName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

New user last name.

#### `DesCreateUserInput.password` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

New user password.

#### `DesCreateUserInput.userName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

New user username.

#### `DesCreateUserInput.workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

URL for the workspace to add the new user into.
