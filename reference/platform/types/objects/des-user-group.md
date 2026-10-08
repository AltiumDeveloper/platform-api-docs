---
title: "DesUserGroup"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user-group"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesUserGroup

A user group information.

### Member Of

[`DesFolderPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-folder-permission.md) object · [`DesLifeCycleStateTransitionController`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state-transition-controller.md) object · [`DesProjectPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-permission.md) object · [`DesTeam`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-team.md) object · [`DesUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) object

```graphql
type DesUserGroup {
  name: String!
  userGroupId: String!
}
```

### Fields

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The group name.

#### `userGroupId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The reference identifier.
