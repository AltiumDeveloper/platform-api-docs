---
title: "GloUserGroupInputFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-user-group-input-filter-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloUserGroupInputFilterInput

### Member Of

[`gloUserGroups`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-user-groups.md) query

```graphql
input GloUserGroupInputFilterInput {
  isGlobal: Boolean
  organizationId: String
  userGroupIds: [String]
  userGroupName: String
}
```

### Fields

#### `GloUserGroupInputFilterInput.isGlobal` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Indicates if group is global.

#### `GloUserGroupInputFilterInput.organizationId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Organization identifier.

#### `GloUserGroupInputFilterInput.userGroupIds` · [`[String]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

List of group identifiers.

#### `GloUserGroupInputFilterInput.userGroupName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Group name.
