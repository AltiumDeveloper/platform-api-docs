---
title: "DesDeleteUserGroupInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-delete-user-group-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# DesDeleteUserGroupInput

Input for deleting a user group.

### Member Of

[`desDeleteUserGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-delete-user-group.md) mutation

```graphql
input DesDeleteUserGroupInput {
  groupId: String!
  workspaceUrl: String!
}
```

### Fields

#### `DesDeleteUserGroupInput.groupId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The group reference identifier.

#### `DesDeleteUserGroupInput.workspaceUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The workspace URL where group exists.
