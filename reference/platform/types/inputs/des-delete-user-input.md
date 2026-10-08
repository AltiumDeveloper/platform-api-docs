---
title: "DesDeleteUserInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-delete-user-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# DesDeleteUserInput

Input for deleting a user.

### Member Of

[`desDeleteUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-delete-user.md) mutation

```graphql
input DesDeleteUserInput {
  userId: String!
  workspaceUrl: String
}
```

### Fields

#### `userId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Workspace user identifier.

#### `workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

URL for the workspace to delete the user from.
