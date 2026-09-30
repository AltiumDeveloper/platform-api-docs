---
title: "DesLifeCycleStateTransitionControllerInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-life-cycle-state-transition-controller-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# DesLifeCycleStateTransitionControllerInput

Input for life cycle state transition controller.

### Member Of

[`DesLifeCycleStateTransitionApprovalGroupInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-life-cycle-state-transition-approval-group-input.md) input · [`DesLifeCycleStateTransitionInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-life-cycle-state-transition-input.md) input

```graphql
input DesLifeCycleStateTransitionControllerInput {
  groupId: String
  scope: DesPermissionScope!
  userId: String
}
```

### Fields

#### `DesLifeCycleStateTransitionControllerInput.groupId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Group reference identifier.

#### `DesLifeCycleStateTransitionControllerInput.scope` · [`DesPermissionScope!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-permission-scope.md) non-null enum platform

Scope of the transition controller.

#### `DesLifeCycleStateTransitionControllerInput.userId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Workspace user identifier.
