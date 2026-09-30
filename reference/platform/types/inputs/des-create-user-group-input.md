---
title: "DesCreateUserGroupInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-create-user-group-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCreateUserGroupInput

Input for user group creation.

### Member Of

[`desCreateUserGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-create-user-group.md) mutation

```graphql
input DesCreateUserGroupInput {
  name: String!
  workspaceUrl: String
}
```

### Fields

#### `DesCreateUserGroupInput.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

User group name.

#### `DesCreateUserGroupInput.workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

URL for workspace in which the user group is to be created.
