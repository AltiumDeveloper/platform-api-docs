---
title: "DesWorkspaceUserFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-workspace-user-filter-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# DesWorkspaceUserFilterInput

Specifies the filtering criteria for the workspace user list.

```graphql
input DesWorkspaceUserFilterInput {
  groupIds: [String!]
  text: String
  userIds: [String!]
  userTypes: [DesWorkspaceUserType!]
}
```

### Fields

#### `groupIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Workspace specific identifiers of the groups.

#### `text` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The text that either the guest first or last names or emails must contain. Case-insensitive.

#### `userIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Workspace specific identifiers of the users.

#### `userTypes` · [`[DesWorkspaceUserType!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-workspace-user-type.md) list enum

The specific type of users to search.
