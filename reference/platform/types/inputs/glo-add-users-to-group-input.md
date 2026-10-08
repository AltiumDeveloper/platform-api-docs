---
title: "GloAddUsersToGroupInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-add-users-to-group-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloAddUsersToGroupInput

Represents input value for adding user into group.

### Member Of

[`gloAddUsersToGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-add-users-to-group.md) mutation

```graphql
input GloAddUsersToGroupInput {
  groupId: String
  userIds: [String]
}
```

### Fields

#### `groupId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Group identifier.

#### `userIds` · [`[String]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

User identifiers.
