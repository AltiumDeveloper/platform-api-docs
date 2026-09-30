---
title: "DesLifeCycleStateTransition"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state-transition"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesLifeCycleStateTransition

Information about the life cycle state transition.

### Member Of

[`DesLifeCycleDefinition`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-definition.md) object

```graphql
type DesLifeCycleStateTransition {
  approvals: [DesLifeCycleStateTransitionApprovalGroup!]
  controllers: [DesLifeCycleStateTransitionController!]
  createdAt: DateTime!
  createdBy: DesUser!
  isPublic: Boolean!
  lifeCycleStateAfter: DesLifeCycleState
  lifeCycleStateBefore: DesLifeCycleState
  lifeCycleStateTransitionId: String!
  menuTextFormat: String!
  name: String!
  transitionKind: DesLifeCycleStateTransitionKind!
  updatedAt: DateTime!
  updatedBy: DesUser!
}
```

### Fields

#### `DesLifeCycleStateTransition.approvals` · [`[DesLifeCycleStateTransitionApprovalGroup!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state-transition-approval-group.md) list object platform

The groups that must provide an approval for the transition to be applied. If using controlled transitions, this will return null.

#### `DesLifeCycleStateTransition.controllers` · [`[DesLifeCycleStateTransitionController!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state-transition-controller.md) list object platform

The controllers who are allowed to perform this transition. If using approvals, this will return null.

#### `DesLifeCycleStateTransition.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The `DateTime` this life cycle state transition was created.

#### `DesLifeCycleStateTransition.createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The user this life cycle state transition was created by.

#### `DesLifeCycleStateTransition.isPublic` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Determines whether the transition is publicly accessible.

#### `DesLifeCycleStateTransition.lifeCycleStateAfter` · [`DesLifeCycleState`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state.md) object platform

The `DesLifeCycleState` after the transition is applied.

#### `DesLifeCycleStateTransition.lifeCycleStateBefore` · [`DesLifeCycleState`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state.md) object platform

The `DesLifeCycleState` before the transition is applied.

#### `DesLifeCycleStateTransition.lifeCycleStateTransitionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The reference identifier for this life cycle state transition.

#### `DesLifeCycleStateTransition.menuTextFormat` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The format string for the transition menu in Altium Designer.

#### `DesLifeCycleStateTransition.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of this life cycle state transition.

#### `DesLifeCycleStateTransition.transitionKind` · [`DesLifeCycleStateTransitionKind!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-life-cycle-state-transition-kind.md) non-null enum platform

Determines how the permissions for the state transition are managed.

#### `DesLifeCycleStateTransition.updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The `DateTime` this life cycle state transition was last updated at.

#### `DesLifeCycleStateTransition.updatedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The user this life cycle state transition was last updated by.
