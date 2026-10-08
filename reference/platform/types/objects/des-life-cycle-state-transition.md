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

#### `approvals` · [`[DesLifeCycleStateTransitionApprovalGroup!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state-transition-approval-group.md) list object

The groups that must provide an approval for the transition to be applied. If using controlled transitions, this will return null.

#### `controllers` · [`[DesLifeCycleStateTransitionController!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state-transition-controller.md) list object

The controllers who are allowed to perform this transition. If using approvals, this will return null.

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) this life cycle state transition was created.

#### `createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object

The user this life cycle state transition was created by.

#### `isPublic` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Determines whether the transition is publicly accessible.

#### `lifeCycleStateAfter` · [`DesLifeCycleState`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state.md) object

The [`DesLifeCycleState`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state.md) after the transition is applied.

#### `lifeCycleStateBefore` · [`DesLifeCycleState`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state.md) object

The [`DesLifeCycleState`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state.md) before the transition is applied.

#### `lifeCycleStateTransitionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The reference identifier for this life cycle state transition.

#### `menuTextFormat` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The format string for the transition menu in Altium Designer.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of this life cycle state transition.

#### `transitionKind` · [`DesLifeCycleStateTransitionKind!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-life-cycle-state-transition-kind.md) non-null enum

Determines how the permissions for the state transition are managed.

#### `updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) this life cycle state transition was last updated at.

#### `updatedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object

The user this life cycle state transition was last updated by.
