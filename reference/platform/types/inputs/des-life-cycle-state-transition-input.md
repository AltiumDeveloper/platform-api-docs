---
title: "DesLifeCycleStateTransitionInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-life-cycle-state-transition-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# DesLifeCycleStateTransitionInput

Input for life cycle state transition.

### Member Of

[`DesLifeCycleDefinitionInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-life-cycle-definition-input.md) input

```graphql
input DesLifeCycleStateTransitionInput {
  approvals: [DesLifeCycleStateTransitionApprovalGroupInput!]
  controllers: [DesLifeCycleStateTransitionControllerInput!]
  menuTextFormat: String!
  name: String!
  stateAfter: String!
  stateBefore: String!
}
```

### Fields

#### `DesLifeCycleStateTransitionInput.approvals` · [`[DesLifeCycleStateTransitionApprovalGroupInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-life-cycle-state-transition-approval-group-input.md) list input platform

Approval groups for this life cycle definition transition. Mutually exclusive with controllers, if approvals are set, controllers must be omitted.

#### `DesLifeCycleStateTransitionInput.controllers` · [`[DesLifeCycleStateTransitionControllerInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-life-cycle-state-transition-controller-input.md) list input platform

Controllers of this life cycle definition transition. If controllers and approvals are omitted, the controllers will default to ANYONE.

#### `DesLifeCycleStateTransitionInput.menuTextFormat` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Menu text format for life cycle state transition.

#### `DesLifeCycleStateTransitionInput.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Name of life cycle state transition.

#### `DesLifeCycleStateTransitionInput.stateAfter` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of the life cycle state after the transition.

#### `DesLifeCycleStateTransitionInput.stateBefore` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of the life cycle state before the transition.
