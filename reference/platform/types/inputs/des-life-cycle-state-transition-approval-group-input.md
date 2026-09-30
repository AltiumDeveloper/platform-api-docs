---
title: "DesLifeCycleStateTransitionApprovalGroupInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-life-cycle-state-transition-approval-group-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# DesLifeCycleStateTransitionApprovalGroupInput

Input for the life cycle state transition approval group.

### Member Of

[`DesLifeCycleStateTransitionInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-life-cycle-state-transition-input.md) input

```graphql
input DesLifeCycleStateTransitionApprovalGroupInput {
  controllers: [DesLifeCycleStateTransitionControllerInput!]!
  name: String!
}
```

### Fields

#### `DesLifeCycleStateTransitionApprovalGroupInput.controllers` · [`[DesLifeCycleStateTransitionControllerInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-life-cycle-state-transition-controller-input.md) non-null input platform

The controllers that can provide an approval for this life cycle state transition approval group.

#### `DesLifeCycleStateTransitionApprovalGroupInput.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of this life cycle state transition approval group.
