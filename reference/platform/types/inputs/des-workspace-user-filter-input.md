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

#### `and` · [`[DesWorkspaceUserFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-workspace-user-filter-input.md) list input **EXPERIMENTAL**

#### `groupIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Workspace specific identifiers of the user groups (id or grid).

#### `id` · [`GridFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/grid-filter-input.md) input **EXPERIMENTAL**

#### `or` · [`[DesWorkspaceUserFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-workspace-user-filter-input.md) list input **EXPERIMENTAL**

#### `text` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The text that either the guest first or last names or emails must contain. Case-insensitive.

#### `userIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Workspace specific identifiers of the users (id or grid).

#### `userTypes` · [`[DesWorkspaceUserType!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-workspace-user-type.md) list enum

The specific types of users to search.
