---
title: "GloCreateUserGroupInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-create-user-group-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloCreateUserGroupInput

Represents input value for creation of a new group.

### Member Of

[`gloCreateUserGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-create-user-group.md) mutation

```graphql
input GloCreateUserGroupInput {
  groupName: String
  organizationId: String
}
```

### Fields

#### `GloCreateUserGroupInput.groupName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Group name.

#### `GloCreateUserGroupInput.organizationId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Organization identifier.
