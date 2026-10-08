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

#### `controllers` · [`[DesLifeCycleStateTransitionControllerInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-life-cycle-state-transition-controller-input.md) non-null input

The controllers that can provide an approval for this life cycle state transition approval group.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of this life cycle state transition approval group.
