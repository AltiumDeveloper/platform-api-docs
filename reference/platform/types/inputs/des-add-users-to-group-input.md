---
title: "DesAddUsersToGroupInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-add-users-to-group-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# DesAddUsersToGroupInput

Input for adding users to a group.

### Member Of

[`desAddUsersToGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-add-users-to-group.md) mutation

```graphql
input DesAddUsersToGroupInput {
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
