---
title: "DesLifeCycleStateTransitionController"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state-transition-controller"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesLifeCycleStateTransitionController

Information about the life cycle state transition controllers.

### Member Of

[`DesLifeCycleStateTransition`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state-transition.md) object · [`DesLifeCycleStateTransitionApprovalGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state-transition-approval-group.md) object

```graphql
type DesLifeCycleStateTransitionController {
  group: DesUserGroup
  name: String!
  scope: DesPermissionScope!
  user: DesUser
}
```

### Fields

#### `DesLifeCycleStateTransitionController.group` · [`DesUserGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user-group.md) object platform

The group this life cycle state transition controller is assigned to. It is null unless the scope is set to `GROUP`.

#### `DesLifeCycleStateTransitionController.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of this life cycle state transition controller.

#### `DesLifeCycleStateTransitionController.scope` · [`DesPermissionScope!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-permission-scope.md) non-null enum platform

The scope of this life cycle state transition controller.

#### `DesLifeCycleStateTransitionController.user` · [`DesUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) object platform

The user this life cycle state transition controller is assigned to. It is null unless the scope is set to `USER`.
