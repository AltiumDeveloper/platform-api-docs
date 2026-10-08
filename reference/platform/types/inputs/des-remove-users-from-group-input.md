---
title: "DesRemoveUsersFromGroupInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-remove-users-from-group-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# DesRemoveUsersFromGroupInput

Input to remove users from group.

### Member Of

[`desRemoveUsersFromGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-remove-users-from-group.md) mutation

```graphql
input DesRemoveUsersFromGroupInput {
  groupId: String!
  userIds: [String!]!
  workspaceUrl: String!
}
```

### Fields

#### `groupId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The group reference identifier.

#### `userIds` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Workspace user identifiers.

#### `workspaceUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The workspace where the group exists.
