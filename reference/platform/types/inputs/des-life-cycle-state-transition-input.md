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

#### `approvals` · [`[DesLifeCycleStateTransitionApprovalGroupInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-life-cycle-state-transition-approval-group-input.md) list input

Approval groups for this life cycle definition transition. Mutually exclusive with controllers, if approvals are set, controllers must be omitted.

#### `controllers` · [`[DesLifeCycleStateTransitionControllerInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-life-cycle-state-transition-controller-input.md) list input

Controllers of this life cycle definition transition. If controllers and approvals are omitted, the controllers will default to ANYONE.

#### `menuTextFormat` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Menu text format for life cycle state transition.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Name of life cycle state transition.

#### `stateAfter` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of the life cycle state after the transition.

#### `stateBefore` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of the life cycle state before the transition.
