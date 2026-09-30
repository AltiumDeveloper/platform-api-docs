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

### Member Of

[`DesWorkspaceUserFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-workspace-user-filter-input.md) input · [`RsaMotorStudioProjectFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-project-filter-input.md) input

```graphql
input DesWorkspaceUserFilterInput {
  and: [DesWorkspaceUserFilterInput!]
  groupIds: [String!]
  id: GridFilterInput
  or: [DesWorkspaceUserFilterInput!]
  text: String
  userIds: [String!]
  userTypes: [DesWorkspaceUserType!]
}
```

### Fields

#### `DesWorkspaceUserFilterInput.and` · [`[DesWorkspaceUserFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-workspace-user-filter-input.md) list input platform **EXPERIMENTAL**

#### `DesWorkspaceUserFilterInput.groupIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Workspace specific identifiers of the user groups (id or grid).

#### `DesWorkspaceUserFilterInput.id` · [`GridFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/grid-filter-input.md) input common **EXPERIMENTAL**

#### `DesWorkspaceUserFilterInput.or` · [`[DesWorkspaceUserFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-workspace-user-filter-input.md) list input platform **EXPERIMENTAL**

#### `DesWorkspaceUserFilterInput.text` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The text that either the guest first or last names or emails must contain. Case-insensitive.

#### `DesWorkspaceUserFilterInput.userIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Workspace specific identifiers of the users (id or grid).

#### `DesWorkspaceUserFilterInput.userTypes` · [`[DesWorkspaceUserType!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-workspace-user-type.md) list enum platform

The specific types of users to search.
