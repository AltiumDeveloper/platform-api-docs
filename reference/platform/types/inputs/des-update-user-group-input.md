---
title: "DesUpdateUserGroupInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-update-user-group-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUpdateUserGroupInput

Input for updating a user group.

### Member Of

[`desUpdateUserGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-update-user-group.md) mutation

```graphql
input DesUpdateUserGroupInput {
  groupId: String!
  name: String!
  workspaceUrl: String!
}
```

### Fields

#### `DesUpdateUserGroupInput.groupId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The group reference identifier.

#### `DesUpdateUserGroupInput.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The group name.

#### `DesUpdateUserGroupInput.workspaceUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The workspace URL where the group exists.
