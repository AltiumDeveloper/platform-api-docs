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

#### `email` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

New user email.

#### `firstName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

New user first name.

#### `lastName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

New user last name.

#### `password` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

New user password.

#### `userName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

New user username.

#### `workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

URL for the workspace to add the new user into.
