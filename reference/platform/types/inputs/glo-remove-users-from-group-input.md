---
title: "GloRemoveUsersFromGroupInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-remove-users-from-group-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloRemoveUsersFromGroupInput

Represents input value for removing user from group.

### Member Of

[`gloRemoveUsersFromGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-remove-users-from-group.md) mutation

```graphql
input GloRemoveUsersFromGroupInput {
  groupId: String
  userIds: [String]
}
```

### Fields

#### `groupId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Group identifier.

#### `userIds` · [`[String]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

User identifiers.
